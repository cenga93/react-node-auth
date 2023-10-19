import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { IError } from '../types';

export default class ApiError extends Error {
   public statusCode: number;

   constructor(statusCode: number, message: string) {
      super();
      this.statusCode = statusCode;
      this.message = message;

      Error.captureStackTrace(this, this.constructor);
   }
}

/**
 * This function is used for converting and normalizing errors in the application.
 * If the error is not of type ApiError, it is transformed into an instance of ApiError with the appropriate status code and message before being passed further for handling.
 *
 * @param err - Represents an error.
 * @param req - Represents a Request.
 * @param res - Represents a Response.
 * @param next - A function for the next step in processing.
 */
export const errorConverter = (err: IError, req: Request, res: Response, next: NextFunction): void => {
   let error: any = err;

   if (!(error instanceof ApiError)) {
      const statusCode = error.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
      const message = error.message || httpStatus[statusCode];
      error = new ApiError(statusCode, message);
   }

   next(error);
};

/**
 * This function is an error handling middleware.
 *
 * @param err - Represents an error.
 * @param req - Represents a Request.
 * @param res - Represents a Response.
 * @param _next - A function for the next step in processing.
 */
export const errorHandler = (err: IError, req: Request, res: Response, _next: NextFunction): Response => {
   const { statusCode, message } = err;

   const response = { code: statusCode, message };

   return res.status(statusCode).json(response);
};
