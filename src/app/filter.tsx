import ClearAllSection from "@/components/section/ClearAllSection";
import FilterSection from "@/components/section/FilterSection";
import FiltersListSection from "@/components/section/FiltersListSection";
import SpellsFoundSection from "@/components/section/SpellsFoundSection";
import { shared } from "@/styles/Shared";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Filter() {
  return (
    <SafeAreaView style={shared.flex}>
      <FilterSection />
      <ClearAllSection />
      <ScrollView>
        <FiltersListSection />
      </ScrollView>
      <SpellsFoundSection />
    </SafeAreaView>
  );
}
