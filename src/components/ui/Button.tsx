import { button } from "@/styles/ui/Button";
import { Pressable, PressableProps } from "react-native";

type ButtonProp = PressableProps & {
  children: React.ReactNode;
};

export default function Button({ children, ...props }: ButtonProp) {
  return (
    <Pressable {...props} style={button.size}>
      {children}
    </Pressable>
  );
}
