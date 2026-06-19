import { themes } from "@/themes/themes";
import { StyleSheet } from "react-native";

export const unlockSection = StyleSheet.create({
  arrangement: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 2,
    paddingLeft: 10,
    paddingRight: 10,
    borderTopColor: themes.light.border.color,
  },
  caption: {
    fontSize: 20,
  },
});
