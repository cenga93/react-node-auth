import { Request, Response } from 'express';
import { IReq, IUser } from '../types';
import httpStatus from 'http-status';
import { catchAsync } from 'catch-async-express';
import UserRepository from '../repositories/user';
import User from '../models/User';
import ApiError from '../middleware/error';

export const register = catchAsync(async (req: Request, res: Response) => {
   const data: { user: IUser; token: string } = await UserRepository.createUser(req);

   res.cookie('token', data.token, {
      httpOnly: true,
      secure: true,
   });

   res.status(httpStatus.OK).json({
      ...data.user,
   });
});

export const me = catchAsync(async (req: IReq, res: Response) => {
   const { email, password } = req.user;

   const user = await User.findOne({ email, password });
   if (!user) throw new ApiError(httpStatus.FORBIDDEN, 'User not found');

   res.status(httpStatus.OK).json({
      firstname: user.firstname,
      lastname: user.lastname,
   });
});

export const logout = catchAsync(async (req: Request, res: Response) => {
   res.clearCookie('token');
   res.end();
});
