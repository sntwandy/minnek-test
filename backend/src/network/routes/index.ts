/**
 * Routes to the App
 */

import { Application } from 'express';
import users from '../../components/users/network';
import dogs from '../../components/dog/network';

const routes = (server: Application): void => {
  server.use('/api/users', users);
  server.use('/api/dogs', dogs);
};

export default routes;
