import { spellcard } from "@/styles/ui/Spellcard";
import { themes } from "@/themes/themes";
import { Spell } from "@/types/spell";
import Feather from "@expo/vector-icons/Feather";
import { Text, View } from "react-native";

type SpellProps = {
  resource: Spell;
};

export default function SpellCard({ resource }: SpellProps) {
  const { name, school, type, duration, level } = resource;
  return (
    <View style={spellcard.arrangement}>
      <Feather
        name="plus-circle"
        size={themes.light.icon.size}
        color={themes.light.icon.primary}
      />
      <View>
        <Text>{name}</Text>
        <Text>{school}</Text>
        <Text>{type}</Text>
        <Text>{duration}</Text>
      </View>

      <Text>{level}</Text>
    </View>
  );
}
