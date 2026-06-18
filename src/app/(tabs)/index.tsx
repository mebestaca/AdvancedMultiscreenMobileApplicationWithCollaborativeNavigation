import SearchSection from "@/components/section/SearchSection";
import SpellLevelSection from "@/components/section/SpellsLevelSection";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Tab() {
  return (
    <SafeAreaView>
      <View>
        <SearchSection />
        <SpellLevelSection />
      </View>
    </SafeAreaView>
  );
}
