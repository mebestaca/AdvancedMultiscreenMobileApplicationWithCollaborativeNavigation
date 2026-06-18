import { themes } from "@/themes/themes";
import { StyleSheet } from "react-native";

export const searchBox = StyleSheet.create({
  arrangement: {
    position: "relative",
    width: "70%",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 2,
    borderRadius: 30,
    overflow: "hidden",
    fontSize: 18,
    paddingRight: 40,
    paddingLeft: 15,
    borderColor: themes.light.border.color,
  },
  icon: {
    position: "absolute",
    right: 12,
    top: 13,
  },
});
