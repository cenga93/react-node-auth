import { Request } from 'express';
import ApiError from '../middleware/error';
import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import { IUser } from '../types';
import User from '../models/User';
import { Types } from 'mongoose';
import config from '../config/config';

/**
 * Create new user
 *
 * @param req - Represents a Request.
 */
const createUser = async (req: Request): Promise<{ user: IUser; token: string }> => {
   const { body } = req;

   /**  Check if user exists in database */
   const userExists: { _id: Types.ObjectId } | null = await User.exists({ email: body.email });
   if (userExists) throw new ApiError(httpStatus.FORBIDDEN, 'User already exists');

   /**  Save new user in database  */
   const newUser: IUser = await new User(body).save();

   /**
    * Payload for token
    * The reason for the "string | undefined" firstname and lastname type is due to the "firstname?: string;" and "lastname?: string;"  declarations within the IUser interface.
    */
   const payload: IUser = {
      firstname: newUser.firstname,
      lastname: newUser.lastname,
      email: newUser.email,
      password: newUser.password,
   };

   const token: string = jwt.sign(payload, config.JWT_SECRET_KEY, { expiresIn: config.JWT_EXPIRATION });

   /** Return new user into controller */
   return {
      user: {
         firstname: newUser.firstname,
         lastname: newUser.lastname,
      },
      token,
   };
};

export default {
   createUser,
};
