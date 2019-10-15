// resolverMap.ts
import { IResolvers, makeExecutableSchema } from 'graphql-tools';
import { connection as db } from '../db';
import { Todo } from './todoModel';
import { getTodo, getTodos } from './todoService';

// import { getUserByEmail } from './services/user_service';

export const resolverMap: IResolvers = {
  Query: {
    // users: () => users,
    getTodo: async(obj, args, context, info): Promise<Todo> => {
      const todoId: number = args.todoId;

      return await getTodo(db, todoId);
    },
    todos: async(obj, args, context, info): Promise<Todo[]> => {
      const userId: number = args.userId;
      return await getTodos(db, userId);
    },
  },

};

export default resolverMap;
