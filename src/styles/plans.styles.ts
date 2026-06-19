import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    paddingHorizontal: 20,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  title: {
    fontSize: 40,
    fontWeight: "700",
    color: "#000",
  },

  tabRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  activePill: {
    backgroundColor: "#000",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 30,
  },

  activePillText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },

  pill: {
    backgroundColor: "#E8E8E8",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 30,
  },

  pillText: {
    color: "#000",
    fontSize: 12,
    fontWeight: "700",
  },

  disabledPill: {
    backgroundColor: "#E8E8E8",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 30,
  },

  disabledPillText: {
    color: "#9E9E9E",
    fontSize: 12,
    fontWeight: "700",
  },
});