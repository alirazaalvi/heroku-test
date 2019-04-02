import knex from 'knex';
import { User, UserSignupViewModel } from '../models/user_model';
import { strongEncrypt } from '../../helpers/encryption';

// Workaround: Returning another plain promise for macking mocks for test.
// Todo: Once i'll find better solution then extra promise will go away.

export const insertUser = async(db: knex, newUser: UserSignupViewModel) => {
  const user = await db('users').insert(newUser);
  return new Promise((resolve, reject ) => (resolve(user)));
};

export const getUser = async(db: knex, email: string) => {
  const user = await db('users')
    .count({count: 'id'})
    .where({ email})
    .first();

    return new Promise((resolve, reject ) => (resolve(user)));
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
