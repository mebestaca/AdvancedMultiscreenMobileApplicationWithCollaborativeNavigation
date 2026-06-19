import { themes } from "@/themes/themes";
import { StyleSheet } from "react-native";

export const spellcard = StyleSheet.create({
  arrangement: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
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
  name: {
    fontSize: 20,
  },
  school: {
    fontSize: 18,
  },
  level: {
    fontSize: 18,
  },
  type: {
    backgroundColor: themes.light.icon.color,
    marginRight: 3,
    marginTop: 3,
    padding: 5,
    borderRadius: 8,
  },
  duration: {
    fontSize: 15,
  },
});
