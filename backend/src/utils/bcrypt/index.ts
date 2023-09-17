/**
 * BCRYPT strategy
 */

import bcrypt from 'bcrypt';

export const encrypt = (data: string): string => {
  const salt = bcrypt.genSaltSync(10);
  const hash: string = bcrypt.hashSync(data, salt).toString();
  return hash;
};

export const decrypt = (plainData: string, hasData: string): boolean => {
  const result: boolean = bcrypt.compareSync(plainData, hasData);
  return result;
};
