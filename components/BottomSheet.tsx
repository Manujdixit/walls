import React, {
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useState,
} from "react";
import { Text, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

interface DownloadPictureProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadPicture = ({ isOpen, onClose }: DownloadPictureProps) => {
  const [isAnimatingClose, setIsAnimatingClose] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["90%"], []);

  const handleClose = useCallback(() => {
    setIsAnimatingClose(true);
    bottomSheetRef.current?.close();
    setTimeout(() => {
      setIsAnimatingClose(false);
      onClose();
    }, 300);
  }, [onClose]);

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1 && !isAnimatingClose) {
        handleClose();
      }
    },
    [handleClose, isAnimatingClose]
  );

  useEffect(() => {
    if (isOpen) {
      setIsAnimatingClose(false);
      bottomSheetRef.current?.expand();
    }
  }, [isOpen]);

  if (!isOpen && !isAnimatingClose) return null;

  return (
    <GestureHandlerRootView
      style={[
        styles.container,
        { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
      ]}
    >
      <TouchableWithoutFeedback onPress={handleClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose
        animateOnMount
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
