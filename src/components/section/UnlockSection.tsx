import { unlockSection } from "@/styles/section/UnlockSection";
import { themes } from "@/themes/themes";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Text, View } from "react-native";

export default function UnlockSection() {
  return (
    <View style={unlockSection.arrangement}>
      <Text style={unlockSection.caption}>
        Do you want to unlock all features?
      </Text>
      <EvilIcons
        name="unlock"
        size={themes.light.evil.size}
        color={themes.light.icon.primary}
      />
    </View>
  );
}
