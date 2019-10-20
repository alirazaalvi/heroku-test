export const typeDef = `
  type Todo {
    id: Int!,
    title: String,
    description: String,
    sortOrder: Int,
    isActive: Boolean,
    dateModified: String,
  }

  extend type Query {
    todos(userId: Int): [Todo],
    todo(todoId: Int): Todo
  }

  type Mutation {
    addTodo(userId: Int, title: String, description: String!): Todo!
    deleteTodo(todoId: Int): Int
  }
`;
