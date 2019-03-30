import knex from 'knex';
import { UserSignupViewModel } from '../models/user_model';
import { strongEncrypt } from '../../helpers/encryption';

export const insertUser = (db: knex, newUser: UserSignupViewModel) => {
  return db('users').insert(newUser);
};

export const getUser = (db: knex, email: string) => {
  return db('users')
    .count({count: 'id'})
    .where({ email});
};

export const checkUserLogin = (db: knex, email: string, password: string) => {
  return db('users')
    .where({ email })
    .andWhere({ password: strongEncrypt(password) })
    .first();
};

export const getUserByEmail = (db: knex, email: string) => {
  return db('users')
  .where(email)
  .first();
};

export const comparePasswords = (inputPassword: string, encryptedPassword: string) => {
  if (strongEncrypt(inputPassword) === encryptedPassword) {
    return true;
  }

  return false;
};
