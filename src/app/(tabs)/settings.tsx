import SettingsHeaderSection from "@/components/section/SettingsHeaderSection";
import { shared } from "@/styles/Shared";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Tab() {
  return (
    <SafeAreaView style={shared.flex}>
      <SettingsHeaderSection />
    </SafeAreaView>
  );
}
