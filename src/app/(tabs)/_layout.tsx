import { tabData } from "@/data/tabData";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {tabData.map((tab) => (
        <Tabs.Screen key={tab.name} {...tab} />
      ))}
    </Tabs>
  );
}
