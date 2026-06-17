import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { Tabs } from "expo-router";

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
              size={icon.size}
              color={focused ? icon.focused : icon.color}
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
              size={icon.size}
              color={focused ? icon.focused : icon.color}
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
              size={icon.size}
              color={focused ? icon.focused : icon.color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

export const icon = {
  size: 30,
  color: "gray",
  focused: "green",
};
