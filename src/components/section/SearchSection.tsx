import { searchSection } from "@/styles/section/SearchSection";
import { themes } from "@/themes/themes";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { View } from "react-native";
import Button from "../ui/Button";
import SearchBox from "../ui/SearchBox";

export default function SearchSection() {
  const router = useRouter();
  return (
    <View style={searchSection.arrangement}>
      <Button>
        <MaterialCommunityIcons
          name="file-plus-outline"
          size={themes.light.icon.size}
          color={themes.light.icon.primary}
        />
      </Button>

      <SearchBox />

      <Button
        onPress={() => {
          router.push("/filter");
        }}
      >
        <FontAwesome5
          name="sliders-h"
          size={themes.light.icon.size}
          color={themes.light.icon.primary}
        />
      </Button>
    </View>
  );
}
