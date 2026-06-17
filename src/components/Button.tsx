import { Pressable } from "react-native";

type ButtonProp = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProp) {
  return <Pressable>{children}</Pressable>;
}
