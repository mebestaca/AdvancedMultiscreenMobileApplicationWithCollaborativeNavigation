import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/home.styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.tabs}>
          <View style={styles.tab}>
            <Text style={styles.activeText}>Today</Text>
            <View style={styles.underline} />
          </View>

          <View style={styles.tab}>
            <Text style={styles.inactiveText}>Community</Text>
          </View>
        </View>

        <View style={styles.headerIcons}>
          <View style={styles.iconWithText}>
            <Ionicons name="flash-outline" size={22} color="#000" />
            <Text style={styles.iconText}>2</Text>
          </View>

          <Ionicons name="notifications-outline" size={22} color="#000" />
        </View>
    </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.cardRow}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>
                🏆 This World Cup...
              </Text>

              <Text style={styles.cardText}>
                Take on the Mid-Year Challenge, complete a 7-day streak, and help
                your country win.
              </Text>

              <View style={styles.cardButtons}>
                <Text style={styles.joinBtn}>Join Now</Text>
                <Text style={styles.dismissBtn}>Dismiss</Text>
              </View>
            </View>

            <Image
              source={{
                 uri: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
              }}
              style={styles.cardImage}
            />

           </View>

        </View>

        <Text style={styles.greeting}>Good evening</Text>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1514477917009-389c76a86b68?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNreXxlbnwwfHwwfHx8MA%3D%3D",
          }}
          style={styles.verseCard}
          imageStyle={{ borderRadius: 16 }}
        >
          <View style={styles.topRow}>
            <View>
              <Text style={styles.smallText}>Verse of the day</Text>
              <Text style={styles.verseTitle}>Micah 6:8 NIV</Text>
            </View>
          </View>
          
          <View style={styles.middle}>
            <Text style={styles.verseText}>
              He has shown you, O mortal, what is good. And what does the LORD 
              require of you? To act justly and to love mercy and to walk humbly with 
              your God.
            </Text>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionBtn}>
              <Ionicons name="heart-outline" size={20} color="#fff" />
              <Text style={styles.actionText}>1.58M</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionBtn}>
              <Ionicons name="chatbubble-outline" size={20} color="#fff" />
              <Text style={styles.actionText}>26,098</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionBtn}>
              <Ionicons name="share-outline" size={20} color="#fff" />
              <Text style={styles.actionText}>556k</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionBtn}>
              <Ionicons name="ellipsis-horizontal" size={20} color="#fff" />
              <Text style={styles.actionText}>More</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomRow}>
            <View style={{width:20}} />
            <View style={styles.bottomLeft}>
              <Ionicons name="notifications-outline" size={18} color="#000" />
              <Text style={styles.bottomText}>Send me this daily</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="close-outline" size={20} color="#000" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
</View>
  );
}