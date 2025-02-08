import { View, Text, Button } from "react-native";

export default function () {
  return (
    <View>
      <Text>Hello, world!</Text>
      <Button title="Click me!" onPress={() => alert("Button clicked!")} />
    </View>
  );
}
