import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const EmptyState: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No tasks yet. Add one below!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#888",
    fontStyle: "italic",
  },
});
