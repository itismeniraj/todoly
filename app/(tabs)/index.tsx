import { createHomeStyles } from "@/assets/styles/home.styles";
import Header from "@/components/Header";
import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const todos = useQuery(api.todos.getTodos);
  const addTodo = useMutation(api.todos.addTodo);
  const deleteAllTodos = useMutation(api.todos.deleteAllTodos);

  console.log(todos);

  const homeStyles = createHomeStyles(colors);
  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={homeStyles.container}>
        <Header />
        <TouchableOpacity onPress={() => toggleDarkMode()}>
          <Text>Toggle Theme</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => addTodo({ text: "Walk the dog!" })}>
          <Text>Add Todo</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
