import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { themes } from "../themes/themes";

type TabIconProps = {
  focused: boolean;
};

export const tabData = [
  {
    name: "index",
    options: {
      title: "",
      tabBarIcon: ({ focused }: TabIconProps) => (
        <Feather
          name="search"
          size={themes.light.icon.size}
          color={focused ? themes.light.icon.focused : themes.light.icon.color}
        />
      ),
    },
  },
  {
    name: "characters",
    options: {
      title: "",
      tabBarIcon: ({ focused }: TabIconProps) => (
        <Octicons
          name="people"
          size={themes.light.icon.size}
          color={focused ? themes.light.icon.focused : themes.light.icon.color}
        />
      ),
    },
  },
  {
    name: "settings",
    options: {
      title: "",
      tabBarIcon: ({ focused }: TabIconProps) => (
        <MaterialCommunityIcons
          name="cog-outline"
          size={themes.light.icon.size}
          color={focused ? themes.light.icon.focused : themes.light.icon.color}
        />
      ),
    },
  },
];
