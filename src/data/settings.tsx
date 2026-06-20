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
    icon: <Feather name="download-cloud" size={24} color="black" />,
    colors: undefined,
  },
  {
    id: 2,
    name: "Night mode",
    toggle: false,
    icon: <FontAwesome name="moon-o" size={24} color="black" />,
    colors: undefined,
  },
  {
    id: 3,
    name: "Auto add spells from Subclass",
    toggle: true,
    icon: <MaterialCommunityIcons name="pin-outline" size={24} color="black" />,
    colors: undefined,
  },
  {
    id: 4,
    name: "Show Spell Tags",
    toggle: true,
    icon: <MaterialCommunityIcons name="tag-outline" size={24} color="black" />,
    colors: undefined,
  },
  {
    id: 5,
    name: "Color",
    toggle: undefined,
    icon: (
      <MaterialCommunityIcons
        name="format-color-fill"
        size={24}
        color="black"
      />
    ),
  },
  {
    id: 6,
    name: "Change the color of the buttons",
    toggle: undefined,
    icon: undefined,
    colors: true,
  },
  {
    id: 7,
    name: "Tips",
    toggle: undefined,
    icon: <Ionicons name="heart-outline" size={24} color="black" />,
    colors: true,
    slider: true,
    button: true,
  },
  {
    id: 8,
    name: "Change Language",
    toggle: undefined,
    icon: <FontAwesome name="language" size={24} color="black" />,
  },
  {
    id: 9,
    name: "Rate this app",
    toggle: undefined,
    icon: <Feather name="star" size={24} color="black" />,
  },
  {
    id: 10,
    name: "Contact us",
    toggle: undefined,
    icon: <SimpleLineIcons name="envelope" size={24} color="black" />,
  },
  {
    id: 11,
    name: "Share with your friends",
    toggle: undefined,
    icon: <Ionicons name="share-social-outline" size={24} color="black" />,
  },
];
