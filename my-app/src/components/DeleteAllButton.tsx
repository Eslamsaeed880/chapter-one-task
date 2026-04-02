import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface DeleteAllButtonProps {
  visible: boolean;
  onPress: () => void;
}

export const DeleteAllButton: React.FC<DeleteAllButtonProps> = ({
  visible,
  onPress,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!visible) return null;

  return (
    <View style={styles.actionsContainer}>
      <Pressable
        onPress={onPress}
        onHoverIn={() => setIsHovered(true)}
        onHoverOut={() => setIsHovered(false)}
        style={({ pressed }) => [
          styles.deleteAllButton,
          (isHovered || pressed) && styles.deleteAllButtonActive,
        ]}
      >
        {({ pressed }) => (
          <Text
            style={[
              styles.deleteAllButtonText,
              (isHovered || pressed) && styles.deleteAllButtonTextActive,
            ]}
          >
            Delete All
          </Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  actionsContainer: {
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  deleteAllButton: {
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#d0d7de",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#ffffff",
  },
  deleteAllButtonActive: {
    borderColor: "#d63d4d",
    backgroundColor: "#ffd8d8",
  },
  deleteAllButtonText: {
    color: "#5f6c7b",
    fontWeight: "600",
  },
  deleteAllButtonTextActive: {
    color: "#d63d3d",
  },
});
