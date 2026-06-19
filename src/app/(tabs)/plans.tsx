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

      <View style={styles.planCard}>

      <View style={styles.imageGrid}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65",
            }}
            style={styles.gridImage}
          />

          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94",
            }}
            style={styles.gridImage}
          />

          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1507692049790-de58290a4334",
            }}
            style={styles.gridImage}
          />

          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            }}
            style={styles.gridImage}
          />

          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1519491050282-cf00c82424b4",
            }}
            style={styles.gridImage}
          />

          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1544427920-c49ccfb85579",
            }}
            style={styles.gridImage}
          />
      </View>

      <View style={styles.emptyContainer}>
        <Ionicons
          name="checkbox-outline"
          size={60}
          color="#555"
        />

        <Text style={styles.emptyTitle}>
          No Plans Yet
        </Text>

        <Text style={styles.emptyDescription}>
          Choose a Plan to explore what Scripture says on a 
          topic that interests you!
        </Text>

        <TouchableOpacity style={styles.findPlanButton}>
          <Text style={styles.findPlanText}>
            Find a Plan
          </Text>
        </TouchableOpacity>
      </View>

    </View>
</View>
  );
}