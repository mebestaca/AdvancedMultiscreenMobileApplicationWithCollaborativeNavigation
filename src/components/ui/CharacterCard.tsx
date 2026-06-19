import { characterCard } from "@/styles/ui/CharacterCard";
import { Character } from "@/types/characters";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Text, View } from "react-native";
import Button from "./Button";

type CharacterProps = {
  resource: Character;
};

export default function CharacterCard({ resource }: CharacterProps) {
  const { name, classs, race } = resource;
  return (
    <View style={characterCard.arrangement}>
      <FontAwesome6 name="fire" size={24} color="black" />
      <View style={characterCard.details}>
        <Text style={characterCard.name}>{name}</Text>
        <Text style={characterCard.classs}>{classs}</Text>
        <Text style={characterCard.race}>{race}</Text>
      </View>
      <Button>
        <Feather name="x-circle" size={24} color="black" />
      </Button>
    </View>
  );
}
