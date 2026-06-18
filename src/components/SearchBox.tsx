import { themes } from "@/themes/themes";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native";
import Button from "./Button";

export default function SearchBox() {
  return (
    <View>
      <Button>
        <MaterialCommunityIcons
          name="file-plus-outline"
          size={themes.light.icon.size}
          color={themes.light.icon.primary}
        />

        <FontAwesome5
          name="sliders-h"
          size={themes.light.icon.size}
          color={themes.light.icon.primary}
        />
      </Button>
    </View>
  );
}
