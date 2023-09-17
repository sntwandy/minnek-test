/**
 * register users
 */

import db from '../../../db';
import model from '../model';
import { Dog } from '../../../utils/interfaces';

db();

const createDog = async (dog: Dog): Promise<string> => {
  try {
    const dogCreated = new model(dog);
    await dogCreated.save();
    return 'Dog created';
  } catch (error) {
    throw new Error('Error');
  }
};

export = {
  createDog
};
