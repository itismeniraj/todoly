import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();

  const todos = useQuery(api.todos.getTodos);

  console.log(todos);

  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Edit app/index.tsx to edit this screen.
      </Text>
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
