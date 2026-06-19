import { createCharacterhSection } from "@/styles/section/CreateCharacterSection";
import { shared } from "@/styles/Shared";
import { themes } from "@/themes/themes";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { Text, View } from "react-native";

export default function CreateCharacterSection() {
  return (
    <View style={createCharacterhSection.arrangement}>
      <Feather
        name="plus-circle"
        size={themes.light.icon.size}
        color={themes.light.icon.primary}
      />

      <Text style={shared.title}>Characters</Text>

      <Entypo
        name="dots-three-horizontal"
        size={themes.light.icon.size}
        color={themes.light.icon.primary}
      />
    </View>
  );
}
