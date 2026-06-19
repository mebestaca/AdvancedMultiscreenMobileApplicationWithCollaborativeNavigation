import { shared } from "@/styles/Shared";
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
      <View style={spellcard.details}>
        <Text style={spellcard.name}>{name}</Text>
        <Text style={spellcard.school}>{school}</Text>
        <View style={shared.row}>
          {type.map((t, index) => (
            <Text key={index} style={spellcard.type}>
              {t.toUpperCase()}
            </Text>
          ))}
        </View>
        {duration && <Text style={spellcard.duration}>{duration}</Text>}
      </View>

      <Text style={spellcard.level}>{level}</Text>
    </View>
  );
}
