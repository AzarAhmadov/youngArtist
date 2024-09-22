import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FilterName, useFilterStore } from "@/store/filter.store";

const useIsIOS = () => {
   const [isIOS, setIsIOS] = useState(false);

   useEffect(() => {
      const ua = navigator.userAgent;
      setIsIOS(/iPad|iPhone|iPod/.test(ua));
   }, []);

   return isIOS;
};

const FilterSelect = () => {
   const { addFilter } = useFilterStore();
   const isIOS = useIsIOS();

   const filterChange = (value: FilterName | string) => {
      addFilter(value as FilterName);
   };

   return (
      <div className="relative w-[180px]">
         {isIOS ? (
            <select
               onChange={(e) => filterChange(e.target.value)}
               className="block h-[36px] w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            >
               <option value="" disabled selected>
                  Qiymət aralığı
               </option>
               <option value="azalan">Bahadan ucuza</option>
               <option value="artan">Ucuzdan bahaya</option>
            </select>
         ) : (
            <Select onValueChange={filterChange}>
               <SelectTrigger className="w-full">
                  <SelectValue placeholder="Qiymət aralığı" />
               </SelectTrigger>
               <SelectContent>
                  <SelectItem value="azalan">Bahadan ucuza</SelectItem>
                  <SelectItem value="artan">Ucuzdan bahaya</SelectItem>
               </SelectContent>
            </Select>
         )}
      </div>
   );
};

export default FilterSelect;
