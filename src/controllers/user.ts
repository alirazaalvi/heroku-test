import { Request, Response, NextFunction } from 'express';


/**
 * GET /users
 * List of hotels
 */
export let getUsers = async(req: Request, res: Response) => {
  const users = [{
    email: 'test@gmail.com',
    id: '1',
    name: 'Test User',
  }];

  return res.send(users);
};
