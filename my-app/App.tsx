import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Task } from './src/types/Task';
import { TaskItem } from './src/components/TaskItem';
import { TaskInput } from './src/components/TaskInput';
import { AppHeader } from './src/components/AppHeader';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (text: string) => {
    const newTask: Task = {
      id: Date.now().toString() + Math.random().toString(),
      text,
      completed: false,
    };
    
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const renderItem = ({ item }: { item: Task }) => (
    <TaskItem 
      task={item}
      onToggleCompletion={toggleTaskCompletion}
      onDelete={handleDeleteTask}
    />
  );

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar style="dark" />

      <AppHeader />

      <View style={styles.listContainer}>
        {tasks.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No tasks yet. Add one below!</Text>
          </View>
        ) : (
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
          />
        )}
      </View>

      <TaskInput onAddTask={handleAddTask} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  listContainer: {
    flex: 1,
  },
  flatListContent: {
    padding: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    fontStyle: 'italic',
  },
});