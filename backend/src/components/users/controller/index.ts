/**\
 * Controller logic to Users
 */

import store from '../store';
import { User, UserLogin, JWT, UserJWT } from '../../../utils/interfaces';
import { decrypt } from '../../../utils/bcrypt';
import { getJWT } from '../../../utils/jwt';

const addUser = async (user: User): Promise<string> => {
  try {
    const newUser: string = await store.register(user);
    return newUser;
  } catch (error) {
    throw new Error('Error');
  }
};

const loginUser = async (user: UserLogin): Promise<JWT> => {
  try {
    let accessToken = '';

    const users: User[] = await store.users();

    users.forEach((u) => {
      const passMatch: boolean = decrypt(user.password, u.password);
      const passEmail: boolean = decrypt(user.email, u.email);

      if (passEmail && passMatch) {
        const userMatched: UserJWT = {
          sub: u._id,
          email: u.email,
        };
        accessToken = getJWT(userMatched);
      }
    });

    if (accessToken === '') {
      throw new Error('User credentials invalid');
    }

    return {
      accessToken: accessToken,
    };
  } catch (error) {
    throw new Error('Error');
  }
};

export = {
  addUser,
  loginUser,
};
