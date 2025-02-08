import { Link, Stack } from "expo-router";
import { View, Text } from "react-native";

export default function TabLayout() {
  return (
    <View style={{ backgroundColor: "black" }}>
      <Link href="/account">
        <Text style={{ color: "white" }}>Go back</Text>
      </Link>
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}
