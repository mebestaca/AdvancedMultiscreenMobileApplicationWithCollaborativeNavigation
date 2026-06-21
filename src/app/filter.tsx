import FilterSection from "@/components/section/FilterSection";
import { shared } from "@/styles/Shared";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Filter() {
  return (
    <SafeAreaView style={shared.flex}>
      <FilterSection />
    </SafeAreaView>
  );
}
