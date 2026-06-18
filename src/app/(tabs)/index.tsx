import SearchSection from "@/components/SearchSection";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Tab() {
  return (
    <SafeAreaView>
      <View>
        <SearchSection />
      </View>
    </SafeAreaView>
  );
}
