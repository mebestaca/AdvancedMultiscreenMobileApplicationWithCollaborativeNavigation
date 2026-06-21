import { themes } from "@/themes/themes";
import { StyleSheet } from "react-native";

export const setting = StyleSheet.create({
  arrangement: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  icon: {
    margin: 10,
  },
  text: {
    fontSize: 20,
    flex: 1,
    margin: 10,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: themes.light.border.color,
  },
  color: {
    flexDirection: "row",
  },
  colorBox: {
    marginLeft: 20,
    marginRight: 20,
  },
  colorCircle: {
    marginRight: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  host: {
    margin: 20,
    padding: 20,
  },
});
