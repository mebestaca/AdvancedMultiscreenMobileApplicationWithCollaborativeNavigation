import { View, Text } from "react-native";
import { styles } from "@/styles/bible.styles";

export default function Bible() {
  return (
    <View style={styles.container}>

      <View style={styles.verseContainer}>
        <Text style={styles.reference}>
          John 3:16 NIV
        </Text>

        <Text style={styles.verse}>
          For God so loved the world that he gave his one and only Son,
          that whoever believes in him shall not perish but have eternal life.
        </Text>

      </View>

    </View>
  );
}