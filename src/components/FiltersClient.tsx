"use client";

import { useState } from "react";
import { useFilterStore } from "@/store/filterStore";

type FiltersClientProps = {
  categories: string[];
  availableTags: string[];
  activeCategory: string;
  activeTags: string[];
};

export default function FiltersClient({
  categories,
  availableTags,
  activeCategory,
  activeTags,
}: FiltersClientProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["category"]),
  );

  const selectedTags = useFilterStore((state) => state.selectedTags);
  const toggleTag = useFilterStore((state) => state.toggleTag);
  const clearFilters = useFilterStore((state) => state.clearFilters);
  const clearTagGroup = useFilterStore((state) => state.clearTagGroup);
  const setCategory = useFilterStore((state) => state.setCategory);

  const toggleSection = (section: string) => {
    const newSet = new Set(expandedSections);
    if (newSet.has(section)) {
      newSet.delete(section);
    } else {
      newSet.add(section);
    }
    setExpandedSections(newSet);
  };

  const handleCategoryClick = (category: string) => {
    setCategory(category);
  };

  const tagGroups: Record<string, string[]> = {
    Material: [
      "cotton",
      "leather",
      "canvas",
      "ceramic",
      "linen",
      "stainless-steel",
      "knit",
    ],
    Style: ["casual", "minimalist", "structured", "lightweight", "cozy"],
    Features: [
      "padded",
      "breathable",
      "wind-resistant",
      "rfid",
      "slim",
      "sturdy",
      "eco-friendly",
      "insulated",
      "portable",
      "protective",
    ],
    Use: [
      "travel",
      "work",
      "laptop",
      "coffee",
      "sports",
      "outdoor",
      "desk",
      "tech",
      "audio",
      "home-decor",
    ],
  };

  return (
    <section className="filters" aria-label="Filters">
      <aside className="filters-sidebar" aria-label="Sidebar filters">
        <div className="filters-header">
          <span className="filters-count">
            {selectedTags.size > 0
              ? `${selectedTags.size} selected`
              : "Filters"}
          </span>
          {selectedTags.size > 0 && (
            <button
              type="button"
              className="filters-toggle"
              onClick={clearFilters}
              title="Clear all selections"
            >
              Clear All
            </button>
          )}
        </div>

        {Object.entries(tagGroups).map(([groupName, tags]) => {
          const selectedInGroup = tags.filter((tag) => selectedTags.has(tag));
          const hasSelection = selectedInGroup.length > 0;

          return (
            <div key={groupName} className="filters-section">
              <button
                type="button"
                className="filters-trigger"
                onClick={() => toggleSection(groupName)}
              >
                <span className="filters-trigger-content">
                  <span className="filters-trigger-title">{groupName}</span>
                  {!hasSelection && (
                    <span className="filters-value">All</span>
                  )}
                  {hasSelection && (
                    <span className="filters-value">
                      {selectedInGroup.join(", ")}
                    </span>
                  )}
                </span>
                <span
                  className={`filters-arrow ${
                    expandedSections.has(groupName) ? "is-open" : ""
                  }`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.72003 10.73L7.0667 6.3849C7.58003 5.87174 8.42003 5.87174 8.93336 6.3849L13.28 10.73"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              {expandedSections.has(groupName) && (
                <div className="filters-options">
                  {hasSelection && (
                    <button
                      type="button"
                      className="filters-unselect-btn"
                      onClick={() => clearTagGroup(tags)}
                    >
                      Unselect All
                    </button>
                  )}
                  {tags.map((tag) => (
                    <label key={tag} className="filters-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedTags.has(tag)}
                        onChange={() => toggleTag(tag)}
                      />
                      <span>{tag}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        <div className="filters-section">
          <div className="filters-label">By Category</div>
          <div className="filters-list">
            <a
              href="#"
              className={`filters-link ${
                activeCategory === "all" ? "is-active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleCategoryClick("all");
              }}
            >
              All
            </a>
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <a
                  key={category}
                  href="#"
                  className={`filters-link ${isActive ? "is-active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategoryClick(category);
                  }}
                >
                  {category}
                </a>
              );
            })}
          </div>
        </div>
      </aside>

      <div className="filters-chips" aria-label="Active filters">
        <div className="active-tags">
          {selectedTags.size > 0 && (
            <>
              <p className="active-tags-label">Active filters:</p>
              <button
                type="button"
                className="filters-clear-btn"
                onClick={clearFilters}
              >
                Clear All
              </button>
            </>
          )}
          {Array.from(selectedTags).map((tag) => (
            <div key={tag} className="tag-chip">
              <span>{tag}</span>
              <button
                type="button"
                onClick={() => toggleTag(tag)}
                aria-label={`Remove ${tag} filter`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
