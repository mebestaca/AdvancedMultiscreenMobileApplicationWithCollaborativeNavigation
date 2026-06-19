import { themes } from "@/themes/themes";
import { StyleSheet } from "react-native";

export const spellcard = StyleSheet.create({
  arrangement: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    borderBottomWidth: 1,
    borderColor: themes.light.border.color,
  },
  details: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 25,
  },
});
