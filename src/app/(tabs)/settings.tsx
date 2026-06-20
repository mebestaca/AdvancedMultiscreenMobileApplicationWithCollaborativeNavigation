import SettingsHeaderSection from "@/components/section/SettingsHeaderSection";
import SettingsListSection from "@/components/section/SettingsListSection";
import { shared } from "@/styles/Shared";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Tab() {
  return (
    <SafeAreaView style={shared.flex}>
      <SettingsHeaderSection />
      <ScrollView>
        <SettingsListSection />
      </ScrollView>
    </SafeAreaView>
  );
}
