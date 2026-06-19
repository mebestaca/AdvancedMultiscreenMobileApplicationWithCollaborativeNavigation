import { shared } from "@/styles/Shared";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Tab() {
  return (
    <SafeAreaView style={shared.flex}>
      <View style={shared.flex}></View>
    </SafeAreaView>
  );
}
