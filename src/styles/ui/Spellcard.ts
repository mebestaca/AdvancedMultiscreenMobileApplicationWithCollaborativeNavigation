import { themes } from "@/themes/themes";
import { StyleSheet } from "react-native";

export const spellcard = StyleSheet.create({
  arrangement: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
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
