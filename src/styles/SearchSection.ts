import { StyleSheet } from "react-native";

export const searchSection = StyleSheet.create({
  arrangement: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
  },
  textbox: {
    flex: 1,
    borderWidth: 2,
    height: 50,
    fontSize: 18,
    borderRadius: 20,
  },
});
