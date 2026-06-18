import { tab } from "@/data/tab";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {tab.map((tab) => (
        <Tabs.Screen key={tab.name} {...tab} />
      ))}
    </Tabs>
  );
}
