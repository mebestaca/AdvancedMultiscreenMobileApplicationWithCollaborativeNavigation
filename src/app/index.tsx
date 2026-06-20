import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
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
          <View id="QuickGames">
            <View id="recMatch" style={styles.gameCard}>
              <Image
                source={require("@/assets/images/ChessRecomended.png")}
                style={{ height: 100, width: 100 }}
              />
              <View>
                <Text>Recommended Match</Text>
                <Text>Similar Skill</Text>
                <Text>TitusC-5 (400)</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ color: "grey" }}>vs:</Text>
                  <View
                    style={{
                      backgroundColor: "#1d1c1a",
                      borderRadius: 5,
                      padding: 3,
                    }}
                  >
                    <Text>OW/OD/OL</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View id="friends">
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 5,
              }}
            >
              <Text style={styles.boldText}>Friends</Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: "grey",
                  marginEnd: 5,
                }}
              >
                Show All
              </Text>
            </View>
            <View style={styles.carousel}>
              {/* first friend */}
              <View style={styles.friendCard}>
                <Image
                  source={require("@/assets/images/profilePawn.png")}
                  style={styles.profileImage}
                />
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 15,
                    color: "white",
                    fontWeight: 600,
                    marginBottom: 15,
                  }}
                >
                  Logiano77
                </Text>
                <Text style={{ color: "grey" }}>Online 5 months ago</Text>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Challenge</Text>
                </View>
              </View>
              {/* 2nd friend */}
              <View style={styles.friendCard}>
                <Image
                  source={require("@/assets/images/profilePawn.png")}
                  style={styles.profileImage}
                />
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 15,
                    fontWeight: 600,
                    color: "white",
                    marginBottom: 15,
                  }}
                >
                  Yeeu
                </Text>
                <Text style={{ color: "grey" }}>Online 1 year ago</Text>
                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}>Challenge</Text>
                </Pressable>
              </View>
            </View>
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
    backgroundColor: "#2b2726",
  },
  header: {
    backgroundColor: "#252420",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
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
    padding: 10,
  },
  body: {
    flexDirection: "column",
    flex: 1,
    margin: 5,
  },
  friendCard: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#22211f",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  carousel: {
    flexDirection: "row",
  },
  button: {
    flexDirection: "column",
    borderRadius: 6,
    backgroundColor: "#373634",
    paddingVertical: 5,
    alignItems: "center",
    width: "90%",
    margin: 10,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 15,
    color: "white",
  },
  profileImage: {
    height: 70,
    width: 70,
    margin: 10,
  },
  gameCard: {
    flexDirection: "row",
    padding: 5,
  },
});
