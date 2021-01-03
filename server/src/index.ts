import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
// Body parser is a middleware provide HTTP request body to express
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['laskdjf'] }));
app.use(router);

app.listen(3000, () => {
  console.log('Listening on port 3000 xxx');
});
