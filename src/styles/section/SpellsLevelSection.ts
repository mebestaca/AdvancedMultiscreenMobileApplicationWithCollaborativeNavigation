import { themes } from "@/themes/themes";
import { StyleSheet } from "react-native";

export const spellsLevelSection = StyleSheet.create({
  arrangement: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    padding: 10,
    backgroundColor: themes.light.border.color,
    alignItems: "center",
  },
  level: {
    fontSize: 25,
  },
  spells: {
    fontSize: 18,
  },
});
