import { Request } from 'express';
import ApiError from '../middleware/error';
import httpStatus from 'http-status';
import { IUser } from '../types';
import User, { IUserModel } from '../models/User';
import { Types } from 'mongoose';

const createUser = async (req: Request): Promise<IUser> => {
     const { body } = req;

     /**  Check if user exists in database */
     const userExists: { _id: Types.ObjectId } | null = await User.exists({ email: body.email });
     if (userExists) throw new ApiError(httpStatus.FORBIDDEN, 'User already exists');

     /**  Save new user in database  */
     const newUser: IUserModel = await new User(body).save();

     /** Return new user into controller */
     return await newUser.getPublicFields();
};

export default {
     createUser,
};
