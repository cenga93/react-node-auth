import { Router } from 'express';
import { logout, me, register } from '../controllers/UserController';

export default () => {
   const router = Router();

   router.post('/register', register);
   router.get('/logout', logout);
   router.get('/me', me);

   return router;
};
