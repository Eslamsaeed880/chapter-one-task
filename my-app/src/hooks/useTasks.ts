import { useState } from "react";
import { Task } from "../types/Task";

const createTaskId = () => `${Date.now()}-${Math.random().toString(36).slice(2)}`;

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    const newTask: Task = {
      id: createTaskId(),
      text: trimmedText,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return {
    tasks,
    addTask,
    toggleTaskCompletion,
    deleteTask,
    clearTasks,
  };
};
