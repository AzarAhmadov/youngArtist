import { create } from "zustand";
export type FilterName = "" | "azalan" | "artan";
interface FilterStore {
   filterName: FilterName;
   addFilter: (filter: FilterName) => void;
}

export const useFilterStore = create<FilterStore>()((set) => ({
   filterName: "",
   addFilter: (filterName: FilterName) => set({ filterName }),
}));
