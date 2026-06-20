import { Image, StyleSheet, Text, View } from "react-native";

export default function FriendCard() {
  return (
    <View>
      <View>
        <Image
          source={require("@/assets/images/profilePawn.png")}
          style={styles.icon}
        />
        <Text>Logiano77</Text>
        <Text>Online 5 months ago</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  icon: {
    gap: 5,
    height: 36,
    width: 36,
    marginLeft: 10,
    marginVertical: 10,
  },
});
