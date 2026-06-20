import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        marginTop: 60,
        paddingHorizontal: 24,
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 30,
      },

      content: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 40,
        marginTop: 170
      },
      
      title: {
        fontSize: 34,
        fontWeight: "700",
        textAlign: "center",
        lineHeight: 35,
      },
      
      description: {
        marginTop: 20,
        fontSize: 18,
        textAlign: "center",
        lineHeight: 30,
      },

      buttonContainer: {
        paddingHorizontal: 24,
        marginTop: 70,
      },
      
      createButton: {
        backgroundColor: "#FF4057",
        height: 64,
        borderRadius: 32,
        justifyContent: "center",
        alignItems: "center",
      },
      
      createButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
      },
      
      signInButton: {
        backgroundColor: "#ECEAEA",
        height: 64,
        borderRadius: 32,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
      },
      
      signInText: {
        fontSize: 18,
        fontWeight: "700",
        color: "#000",
      },
});