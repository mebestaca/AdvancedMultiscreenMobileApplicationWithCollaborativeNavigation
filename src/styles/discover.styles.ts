import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "700",
    marginTop: 50,
    marginHorizontal: 20,
  },

  searchBar: {
    marginTop: 15,
    marginHorizontal: 20,
    backgroundColor: "#EDEBEC",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 60,
  },
  
  searchText: {
    marginLeft: 15,
    fontSize: 16,
    color: "#333",
  },

  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginHorizontal: 20,
    marginTop: 20,
  },
  
  categoryCard: {
    width: "48%",
    height: 50,
    backgroundColor: "#EDEBEC",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    marginBottom: 3,
  },

  categoryText: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 7,
  },

  topicGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
  
  topicCard: {
    width: "48%",
    height: 90,
    borderRadius: 18,
    justifyContent: "flex-end",
    padding: 16,
    marginBottom: 14,
  },
  
  topicTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
});
