/**
 * register users
 */

import db from '../../../db';
import model from '../model';
import { User } from '../../../utils/interfaces';

db();

const getUsers = async (): Promise<User[]> => {
  try {
    const allUsers: User[] = await model.find();
    return allUsers;
  } catch (error) {
    throw new Error('Error getting all users from DB');
  }
};

// Register user in the DB
const registerUser = async (user: User): Promise<string> => {
  try {
    const registeredUser = new model(user);
    await registeredUser.save();
    return 'User registered';
  } catch (error) {
    throw new Error('Error');
  }
};

export = {
  users: getUsers,
  register: registerUser,
};
