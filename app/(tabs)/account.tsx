import { DownloadPicture } from "@/components/BottomSheet";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function account() {
  const [pictureOpen, setPictureOpen] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <Button title="Open Bottom Sheet" onPress={() => setPictureOpen(true)} />
      <Text>Account</Text>
      <DownloadPicture
        isOpen={pictureOpen}
        onClose={() => setPictureOpen(false)}
      />
    </View>
  );
}
