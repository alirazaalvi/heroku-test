// resolverMap.ts
import { IResolvers } from 'graphql-tools';
import { connection } from '../db';
import { getUserByEmail } from './services/user_service';

export const resolverMap: IResolvers = {
  Query: {
    // users: () => users,
    getUser: async(obj, args, context, info) => {
      const email: string = args.email;
      const a = await getUserByEmail(connection, email);
      return await getUserByEmail(connection, email);
    },
  },

};

export default resolverMap;
