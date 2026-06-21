import { searchSection } from "@/styles/section/SearchSection";
import { themes } from "@/themes/themes";

import { filterSection } from "@/styles/section/FilterSection";
import { shared } from "@/styles/Shared";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import Button from "../ui/Button";

export default function FilterSection() {
  const router = useRouter();
  return (
    <View style={searchSection.arrangement}>
      <Button
        onPress={() => {
          router.back();
        }}
      >
        <Ionicons
          name="chevron-back"
          size={themes.light.icon.size}
          color={themes.light.icon.primary}
        />
      </Button>

      <Text style={shared.title}>Filters</Text>

      <Text style={filterSection.search}>Search</Text>
    </View>
  );
}
