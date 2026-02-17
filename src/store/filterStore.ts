import { create } from "zustand";

export type SortOption = "recommended" | "newest" | "popular" | "high-to-low" | "low-to-high";

interface FilterState {
  selectedCategory: string;
  selectedTags: Set<string>;
  sortBy: SortOption;
  setCategory: (category: string) => void;
  setTags: (tags: Set<string>) => void;
  toggleTag: (tag: string) => void;
  clearFilters: () => void;
  setSortBy: (sort: SortOption) => void;
  initializeFilters: (category: string, tags: string[]) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  selectedCategory: "all",
  selectedTags: new Set(),
  sortBy: "recommended",

  setCategory: (category: string) =>
    set({ selectedCategory: category }),

  setTags: (tags: Set<string>) =>
    set({ selectedTags: tags }),

  toggleTag: (tag: string) =>
    set((state) => {
      const newTags = new Set(state.selectedTags);
      if (newTags.has(tag)) {
        newTags.delete(tag);
      } else {
        newTags.add(tag);
      }
      return { selectedTags: newTags };
    }),

  clearFilters: () =>
    set({
      selectedTags: new Set(),
    }),

  setSortBy: (sort: SortOption) =>
    set({ sortBy: sort }),

  initializeFilters: (category: string, tags: string[]) =>
    set({
      selectedCategory: category,
      selectedTags: new Set(tags),
    }),
}));
