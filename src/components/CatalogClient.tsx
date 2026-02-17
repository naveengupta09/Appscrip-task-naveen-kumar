"use client";

import { useEffect } from "react";
import FiltersClient from "./FiltersClient";
import ProductCard from "./ProductCard";
import { useFilterStore } from "@/store/filterStore";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  tags?: string[];
  rating?: {
    rate: number;
    count: number;
  };
  isAvailable: boolean;
};

type CatalogClientProps = {
  products: Product[];
  categories: string[];
  availableTags: string[];
  activeCategory: string;
};

export default function CatalogClient({
  products,
  categories,
  availableTags,
  activeCategory,
}: CatalogClientProps) {
  const selectedCategory = useFilterStore((state) => state.selectedCategory);
  const selectedTags = useFilterStore((state) => state.selectedTags);
  const sortBy = useFilterStore((state) => state.sortBy);
  const isFilterOpen = useFilterStore((state) => state.isFilterOpen);
  const initializeFilters = useFilterStore((state) => state.initializeFilters);

  // Initialize filters on mount
  useEffect(() => {
    initializeFilters(activeCategory, []);
  }, [activeCategory, initializeFilters]);

  // Filter products based on selected category and tags
  let filteredProducts = products;

  if (selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    );
  }

  if (selectedTags.size > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      Array.from(selectedTags).every((tag) => product.tags?.includes(tag))
    );
  }

  // Apply sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return b.id - a.id;
      case "popular":
        return (b.rating?.count || 0) - (a.rating?.count || 0);
      case "high-to-low":
        return b.price - a.price;
      case "low-to-high":
        return a.price - b.price;
      case "recommended":
      default:
        return 0;
    }
  });

  return (
    <div className={`catalog-grid-wrapper ${!isFilterOpen ? "filters-closed" : ""}`}>
      {isFilterOpen && (
        <FiltersClient
          categories={categories}
          availableTags={availableTags}
          activeCategory={selectedCategory}
          activeTags={Array.from(selectedTags)}
        />
      )}
      <div className="catalog-main" aria-label="Product list">
        <h2 className="section-title">Trending Products</h2>
        {sortedProducts.length === 0 ? (
          <div className="empty-state">
            No products found for this selection.
          </div>
        ) : (
          <div className="product-grid">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
