import knex from 'knex';
import { Todo } from './todoModel';

export const getTodos = async(db: knex, userId: number): Promise<Todo[]> => {
  const todos  = await db<Todo>('todos')
    .where({ userId });

    return new Promise((resolve, reject ) => (resolve(todos)));
};


export const getTodo = async(db: knex, id: number): Promise<Todo> => {
  const todo = await db<Todo>('todos')
  .where({id})
  .first();

  return new Promise((resolve, reject ) => (resolve(todo)));
};
