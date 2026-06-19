import SearchSection from "@/components/section/SearchSection";
import SpellLevelSection from "@/components/section/SpellsLevelSection";
import SpellsListSection from "@/components/section/SpellsListSection";
import { flex } from "@/styles/Flex";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Tab() {
  return (
    <SafeAreaView style={flex.flex}>
      <View style={flex.flex}>
        <SearchSection />
        <SpellLevelSection />
        <SpellsListSection />
      </View>
    </SafeAreaView>
  );
}
