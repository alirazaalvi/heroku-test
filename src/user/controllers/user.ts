import { insertUser, getUser } from './../services/user_service';
import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator/check';
import { UserSignupViewModel } from '../models/user_model';
import db from '../../db';

/**
 * GET /users
 * List of users
 */
export let getUsers = (req: Request, res: Response) => {
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
export let signup = async(req: Request, res: Response) => {
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
    password: input.password,
    role: 1,
  };

  const user = await insertUser(db, newUser).catch( err => console.log(err));

  return res.status(200).json({response: 'User added successfully.'});
};
