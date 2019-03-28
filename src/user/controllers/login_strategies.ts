import passport from 'passport';
import { Strategy } from 'passport-local';
import { checkUserLogin, comparePasswords } from '../services/user_service';
import db from '../../db';

export const initStrategies = () => {
  /**
   * Sign in using Email and Password.
   */
  passport.use(new Strategy({ usernameField: 'email' }, async (email: string, password: string, done) => {
    const user = await checkUserLogin(db, email, password);

    if (!user) {
      return done({ error: 'User doesn\'t exists.' }, false);
    }

    if (comparePasswords(password, user.password)) {
      return done(undefined, {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    }

    return done({ error: 'Invalid email or password.' }, false);
  }));
};
