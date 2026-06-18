import { searchBox } from "@/styles/ui/SearchBox";
import Entypo from "@expo/vector-icons/Entypo";
import { TextInput, View } from "react-native";

export default function SearchBox() {
  return (
    <View style={searchBox.arrangement}>
      <TextInput
        style={searchBox.input}
        placeholder="Search by name"
        onChangeText={(value) => console.log(value)}
      />
      <Entypo
        name="chevron-down"
        size={24}
        color="black"
        style={searchBox.icon}
      />
    </View>
  );
}
