import { Image, ImageSourcePropType, Text, View } from "react-native";

interface Props {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
}

export default function TabIcon({ icon, color, name, focused }: Props) {
  return (
    <View className="flex items-center justify-center gap-2 pr-1 ">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold " : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
}
