import { StatusBar } from "expo-status-bar";
import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { TaskInput } from "./src/components/TaskInput";
import { AppHeader } from "./src/components/AppHeader";
import { TaskList } from "./src/components/TaskList";
import { useTasks } from "./src/hooks/useTasks";

export default function App() {
  const { tasks, addTask, toggleTaskCompletion, deleteTask } = useTasks();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar style="dark" />

      <AppHeader />

      <TaskList
        tasks={tasks}
        onToggleCompletion={toggleTaskCompletion}
        onDelete={deleteTask}
      />

      <TaskInput onAddTask={addTask} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
});
