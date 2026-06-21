import { filters } from "@/data/filters";
import { View } from "react-native";
import FilterCard from "../ui/FilterCard";

export default function FiltersListSection() {
  return (
    <View>
      {filters.map((filter) => (
        <FilterCard resource={filter} key={filter.id} />
      ))}
    </View>
  );
}
