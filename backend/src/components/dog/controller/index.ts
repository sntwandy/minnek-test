/**\
 * Controller logic to Users
 */

import store from '../store';
import { Dog } from '../../../utils/interfaces';

const createDog = async (dog: Dog): Promise<string> => {
  try {
    const newDog: string = await store.createDog(dog);
    return newDog;
  } catch (error) {
    throw new Error('Error');
  }
};

export = {
  createDog,
};
