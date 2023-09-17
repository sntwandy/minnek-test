/* eslint-disable @typescript-eslint/no-var-requires */
/**
 *
 */

require('dotenv').config();
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UserJWT } from '../../utils/interfaces';

const SECRET_KEY = process.env.SECRET_KEY;

/**
 * Create a new JWT.
 * @param user
 * @returns token
 */
export const getJWT = (user: UserJWT): string => {
  if (SECRET_KEY) {
    const token = `Bearer ${jwt.sign(user, SECRET_KEY, { expiresIn: '30m' })}`;
    return token;
  } else {
    throw new Error('SECRET KEY NOT EXIST');
  }
};

/**
 * Authenticate or Validate the JWT.
 * @param req
 * @param res
 * @param next
 * @returns Yes or Not access
 */
export const authenticateJWT = (req: Request, res: Response, next: NextFunction): void => {
  const bearerHeader: string = req.headers['authorization'] || '';

  if (typeof bearerHeader !== undefined) {
    const bearerToken: string = bearerHeader?.split(' ')[1];

    SECRET_KEY &&
      jwt.verify(bearerToken, SECRET_KEY, (err, authData) => {
        if (err) return res.status(403).send({ error: 'Token has expired', body: '' });
        next();
      });
  } else {
    res.status(401).send({ error: 'No Access', body: '' });
    throw new Error('No Access');
  }
};
