import { Request, Response } from 'express';
import { IUser } from '../types';
import httpStatus from 'http-status';
import { catchAsync } from 'catch-async-express';
import AuthRepository from '../repositories/auth';

export const register = catchAsync(async (req: Request, res: Response) => {
     const data: { user: IUser; token: string } = await AuthRepository.createUser(req);

     res.cookie('token', data.token, {
          httpOnly: true,
          secure: true,
     });

     res.status(httpStatus.OK).json({
          ...data.user,
     });
});

export const logout = catchAsync(async (req: Request, res: Response) => {
     res.clearCookie('token');
     res.end();
});
