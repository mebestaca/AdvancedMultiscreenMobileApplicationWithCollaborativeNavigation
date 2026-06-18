import { searchSection } from "@/styles/SearchSection";
import { themes } from "@/themes/themes";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { TextInput, View } from "react-native";
import Button from "./Button";

export default function SearchSection() {
  return (
    <View style={searchSection.arrangement}>
      <Button>
        <MaterialCommunityIcons
          name="file-plus-outline"
          size={themes.light.icon.size}
          color={themes.light.icon.primary}
        />
      </Button>

      <View>
        <TextInput
          style={searchSection.textbox}
          placeholder="Search by name"
          onChangeText={(value) => console.log(value)}
        />
        <Entypo name="chevron-down" size={24} color="black" />
      </View>

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
