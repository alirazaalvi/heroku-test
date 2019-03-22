import express, { Request, Response, NextFunction} from 'express';,
import * as userController from './controllers/user';

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  next();
});

app.get('/', (req: Request, res: Response) => res.send('Nothing to return'));

app.route('/users')
  .get(userController.getUsers);

app.listen(8000, () => console.log('App is listening on port 8000!'));

// Exporting the app object so that it will be used for testing
module.exports = app;
