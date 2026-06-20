import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Churches() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 60,
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
        >
          <Ionicons
            name="arrow-back"
            size={28}
            color="#000"
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 25,
            fontWeight: "600",
            marginLeft: 15,
          }}
        >
          Churches
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#ECEAEA",
          marginHorizontal: 20,
          marginTop: 20,
          borderRadius: 12,
          padding: 18,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="location-outline"
            size={24}
            color="#000"
          />

          <Text
            style={{
              marginLeft: 12,
              fontSize: 18,
            }}
          >
            Events
          </Text>
        </View>

        <Ionicons
          name="chevron-forward"
          size={24}
          color="#000"
        />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          marginTop: 24,
          marginHorizontal: 20,
        }}
      >
        Churches Near Me
      </Text>

      <View
        style={{
          backgroundColor: "#ECEAEA",
          marginHorizontal: 20,
          marginTop: 16,
          borderRadius: 18,
          padding: 17,
          paddingBottom: 40,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 16,
              width: 200,
              lineHeight: 20,
            }}
          >
            Find churches in your area that use the Bible App.
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: "#D8D6D6",
              alignSelf: "flex-start",
              marginTop: 25,
              paddingHorizontal: 12,
              paddingVertical: 3,
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="navigate-outline"
              size={16}
              color="#000"
            />

            <Text
              style={{
                marginLeft: 6,
              }}
            >
              Enable Location
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: "#E4E4E4",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialIcons
            name="church"
            size={34}
            color="#000"
          />
        </View>
      </View>
    </View>
  );
}