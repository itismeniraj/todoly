import { query } from "./_generated/server";

export const getTodos = query({
  handler: async (context) => {
    const todos = await context.db.query("todos").order("desc").collect();
    return todos;
  },
});
