import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { strongEncrypt } from './../../helpers/encryption';
import { insertUser, getUser } from './../services/user_service';
import { check, validationResult } from 'express-validator/check';
import { UserSignupViewModel } from '../models/user_model';
import db from '../../db';
import config from '../../configs.json';

/**
 * GET /users
 * List of users
 */
export const getUsers = (req: Request, res: Response) => {
  const users = [{
    email: 'test@gmail.com',
    id: '1',
    name: 'Test User',
  }];

  return res.send(users);
};

/**
 * Post /signup
 * Save the user signup information
 */
export const signup = async(req: Request, res: Response) => {
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('firstName', 'Last name is not valid').len({min: 3});
  req.assert('lastName', 'Last name is not valid').len({min: 3});
  req.assert('password', 'Password is required.').len({ min: 7});
  req.assert('confirmPassword', 'Passwords do not match').equals(req.body.password);

  const errors = req.validationErrors();

  if (errors) {
    return res.status(400).json({ errors});
  }

  const input = req.body;

  const existingUser = await getUser(db, input.email);
  if (existingUser[0].count > 0) {
    return res.status(400).json({response: 'User already exists.'});
  }

  const newUser: UserSignupViewModel = {
    email: input.email,
    firstName: input.firstName,
    lastName: input.lastName,
    password: strongEncrypt(input.password),
    role: 1,
  };

  const user = await insertUser(db, newUser).catch( err => console.log(err));
  if (!user) {
    return res.status(400).json({response: 'Unable to add user. Please try again.'});
  }

  return res.status(200).json({response: 'User added successfully.'});
};

export const login = async(req: Request, res: Response, next: NextFunction) => {
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('password', 'Password cannot be blank').notEmpty();
  req.sanitize('email').normalizeEmail({ gmail_remove_dots: false });

  const errors = req.validationErrors();

  if (errors) {
    return res.status(400).json({ errors});
  }

  passport.authenticate('local', (err, user, info) => {
    // if (err) { return next(err); }
    if (!user) {
      return res.status(400).json(err);
    }

    const token = jwt.sign(user, config.jwt.secret, { expiresIn: config.jwt.expiry });
    return res.status(200).json({ user, token });
  })(req, res, next);
};
