import { setting } from "@/styles/ui/Settings";
import { themes } from "@/themes/themes";
import { Setting } from "@/types/settings";
import { Host, Slider } from "@expo/ui";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { Switch, Text, View } from "react-native";

type SettingsProp = {
  resources: Setting;
};

export default function SettingsCard({ resources }: SettingsProp) {
  const [value, setValue] = useState(0);
  const { name, toggle, icon, colors, slider } = resources;
  return (
    <View style={setting.border}>
      <View style={setting.arrangement}>
        <View style={setting.icon}>{icon}</View>
        <Text style={setting.text}>{name}</Text>
        {toggle === undefined ? false : true && <Switch value={toggle} />}
      </View>
      <View>
        {colors === undefined
          ? false
          : true && (
              <View style={setting.colorBox}>
                <Text>Change the color of the buttons</Text>
                <View style={setting.color}>
                  <View style={setting.colorCircle}>
                    <FontAwesome
                      name="circle"
                      size={themes.light.icon2.size}
                      color="orange"
                    />
                  </View>
                  <View style={setting.colorCircle}>
                    <FontAwesome
                      name="circle"
                      size={themes.light.icon2.size}
                      color="red"
                    />
                  </View>
                  <View style={setting.colorCircle}>
                    <FontAwesome
                      name="circle"
                      size={themes.light.icon2.size}
                      color="green"
                    />
                  </View>

                  <View style={setting.colorCircle}>
                    <FontAwesome
                      name="circle"
                      size={themes.light.icon2.size}
                      color="blue"
                    />
                  </View>
                </View>
              </View>
            )}
        {slider === undefined
          ? false
          : true && (
              <Host style={setting.host}>
                <Slider value={0} onValueChange={setValue} />
              </Host>
            )}
      </View>
    </View>
  );
}
