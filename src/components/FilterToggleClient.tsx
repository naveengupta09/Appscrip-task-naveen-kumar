"use client";

import { useFilterStore } from "@/store/filterStore";

export default function FilterToggleClient() {
  const isFilterOpen = useFilterStore((state) => state.isFilterOpen);
  const toggleFilters = useFilterStore((state) => state.toggleFilters);

  return (
    <button
      type="button"
      className="filter-toggle-btn"
      onClick={toggleFilters}
      aria-expanded={isFilterOpen}
      aria-label={isFilterOpen ? "Hide filters" : "Show filters"}
      style={{textDecoration: "underline", textUnderlineOffset: "2px"}}
    >
      {isFilterOpen ? "Hide Filters" : "Show Filters"}
    </button>
  );
}
