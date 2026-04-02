import React, { useCallback } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Task } from "../types/Task";
import { TaskItem } from "./TaskItem";
import { EmptyState } from "./EmptyState";

interface TaskListProps {
  tasks: Task[];
  onToggleCompletion: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleCompletion,
  onDelete,
}) => {
  const renderTaskItem = useCallback(
    ({ item }: { item: Task }) => (
      <TaskItem
        task={item}
        onToggleCompletion={onToggleCompletion}
        onDelete={onDelete}
      />
    ),
    [onDelete, onToggleCompletion]
  );

  return (
    <View style={styles.listContainer}>
      {tasks.length === 0 ? (
        <EmptyState />
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={renderTaskItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  flatListContent: {
    padding: 20,
  },
});
