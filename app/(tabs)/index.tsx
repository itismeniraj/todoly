import { api } from "@/convex/_generated/api";
import { ColorScheme, useTheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const todos = useQuery(api.todos.getTodos);
  const addTodo = useMutation(api.todos.addTodo);
  const deleteAllTodos = useMutation(api.todos.deleteAllTodos);

  console.log(todos);

  const styles = createStyles(colors);
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

      <TouchableOpacity onPress={() => toggleDarkMode()}>
        <Text>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
}

const createStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.bg,
    },

    content: {
      fontSize: 22,
    },
  });
  return styles;
};
