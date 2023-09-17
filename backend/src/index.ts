/**
 *
 */

import express, { Application } from 'express';
import bodyParser from 'body-parser';
import router from './network/routes';
import cors from 'cors';

const app: Application = express();
app.use(cors());

const port = process.env.port || 3000;
app.set('port', port);

app.use(bodyParser.json());
router(app);

app.listen(app.get('port'), (): void => {
  console.log(`The server is listening on: http://localhost:${app.get('port')}/`);
});
