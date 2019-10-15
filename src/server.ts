import express, { Request, Response, NextFunction} from 'express';
import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import compression from 'compression';
import passport from 'passport';
import cors from 'cors';
import lusca from 'lusca';
import depthLimit from 'graphql-depth-limit';
import schema from './schema';
// import { checkSchema } from 'express-validator/check';
import * as userController from './user/controllers/user';
import * as loginStrategies from './user/services/login_strategies';

loginStrategies.initStrategies();

const app = express();

const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
});

app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.disable('x-powered-by');

app.use('*', cors());
app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

app.use(passport.initialize());

app.get('/', (req: Request, res: Response) => res.send('Nothing to return'));

// app.post('/signup', userController.signup);
app.post('/api/signup', userController.signup);
app.post('/api/login', userController.login);
app.use('/api/user', passport.authenticate('jwt', {session: false}), (req: Request, res: Response) => res.send('Nothing to return'));
// app.get('/account', passportConfig.isAuthenticated, userController.getAccount);

server.applyMiddleware({ app, path: '/graphql' });

app.listen(8000, () => console.log('App is listening on port 8000!'));

// Exporting the app object so that it will be used for testing
export default app;
