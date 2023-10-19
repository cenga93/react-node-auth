import { Document, Model, model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { IUser } from '../types';

export interface IUserModel extends IUser, Document {
   // getPublicFields(): Promise<IUser>;
}

const UserSchema = new Schema(
   {
      firstname: {
         type: String,
         required: true,
      },
      lastname: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      password: {
         type: String,
         required: true,
      },
   },
   {
      timestamps: true,
   },
);

/**  Hashing password */
UserSchema.pre('save', async function (next): Promise<void> {
   let user = this;

   /** Generate the salt */
   const salt: string = await bcrypt.genSalt(10);
   user.password = bcrypt.hashSync(user.password, salt);

   return next();
});

const User: Model<IUser> = model<IUser>('User', UserSchema);

export default User;
