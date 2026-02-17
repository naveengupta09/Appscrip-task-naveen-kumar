"use client";

import { useState, useRef, useEffect } from "react";
import { useFilterStore, type SortOption } from "@/store/filterStore";

const SORT_OPTIONS = [
  { value: "recommended" as SortOption, label: "RECOMMENDED" },
  { value: "newest" as SortOption, label: "NEWEST FIRST" },
  { value: "popular" as SortOption, label: "POPULAR" },
  { value: "high-to-low" as SortOption, label: "PRICE : HIGH TO LOW" },
  { value: "low-to-high" as SortOption, label: "PRICE : LOW TO HIGH" },
];

export default function SortClient() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sortBy = useFilterStore((state) => state.sortBy);
  const setSortBy = useFilterStore((state) => state.setSortBy);

  const currentLabel =
    SORT_OPTIONS.find((opt) => opt.value === sortBy)?.label || "RECOMMENDED";

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  const handleSortChange = (option: SortOption) => {
    setSortBy(option);
    setIsOpen(false);
  };

  return (
    <div className="sort-container" ref={containerRef}>
      <button
        type="button"
        className="sort-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Sort products"
      >
        {currentLabel}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div className="sort-popover">
          {SORT_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`sort-option ${sortBy === option.value ? "is-active" : ""}`}
              onClick={() => handleSortChange(option.value)}
            >
              {sortBy === option.value && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
