import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Spells",
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="characters"
        options={{
          title: "Character",
          tabBarIcon: ({ color }) => (
            <Octicons name="people" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cog-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tabs>
  );
}
