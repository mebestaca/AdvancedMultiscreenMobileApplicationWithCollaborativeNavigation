import { searchBox } from "@/styles/SearchBox";
import { themes } from "@/themes/themes";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { TextInput, View } from "react-native";
import Button from "./Button";

export default function SearchBox() {
  return (
    <View style={searchBox.arrangement}>
      <Button>
        <MaterialCommunityIcons
          name="file-plus-outline"
          size={themes.light.icon.size}
          color={themes.light.icon.primary}
        />
      </Button>

      <TextInput
        style={{ flex: 1 }}
        placeholder="Search by name"
        onChangeText={(value) => console.log(value)}
      />

      <Button>
        <FontAwesome5
          name="sliders-h"
          size={themes.light.icon.size}
          color={themes.light.icon.primary}
        />
      </Button>
    </View>
  );
}
