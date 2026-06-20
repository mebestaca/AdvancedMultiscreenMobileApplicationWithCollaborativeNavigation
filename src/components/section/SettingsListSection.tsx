import { settings } from "@/data/settings";
import { View } from "react-native";
import SettingsCard from "../ui/SettingsCard";

export default function SettingsListSection() {
  return (
    <View>
      {settings.map((setting) => (
        <SettingsCard resources={setting} key={setting.id} />
      ))}
    </View>
  );
}
