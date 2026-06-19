import { themes } from "@/themes/themes";
import { StyleSheet } from "react-native";

export const spellcard = StyleSheet.create({
  arrangement: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    borderBottomWidth: 1,
    borderColor: themes.light.border.color,
  },
});
