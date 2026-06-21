import { themes } from "@/themes/themes";
import { Setting } from "@/types/settings";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

export const settings: Setting[] = [
  {
    id: 1,
    name: "Restore in-App Purchases",
    toggle: undefined,
    icon: (
      <Feather
        name="download-cloud"
        size={themes.light.icon2.size}
        color="black"
      />
    ),
    colors: undefined,
  },
  {
    id: 2,
    name: "Night mode",
    toggle: false,
    icon: (
      <FontAwesome name="moon-o" size={themes.light.icon2.size} color="black" />
    ),
    colors: undefined,
  },
  {
    id: 3,
    name: "Auto add spells from Subclass",
    toggle: true,
    icon: (
      <MaterialCommunityIcons
        name="pin-outline"
        size={themes.light.icon2.size}
        color="black"
      />
    ),
    colors: undefined,
  },
  {
    id: 4,
    name: "Show Spell Tags",
    toggle: true,
    icon: (
      <MaterialCommunityIcons
        name="tag-outline"
        size={themes.light.icon2.size}
        color="black"
      />
    ),
    colors: undefined,
  },
  {
    id: 5,
    name: "Color",
    toggle: undefined,
    icon: (
      <MaterialCommunityIcons
        name="format-color-fill"
        size={themes.light.icon2.size}
        color="black"
      />
    ),
    colors: true,
  },
  {
    id: 7,
    name: "Tips",
    toggle: undefined,
    icon: (
      <Ionicons
        name="heart-outline"
        size={themes.light.icon2.size}
        color="black"
      />
    ),
    colors: undefined,
    slider: true,
  },
  {
    id: 8,
    name: "Change Language",
    toggle: undefined,
    icon: (
      <FontAwesome
        name="language"
        size={themes.light.icon2.size}
        color="black"
      />
    ),
  },
  {
    id: 9,
    name: "Rate this app",
    toggle: undefined,
    icon: <Feather name="star" size={themes.light.icon2.size} color="black" />,
  },
  {
    id: 10,
    name: "Contact us",
    toggle: undefined,
    icon: (
      <SimpleLineIcons
        name="envelope"
        size={themes.light.icon2.size}
        color="black"
      />
    ),
  },
  {
    id: 11,
    name: "Share with your friends",
    toggle: undefined,
    icon: (
      <Ionicons
        name="share-social-outline"
        size={themes.light.icon2.size}
        color="black"
      />
    ),
  },
];
