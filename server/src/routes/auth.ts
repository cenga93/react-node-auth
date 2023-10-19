import { Router } from 'express';
import { logout, register } from '../controllers/AuthController';

export default () => {
     const router = Router();

     router.post('/register', register);
     router.get('/logout', logout);

     return router;
};
