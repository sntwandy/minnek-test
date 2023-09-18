/**
 * Network logic to users
 */

import { Request, Response, Router } from 'express';
import controller from '../controller';
import { authenticateJWT } from '../../../utils/jwt';

const router: Router = Router();

router.post('/', authenticateJWT, async (req: Request, res: Response): Promise<void> => {
  const dog = req.body;

  try {
    const dogCreated: string = await controller.createDog(dog);
    res.status(201).send({
      error: '',
      body: dogCreated,
    });
  } catch (error) {
    res.status(500).send({
      error: error,
      body: '',
    });
  }
});

// TODO: Image funcitonality

export default router;
