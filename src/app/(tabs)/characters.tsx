import CharacterListSection from "@/components/section/CharacterListSection";
import CreateCharacterSection from "@/components/section/CreateCharacterSection";
import UnlockSection from "@/components/section/UnlockSection";
import { shared } from "@/styles/Shared";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Tab() {
  return (
    <SafeAreaView style={shared.flex}>
      <View style={shared.flex}>
        <CreateCharacterSection />
        <ScrollView>
          <CharacterListSection />
        </ScrollView>
      </View>
      <UnlockSection />
    </SafeAreaView>
  );
}
