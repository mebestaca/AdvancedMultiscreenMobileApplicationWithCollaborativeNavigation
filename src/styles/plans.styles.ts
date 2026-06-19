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

  planCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 24,
    borderRadius: 24,
    overflow: "hidden",
    minHeight: 550,
  },

  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  
  gridImage: {
    width: "33.33%",
    height: 100,
  },

  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  emptyTitle: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: 20,
  },

  emptyDescription: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginTop: 12,
    lineHeight: 24,
  },

  findPlanButton: {
    marginTop: 30,
    backgroundColor: "#000",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
  },

  findPlanText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});