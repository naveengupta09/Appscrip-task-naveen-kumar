"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/ProductCard.module.css";
import HeartIcon from "@/components/icons/HeartIcon";
import { formatCurrency } from "@/utils/currency";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  isAvailable: boolean;
  favorite?: boolean;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const priceLabel = formatCurrency(product.price);
  const storageKey = "favoriteProducts";
  const [isFavorite, setIsFavorite] = useState(Boolean(product.favorite));

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      const stored = localStorage.getItem(storageKey);
      if (!stored) {
        setIsFavorite(Boolean(product.favorite));
        return;
      }

      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        setIsFavorite(parsed.includes(product.id));
      }
    } catch {
      setIsFavorite(Boolean(product.favorite));
    }
  }, [product.id, product.favorite]);

  const handleFavoriteToggle = () => {
    const nextValue = !isFavorite;
    setIsFavorite(nextValue);

    if (typeof window === "undefined") {
      return;
    }

    try {
      const stored = localStorage.getItem(storageKey);
      const parsed = stored ? JSON.parse(stored) : [];
      const favoriteIds = Array.isArray(parsed) ? parsed : [];
      const updated = nextValue
        ? Array.from(new Set([...favoriteIds, product.id]))
        : favoriteIds.filter((id) => id !== product.id);

      localStorage.setItem(storageKey, JSON.stringify(updated));
    } catch {
      // Ignore localStorage errors silently.
    }
  };

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        {/* if isAvailabele is false then show a overlay bg will be white with 80% opacity and text in the center "Out of Stock" with color white and some padding */}
        {product.isAvailable ? null : (
          <div className={styles.outOfStockOverlay}>
            <span className={styles.outOfStockText}>Out of Stock</span>
          </div>
        )}
        <Image
          src={product.image}
          alt={product.title}
          width={320}
          height={320}
          className={styles.image}
          sizes="(max-width: 720px) 90vw, (max-width: 1024px) 45vw, 22vw"
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.meta}>
          <div>
            <span className={styles.signin}>Sign in</span> or Create an account
            to see pricing
          </div>
          <button
            type="button"
            className={styles.favoriteButton}
            aria-pressed={isFavorite}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
            onClick={handleFavoriteToggle}
          >
            <HeartIcon
              size={20}
              color={isFavorite ? "#EB4C6B" : "currentColor"}
              fill={isFavorite ? "#EB4C6B" : "none"}
            />
          </button>
        </div>
      </div>
    </article>
  );
}
