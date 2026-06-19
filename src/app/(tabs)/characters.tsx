import CharacterListSection from "@/components/section/CharacterListSection";
import CreateCharacterSection from "@/components/section/CreateCharacterSection";
import { flex } from "@/styles/Flex";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Tab() {
  return (
    <SafeAreaView style={flex.flex}>
      <View style={flex.flex}>
        <CreateCharacterSection />
        <ScrollView>
          <CharacterListSection />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
