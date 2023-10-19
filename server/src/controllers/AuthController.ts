import { Request, Response } from 'express';
import { IUser } from '../types';
import httpStatus from 'http-status';
import { catchAsync } from 'catch-async-express';
import repo from '../repositories/auth';

export const register = catchAsync(async (req: Request, res: Response) => {
     const newUser: IUser = await repo.createUser(req);

     res.status(httpStatus.OK).json(newUser);
});

export const logout = catchAsync(async (req: Request, res: Response) => {
     res.send('logout');
});
