import SettingsHeaderSection from "@/components/section/SettingsHeaderSection";
import { shared } from "@/styles/Shared";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Tab() {
  return (
    <SafeAreaView style={shared.flex}>
      <SettingsHeaderSection />
      <View style={shared.flex}>
        <Text>Check</Text>
      </View>
    </SafeAreaView>
  );
}
