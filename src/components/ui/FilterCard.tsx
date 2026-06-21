import { filterCard } from "@/styles/ui/FilterCard";
import { themes } from "@/themes/themes";
import { Filter } from "@/types/filters";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { Text, View } from "react-native";
type FilterProps = {
  resource: Filter;
};

export default function FilterCard({ resource }: FilterProps) {
  const { name, quantity, hasCart } = resource;
  return (
    <View style={filterCard.arrangement}>
      <Text style={filterCard.name}>{name.toUpperCase()}</Text>
      {hasCart ? (
        <Feather
          name="shopping-cart"
          size={themes.light.icon.size}
          color="white"
          style={filterCard.icon}
        />
      ) : (
        <View></View>
      )}
      <Text style={filterCard.quantity}>{quantity}</Text>
      <Entypo
        name="chevron-down"
        size={themes.light.icon.size}
        color="white"
        style={filterCard.icon}
      />
    </View>
  );
}
