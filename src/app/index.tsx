import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ height: "100%" }}>
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
                style={{ height: 110, width: 110 }}
              />
              <View style={{ margin: 15, gap: 3 }}>
                <Text style={styles.gametitle}>Recommended Match</Text>
                <Text style={styles.gameCardText}>Similar Skill</Text>
                <Text style={{ color: "grey" }}>
                  <Text style={{ color: "white", fontWeight: 600 }}>
                    TitusC-5
                  </Text>{" "}
                  (400)
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ color: "#6a6a6a" }}>vs:</Text>
                  <View
                    style={{
                      backgroundColor: "#1d1c1a",
                      borderRadius: 5,
                      padding: 3,
                    }}
                  >
                    <Text style={{ color: "#6a6a6a" }}>
                      <Text style={{ color: "#006302" }}>0W</Text> / 0D /
                      <Text style={{ color: "#5b0000" }}> 0L</Text>
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View id="PlayOnline" style={styles.gameCard}>
              <Image
                source={require("@/assets/images/playOnline.png")}
                style={{ height: 110, width: 110 }}
              />
              <View style={{ margin: 15, gap: 3 }}>
                <Text style={styles.gametitle}>Play Online</Text>
                <Text style={styles.gameCardText}>10 min vs Random</Text>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  <Image
                    source={require("@/assets/images/leaguesCup.png")}
                    style={styles.icon}
                  />
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "condensed",
                      color: "#fff",
                      marginLeft: 10,
                    }}
                  >
                    #8
                  </Text>
                </View>
              </View>
            </View>
            <View id="SOlvepuzzles" style={styles.gameCard}>
              <Image
                source={require("@/assets/images/puzzles.png")}
                style={{ height: 110, width: 110 }}
              />
              <View style={{ margin: 15, gap: 3, flex: 1 }}>
                <Text style={styles.gametitle}>Solve Puzzles</Text>
                <Text style={styles.gameCardText}>Continue Your Journey!</Text>

                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("@/assets/images/puzzleIcon.png")}
                    style={{ height: 40, width: 40 }}
                  />
                  <View style={{ flexDirection: "column", flex: 1 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: "condensed",
                          color: "#fff",
                          marginLeft: 10,
                        }}
                      >
                        1,058
                      </Text>
                      <Image
                        source={require("@/assets/images/NextPuzzle.png")}
                        style={{ height: 20, width: 20 }}
                      />
                    </View>
                    <View
                      style={{
                        backgroundColor: "#3e3d3b",
                        flex: 1,
                        borderRadius: 10,
                        flexDirection: "row",
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: "#86a94d",
                          flex: 0.35,
                          borderRadius: 10,
                        }}
                      ></View>
                    </View>
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
          <Pressable
            style={{
              backgroundColor: "#73aa4c",
              flex: 1,
              borderRadius: 10,
              borderColor: "#3c5b2a",
              borderBottomWidth: 2,
              borderRightWidth: 2,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#efefef",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 30,
              }}
            >
              Play
            </Text>
          </Pressable>
          <View
            id="tabs"
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image
                source={require("@/assets/images/pawn.png")}
                style={styles.icon}
              />
              <Text style={styles.footerText}>Home</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image
                source={require("@/assets/images/puzzlepiece.png")}
                style={styles.icon}
              />
              <Text style={styles.footerText}>Puzzles</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image
                source={require("@/assets/images/gradcap.png")}
                style={styles.icon}
              />
              <Text style={styles.footerText}>Learn</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image
                source={require("@/assets/images/binoculars.png")}
                style={styles.icon}
              />
              <Text style={styles.footerText}>Watch</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image
                source={require("@/assets/images/hamburger.png")}
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
    height: "100%",
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
    paddingBottom: 30,
    flex: 0.1,
  },
  body: {
    flexDirection: "column",
    flex: 1,
    margin: 5,
  },
  friendCard: {
    flexDirection: "column",
    flex: 0.4,
    backgroundColor: "#21201e",
    borderRadius: 8,
    borderColor: "",
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
    paddingVertical: 6,
    alignItems: "center",
    width: "90%",
    margin: 10,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    color: "#efefef",
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
  gametitle: {
    fontWeight: "800",
    fontSize: 20,
    color: "#fff",
  },
  gameCardText: {
    color: "#909090",
    fontSize: 18,
  },
});
