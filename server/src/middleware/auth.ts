import jwt from 'jsonwebtoken';
import { NextFunction, Response } from 'express';
import config from '../config/config';
import { IReq, IUser } from '../types';

export default () => (req: IReq | any, res: Response, next: NextFunction) => {
   req.user = <IUser>jwt.verify(req.cookies.token, config.JWT_SECRET_KEY);

   next();
};
