import knex from 'knex';
import { UserSignupViewModel } from '../models/user_model';

export const insertUser = (db: knex, newUser: UserSignupViewModel) => {
  return db('users').insert(newUser);
};

export const getUser = (db: knex, email: string) {
  return db('users')
    .count({count: 'id'})
    .where({ email});
};
