import { Pressable, PressableProps } from "react-native";

type ButtonProp = PressableProps & {
  children: React.ReactNode;
};

export default function Button({ children, ...props }: ButtonProp) {
  return <Pressable {...props}>{children}</Pressable>;
}
