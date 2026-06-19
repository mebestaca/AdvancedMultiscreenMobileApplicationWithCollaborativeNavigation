import SearchSection from "@/components/section/SearchSection";
import SpellLevelSection from "@/components/section/SpellsLevelSection";
import SpellsListSection from "@/components/section/SpellsListSection";
import { shared } from "@/styles/Shared";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Tab() {
  return (
    <SafeAreaView style={shared.flex}>
      <View style={shared.flex}>
        <SearchSection />
        <SpellLevelSection />
        <ScrollView>
          <SpellsListSection />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
