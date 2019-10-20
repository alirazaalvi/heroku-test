// resolverMap.ts
import { IResolvers, makeExecutableSchema } from 'graphql-tools';
import { connection as db } from '../db';
import { Todo, TodoInput } from './todoModel';
import { getTodo, getTodos, addTodo, deleteTodo } from './todoService';
import { AuthenticationError } from 'apollo-server-express';

// import { getUserByEmail } from './services/user_service';

export const resolverMap: IResolvers = {
  Query: {
    // users: () => users,
    todo: async(obj, args, context, info): Promise<Todo> => {
      const todoId: number = args.todoId;

      return await getTodo(db, todoId);
    },
    todos: (obj, args, context, info): Promise<Todo[]> => {
      const userId: number = args.userId;
      return getTodos(db, userId);
    },
  },
  Mutation: {
    addTodo: async(parent, args): Promise<Todo> => {
      const todo: TodoInput = args;
      todo.userId = 1;

      return await addTodo(db, todo);
    },
    deleteTodo: async(parent, args): Promise<number> => {
      const userId = 1;
      const todoId: number = args.todoId;

      return await deleteTodo(db, userId, todoId);
    },
  },

};

export default resolverMap;
