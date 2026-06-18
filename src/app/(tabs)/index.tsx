import SearchBox from "@/components/SearchBox";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Tab() {
  return (
    <SafeAreaView>
      <View>
        <SearchBox />
      </View>
    </SafeAreaView>
  );
}
