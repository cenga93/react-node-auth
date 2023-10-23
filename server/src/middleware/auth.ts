import jwt from 'jsonwebtoken';
import { NextFunction, Response } from 'express';
import config from '../config/config';
import { IReq, IUser } from '../types';

export default () => (req: IReq | any, _res: Response, next: NextFunction) => {
   const { token } = req.cookies;

   if (!token) {
      return;
   }

   req.user = <IUser>jwt.verify(token, config.JWT_SECRET_KEY);

   next();
};
