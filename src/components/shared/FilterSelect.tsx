import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FilterName, useFilterStore } from "@/store/filter.store";

const FilterSelect = () => {
   const { addFilter } = useFilterStore();

   const filterChange = (e: FilterName) => {
      addFilter(e);
   };

   return (
      <Select onValueChange={filterChange}>
         <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Qiymət aralığı" />
         </SelectTrigger>
         <SelectContent>
            <SelectItem value="azalan">Bahadan ucuza</SelectItem>
            <SelectItem value="artan">Ucuzdan bahayar</SelectItem>
         </SelectContent>
      </Select>
   );
};
export default FilterSelect;
