import { clearAllSection } from "@/styles/section/ClearAll";
import { Text, View } from "react-native";

export default function ClearAllSection() {
  return (
    <View style={clearAllSection.arrangement}>
      <Text style={clearAllSection.clearAll}>Clear All</Text>
    </View>
  );
}
