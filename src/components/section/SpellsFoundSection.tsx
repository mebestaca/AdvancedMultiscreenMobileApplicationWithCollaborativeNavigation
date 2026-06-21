import { spellsFoundSection } from "@/styles/section/SpellsFound";
import { Text, View } from "react-native";

export default function SpellsFoundSection() {
  return (
    <View style={spellsFoundSection.arrangement}>
      <Text style={spellsFoundSection.text}>Spells found 520</Text>
    </View>
  );
}
