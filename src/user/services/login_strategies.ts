import passport from 'passport';
import passportJWT from 'passport-jwt';
import { Strategy } from 'passport-local';
import { checkUserLogin, comparePasswords, getUserByEmail } from '../services/user_service';
import db from '../../db';
import configs from '../../configs.json';


const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy   = passportJWT.Strategy;

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

  passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : configs.jwt.secret,
  },
  async(jwtPayload, cb) => {
    const user = getUserByEmail(db, jwtPayload.email);
    if (user) {
      return cb(undefined, user);
    } else {
      return cb(undefined, false, {error: 'Incorrect email or password.'});
    }
  }));
};
