import { Router } from 'express';
import user from './user';

export default (): Router => {
   const router: Router = Router();

   router.use('/user', user());

   return router;
};
