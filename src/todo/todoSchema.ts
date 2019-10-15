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
    getTodo(todoId: Int): Todo
  }
`;
