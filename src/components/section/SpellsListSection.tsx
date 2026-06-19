import { spells } from "@/data/spells";
import { ScrollView, View } from "react-native";
import SpellCard from "../ui/SpellCard";

export default function SpellsListSection() {
  return (
    <View>
      <ScrollView>
        {spells.map((spell) => (
          <SpellCard resource={spell} key={spell.id} />
        ))}
      </ScrollView>
    </View>
  );
}
