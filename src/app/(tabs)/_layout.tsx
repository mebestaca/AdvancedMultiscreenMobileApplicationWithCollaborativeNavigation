import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { Tabs } from "expo-router";
import { themes } from "../../themes/themes";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="search"
              size={themes.light.icon.size}
              color={
                focused ? themes.light.icon.focused : themes.light.icon.color
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="characters"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <Octicons
              name="people"
              size={themes.light.icon.size}
              color={
                focused ? themes.light.icon.focused : themes.light.icon.color
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="cog-outline"
              size={themes.light.icon.size}
              color={
                focused ? themes.light.icon.focused : themes.light.icon.color
              }
            />
          ),
        }}
      />
    </Tabs>
  );
}
