import { spellsLevelSection } from "@/styles/section/SpellsLevelSection";
import { Text, View } from "react-native";

export default function SpellLevelSection() {
  return (
    <View style={spellsLevelSection.arrangement}>
      <Text style={spellsLevelSection.level}>Level: 1</Text>
      <Text style={spellsLevelSection.spells}>Spells: 46</Text>
    </View>
  );
}
