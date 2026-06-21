import { StyleSheet } from "react-native";

export const filterCard = StyleSheet.create({
  arrangement: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "gray",
    margin: 2,
    padding: 2,
  },
  name: {
    flex: 1,
    color: "white",
    padding: 5,
    fontSize: 18,
  },
  quantity: {
    color: "white",
    padding: 5,
    fontSize: 18,
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
  },
});
