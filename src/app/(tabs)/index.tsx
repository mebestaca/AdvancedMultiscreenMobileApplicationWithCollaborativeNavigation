import SearchSection from "@/components/section/SearchSection";
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
