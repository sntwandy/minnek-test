/**
 * Routes to the App
 */

import { Application } from 'express';
import users from '../../components/users/network';

const routes = (server: Application): void => {
  server.use('/api/users', users);
};

export default routes;
