import { settingsHeaderSection } from "@/styles/section/SettingsHeaderSection";
import { shared } from "@/styles/Shared";
import { Text, View } from "react-native";

export default function SettingsHeaderSection() {
  return (
    <View style={settingsHeaderSection.arrangement}>
      <Text style={shared.title}>Settings</Text>
    </View>
  );
}
