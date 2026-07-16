import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();

  const todos = useQuery(api.todos.getTodos);
  const addTodo = useMutation(api.todos.addTodo);
  const deleteAllTodos = useMutation(api.todos.deleteAllTodos);

  console.log(todos);

  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Edit app/index.tsx to edit this screen.
      </Text>
      <TouchableOpacity onPress={() => addTodo({ text: "Clean the room" })}>
        <Text>Add New Todo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => deleteAllTodos()}>
        <Text>Clear All Todos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },

  content: {
    fontSize: 22,
  },
});
