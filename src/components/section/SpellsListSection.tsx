import { spells } from "@/data/spells";
import { View } from "react-native";
import SpellCard from "../ui/SpellCard";

export default function SpellsListSection() {
  return (
    <View>
      {spells.map((spell) => (
        <SpellCard resource={spell} key={spell.id} />
      ))}
    </View>
  );
}
