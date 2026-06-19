import { characters } from "@/data/characters";
import { View } from "react-native";
import CharacterCard from "../ui/CharacterCard";

export default function CharacterListSection() {
  return (
    <View>
      {characters.map((character) => (
        <CharacterCard resource={character} key={character.id} />
      ))}
    </View>
  );
}
