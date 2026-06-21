import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <View style={styles.bottomLayer}>
        <View id="Head" style={styles.header}>
          <View style={styles.iconGroup}>
            <Image
              source={require("@/assets/images/profilePawn.png")}
              style={styles.icon}
            />
            <Image
              source={require("@/assets/images/leaguesCup.png")}
              style={styles.icon}
            />
            <View style={styles.iconGroup}>
              <Image
                source={require("@/assets/images/streakFlame.png")}
                style={styles.icon}
              />
              <Text style={styles.boldText}>0</Text>
            </View>
          </View>
          <Image
            source={require("@/assets/images/friends.png")}
            style={styles.icon}
          />
        </View>

        <View id="body" style={styles.body}>
          <View id="matchCard"></View>
          <View id="friends">
            <Text style={styles.boldText}>Friends</Text>
            <Text> show all</Text>
          </View>
        </View>

        <View id="footer" style={styles.footer}>
          <View style={{ backgroundColor: "#6aa24a" }}></View>
          <View
            id="tabs"
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <View>
              <Image
                source={require("@/assets/images/profilePawn.png")}
                style={styles.icon}
              />
              <Text style={styles.footerText}>Home</Text>
            </View>
            <View>
              <Image
                source={require("@/assets/images/profilePawn.png")}
                style={styles.icon}
              />
              <Text style={styles.footerText}>Puzzles</Text>
            </View>
            <View>
              <Image
                source={require("@/assets/images/profilePawn.png")}
                style={styles.icon}
              />
              <Text style={styles.footerText}>Learn</Text>
            </View>
            <View>
              <Image
                source={require("@/assets/images/profilePawn.png")}
                style={styles.icon}
              />
              <Text style={styles.footerText}>Watch</Text>
            </View>
            <View>
              <Image
                source={require("@/assets/images/profilePawn.png")}
                style={styles.icon}
              />
              <Text style={styles.footerText}>More</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  bottomLayer: {
    backgroundColor: "#242321",
  },
  header: {
    backgroundColor: "#272320",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  icon: {
    gap: 5,
    height: 36,
    width: 36,
    marginLeft: 10,
    marginVertical: 10,
  },
  iconGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  boldText: {
    fontWeight: "900",
    fontSize: 25,
    color: "white",
  },
  footerText: {
    fontWeight: "900",
    fontSize: 15,
    color: "white",
  },
  footer: {
    backgroundColor: "#383431",
    marginHorizontal: 10,
    marginBottom: 8,
  },
  body: {
    flexDirection: "column",
    flex: 1,
  },
});
