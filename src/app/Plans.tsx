import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
  } from "react-native";
  import { Ionicons } from "@expo/vector-icons";
  import { styles } from "../styles/plans.styles";
  
  export default function Plans() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
  
          <View style={styles.header}>
            <Text style={styles.title}>Plans</Text>
  
            <Ionicons
              name="search-outline"
              size={34}
              color="#000"
            />
          </View>
  
          <View style={styles.tabs}>
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
  
        </ScrollView>
      </View>
    );
  }