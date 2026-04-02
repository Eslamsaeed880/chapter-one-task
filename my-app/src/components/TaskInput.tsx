import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Keyboard,
  Platform,
} from "react-native";

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

export const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState<string>("");

  const handleAdd = () => {
    if (taskText.trim() === "") return;
    onAddTask(taskText.trim());
    setTaskText("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Write a new task..."
        placeholderTextColor="#999"
        value={taskText}
        onChangeText={setTaskText}
        onSubmitEditing={handleAdd}
        returnKeyType="done"
      />
      <TouchableOpacity
        style={[styles.addButton, !taskText.trim() && styles.addButtonDisabled]}
        onPress={handleAdd}
        disabled={!taskText.trim()}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    alignItems: "center",
    paddingBottom: Platform.OS === "ios" ? 40 : 20,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: "#f8f9fa",
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#333",
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#e9ecef",
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#4A90E2",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#4A90E2",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  addButtonDisabled: {
    backgroundColor: "#a0c4ec",
    shadowOpacity: 0,
    elevation: 0,
  },
  addButtonText: {
    fontSize: 28,
    color: "#ffffff",
    fontWeight: "600",
    marginTop: -4,
  },
});