import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",

    justifyContent: "center", 
    alignItems: "center",    
  },

  verseContainer: {
    backgroundColor: "#fff",

    width: "85%",
    padding: 24,

    borderRadius: 20,

    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  reference: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 16,
    color: "#000",
  },

  verse: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: "center",
    color: "#333",
  },

});