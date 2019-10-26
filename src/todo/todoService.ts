import knex from 'knex';
import { Todo, TodoInput } from './todoModel';

export const getTodos = async(db: knex, userId: number): Promise<Todo[]> => {
  return await db<Todo>('todos')
    .where({ userId });
};

export const getTodo = async(db: knex, id: number): Promise<Todo> => {
  return await db<Todo>('todos')
  .where({id})
  .first();
};

export const addTodo = async(db: knex, newTodo: TodoInput): Promise<Todo> => {
  const insertId: number[] = await db('todos').insert(newTodo);
  const todo: Todo = {
    id: insertId[0],
    userId: newTodo.userId,
    title: newTodo.title,
    description: newTodo.description,
  };

  return new Promise((resolve, reject ) => (resolve(todo)));
};

export const deleteTodo = async(db: knex, userId: number, todoId: number): Promise<number> => {
  await db('todos')
  .where('id', todoId)
  .andWhere('userId', userId)
  .delete();

  return new Promise((resolve, reject ) => (resolve(todoId)));
};
