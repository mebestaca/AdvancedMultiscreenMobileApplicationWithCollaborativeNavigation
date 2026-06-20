import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6f8",
  },
  
  header: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "#fff",
    paddingBottom: 10,
  },  

    tabs: {
      flexDirection: "row",
      gap: 20,
      alignItems: "flex-end",
    },
    
    tab: {
      alignItems: "center",
    },
    
    activeText: {
      fontSize: 20,
      fontWeight: "700",
      color: "#000",
    },
    
    inactiveText: {
      fontSize: 20,
      fontWeight: "500",
      color: "#999",
    },
    
    underline: {
      marginTop: 4,
      height: 3,
      width: "100%",
      backgroundColor: "red",
      borderRadius: 2,
    },
  
    headerIcons: {
      flexDirection: "row",
      alignItems: "center",
      gap: 15,
    },

    iconWithText: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
    },
    
    iconText: {
      fontSize: 14,
      fontWeight: "600",
      color: "#000",
    },
    
    greeting: {
      fontSize: 18,
      fontWeight: "600",
      margin: 16,
    },
  
    verseCard: {
      marginHorizontal: 16,
      padding: 16,
      borderRadius: 16,
      overflow: "hidden",
      justifyContent: "space-between",
      minHeight: 500,
    },

    topRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },

    middle: {
      flex: 1,
      justifyContent: "center",
    },
  
    smallText: {
      color: "#fff",
      fontSize: 16,
      marginBottom: 2
    },
  
    verseTitle: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "500",
      marginVertical: 0,
    },
  
    verseText: {
      color: "#fff",
      fontSize: 25,
      lineHeight: 30,
      marginHorizontal: 10,
    },
  
    actions: {
      flexDirection: "row",
      marginTop: 15,
      justifyContent: "center",
      alignItems: "center",
      gap: 50
    },
  
    actionBtn: {
      alignItems: "center",
      gap: 4,
    },
  
    actionText: {
      color: "#fff",
      fontSize: 12,
    },

    bottomRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#fff",
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 20,
      marginTop: 10,
    },

    bottomLeft: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },

    bottomText: {
      color: "#000",
      fontSize: 12,
      marginLeft: 6,
    },
  
    card: {
      backgroundColor: "#fff",
      marginHorizontal: 16,
      marginTop: 16,
      padding: 16,
      borderRadius: 16,
      shadowColor: "#000",
      shadowOpacity: 0.05,
      shadowRadius: 10,
      elevation: 2,
    },

    cardRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    
    cardContent: {
      flex: 1,             
      paddingRight: 12,
    },
    
    cardImage: {
      width: 80,
      height: 80,
      borderRadius: 12,
    },
    
    cardTitle: {
      fontSize: 16,
      fontWeight: "700",
      marginBottom: 8,
    },
    
    cardText: {
      fontSize: 14,
      color: "black",
      fontWeight: "400",
      lineHeight: 20,
    },
    
    cardButtons: {
      flexDirection: "row",
      gap: 10,
      marginTop: 12,
    },
    
    joinBtn: {
      color: "black",
      fontWeight: "600",
      fontSize: 14,
    },
    
    dismissBtn: {
      color: "#999",
      fontSize: 14,
    },

    footer: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      paddingVertical: 12,
      backgroundColor: "#fff",
      borderTopWidth: 1,
      borderTopColor: "#eee",
    },
    
    footerItem: {
      alignItems: "center",
    },
    
    footerText: {
      fontSize: 12,
      color: "#000",
      marginTop: 2,
      fontWeight: "600",
    },
    
    footerTextInactive: {
      fontSize: 12,
      color: "#999",
      marginTop: 2,
    },
  });
