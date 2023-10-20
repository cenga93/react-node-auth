import { Router } from 'express';
import { logout, me, register } from '../controllers/UserController';
import auth from '../middleware/auth';

export default () => {
   const router = Router();

   router.post('/register', register);
   router.get('/logout', logout);
   router.get('/me', auth(), me);

   return router;
};
