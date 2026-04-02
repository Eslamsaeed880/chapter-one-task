import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Task } from "../types/Task";
import Feather from "@expo/vector-icons/Feather";

interface TaskItemProps {
  task: Task;
  onToggleCompletion: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleCompletion,
  onDelete,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeletePress = () => {
    if (isDeleting) return;
    setIsDeleting(true);

    // Give a short visual "deleting" state before removing the row.
    setTimeout(() => {
      onDelete(task.id);
    }, 180);
  };

  return (
    <View
      style={[
        styles.taskContainer,
        task.completed && styles.taskContainerCompleted,
        isDeleting && styles.taskContainerDeleting,
      ]}
    >
      <Pressable
        style={({ pressed }) => [
          styles.taskCheckButton,
          pressed && styles.taskCheckButtonPressed,
        ]}
        onPress={() => onToggleCompletion(task.id)}
        disabled={isDeleting}
      >
        <View
          style={[styles.checkbox, task.completed && styles.checkboxCompleted]}
        >
          {task.completed && <Text style={styles.checkMark}>✓</Text>}
        </View>
      </Pressable>

      <View style={styles.taskTextContainer}>
        <Text
          style={[
            styles.taskText,
            task.completed && styles.taskTextCompleted,
            isDeleting && styles.taskTextDeleting,
          ]}
        >
          {task.text}
        </Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.deleteButton,
          isDeleting && styles.deleteButtonDeleting,
          pressed && styles.deleteButtonPressed,
        ]}
        onPress={handleDeletePress}
        disabled={isDeleting}
      >
        {({ pressed }) => (
          <Feather
            name="trash"
            style={[
              styles.deleteButtonText,
              isDeleting && styles.deleteButtonTextDeleting,
              pressed && styles.deleteButtonTextPressed,
            ]}
          />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  taskContainerCompleted: {
    backgroundColor: "#f3f9ff",
  },
  taskContainerDeleting: {
    backgroundColor: "#fff1f1",
    opacity: 0.9,
  },
  taskCheckButton: {
    marginRight: 15,
  },
  taskCheckButtonPressed: {
    opacity: 0.7,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#4A90E2",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxCompleted: {
    backgroundColor: "#4A90E2",
  },
  checkMark: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  taskTextContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 16,
    color: "#333",
  },
  taskTextCompleted: {
    color: "#999",
    textDecorationLine: "line-through",
  },
  taskTextDeleting: {
    color: "#aa5c5c",
  },
  deleteButton: {
    padding: 5,
    marginLeft: 10,
    borderRadius: 8,
  },
  deleteButtonDeleting: {
    backgroundColor: "#ffd8d8",
  },
  deleteButtonPressed: {
    backgroundColor: "#ffe8e8",
  },
  deleteButtonText: {
    fontSize: 18,
    color: "#666",
  },
  deleteButtonTextDeleting: {
    color: "#d63d3d",
  },
  deleteButtonTextPressed: {
    color: "#ff4d4d",
  },
});