import { Setting } from "@/types/settings";
import { Switch, Text, View } from "react-native";

type SettingsProp = {
  resources: Setting;
};

export default function SettingsCard({ resources }: SettingsProp) {
  const { name, toggle, icon } = resources;
  return (
    <View>
      {icon}
      <Text>{name}</Text>
      {toggle === undefined ? false : true && <Switch value={toggle} />}
    </View>
  );
}
