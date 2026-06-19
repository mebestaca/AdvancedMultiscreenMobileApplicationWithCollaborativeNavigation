import {
    View,
    Text,
    TouchableOpacity,
    Image
  } from "react-native";
  import { Ionicons } from "@expo/vector-icons";
  import { styles } from "@/styles/plans.styles";
  export default function Plans() {
    return (
        <View style={styles.header}>
          <View style={styles.headerRow}>
          <Text style={styles.title}>Plans</Text>

          <TouchableOpacity>
            <Ionicons
              name="search-outline"
              size={28}
              color="#000"
            />
          </TouchableOpacity>
        </View>

      <View style={styles.tabRow}>
        <TouchableOpacity style={styles.activePill}>
          <Text style={styles.activePillText}>My plans</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.pill}>
          <Text style={styles.pillText}>FIND PLANS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.disabledPill}>
          <Text style={styles.disabledPillText}>Saved</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.disabledPill}>
          <Text style={styles.disabledPillText}>Completed</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
  }