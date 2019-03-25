import express, { Request, Response, NextFunction} from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import { checkSchema } from 'express-validator/check';
import * as userController from './user/controllers/user';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  next();
});

app.get('/', (req: Request, res: Response) => res.send('Nothing to return'));


app.get('/users', userController.getUsers);

//app.post('/signup', userController.signup);
app.post('/signup', userController.signup);

app.listen(8000, () => console.log('App is listening on port 8000!'));

// Exporting the app object so that it will be used for testing
module.exports = app;
