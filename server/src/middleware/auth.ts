import jwt from 'jsonwebtoken';
import { NextFunction, Response } from 'express';
import config from '../config/config';
import { IReq, IUser } from '../types';
import httpStatus from 'http-status';

export default () => (req: IReq | any, res: Response, next: NextFunction) => {
   const { token } = req.cookies;

   if (token) {
      req.user = <IUser>jwt.verify(token, config.JWT_SECRET_KEY);

      next();
   } else {
      res.status(httpStatus.UNAUTHORIZED).json({
         message: 'unauthorized',
      });
   }
};
