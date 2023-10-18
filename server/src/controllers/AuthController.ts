import { Request, Response } from 'express';

export const register = async (req: Request, res: Response) => {
     console.log("register");
     res.send('register');
};

export const logout = async (req: Request, res: Response) => {
     res.send('logout');
};
