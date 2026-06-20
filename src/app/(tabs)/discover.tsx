import {View, Text, TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "@/styles/discover.styles";
import { router } from "expo-router";

export default function Discover() {
    const topics = [
        { title: "Love", color: "#3C7E97" },
        { title: "Anxiety", color: "#D02076" },
        { title: "Anger", color: "#7D713E" },
        { title: "Hope", color: "#81725E" },
        { title: "Depression", color: "#757731" },
        { title: "Peace", color: "#AB5B04" },
        { title: "Fear", color: "#CF312D" },
        { title: "Stress", color: "#4A6B81" },
        { title: "Patience", color: "#31487E" },
        { title: "Temptation", color: "#368500" },
      ];
    return (
      <View>
        <Text style={styles.title}>Discover</Text>
      
        <View style={styles.searchBar}>
            <Ionicons
                name="search-outline"
                size={24}
                color="#000"
            />
    
            <Text style={styles.searchText}>
                Search
            </Text>
        </View>

        <View style={styles.categoryGrid}>

            <TouchableOpacity style={styles.categoryCard}>
                <Ionicons name="checkbox-outline" size={28} color="#000" />
                <Text style={styles.categoryText}>Plans</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard}>
                <Ionicons name="play-circle-outline" size={28} color="#000" />
                <Text style={styles.categoryText}>Videos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard}
                              onPress={() => router.push("/churches")}>
                <Ionicons name="home-outline" size={28} color="#000" />
                <Text style={styles.categoryText}>Churches</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard}>
                <Ionicons name="globe-outline" size={28} color="#000" />
                <Text style={styles.categoryText}>Partners</Text>
            </TouchableOpacity>

        </View>

        <View style={styles.topicGrid}>
            {topics.map((item) => (
        <TouchableOpacity
            key={item.title}
            style={[
            styles.topicCard,
            { backgroundColor: item.color },
        ]}
        >
        <Text style={styles.topicTitle}>
                    {item.title}
        </Text>
        </TouchableOpacity>
            ))}
        </View>
    </View>
    );
  }