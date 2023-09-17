/**
 * Network logic to users
 */

import { Request, Response, Router } from 'express';
import { encrypt } from '../../../utils/bcrypt';
import controller from '../controller';
import { JWT } from '../../../utils/interfaces';

const router: Router = Router();

// register user
router.post('/singup', async (req: Request, res: Response): Promise<void> => {
  const user = req.body;

  user.password = encrypt(user.password);
  user.email = encrypt(user.email);

  try {
    const userRegistered: string = await controller.addUser(user);
    res.status(201).send({
      error: '',
      body: userRegistered,
    });
  } catch (error) {
    res.status(500).send({
      error: error,
      body: ''
    });
  }
});

router.post('/login', async (req: Request, res: Response): Promise<boolean> => {
  const { user } = req.body;

  if (!user) {
    res.status(404).send({
      error: 'You need to have an user',
      body: ''
    });
    return false;
  }

  try {
    const accessToken: JWT = await controller.loginUser(user);
    res.status(200).send({
      error: '',
      body: accessToken
    });
    return false;
  } catch (error) {
    res.status(500).send({
      error: 'Internal Error, the credentials may be incorrect',
      body: '',
    });
    return false;
  }
});

export default router;
