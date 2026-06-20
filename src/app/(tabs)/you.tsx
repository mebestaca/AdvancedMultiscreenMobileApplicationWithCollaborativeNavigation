import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "@/styles/you.styles";

export default function You() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      
      <View style={styles.header}>
        <Ionicons
          name="settings-outline"
          size={32}
          color="#000"
        />

        <Ionicons
          name="menu-outline"
          size={36}
          color="#000"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          Access the full{"\n"}
          experience
        </Text>

        <Text style={styles.description}>
          Create a free account to add 
          {"\n"}friends, access thousands of plans,
          {"\n"}sync highlights, and read offline.
          {"\n"}No ads or paywalls—ever!
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>
            Create Account
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}