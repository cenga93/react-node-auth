import dotenv from 'dotenv';
dotenv.config();
import express, { Express, Request, Response, NextFunction } from 'express';
import mongoose, { Promise } from 'mongoose';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import mongoSanitize from 'express-mongo-sanitize';
import cors from 'cors';
import router from './routes';

const app: Express = express();
const origin = 'http://localhost:3000';

/** Sanitizes user-supplied data to prevent MongoDB Operator Injection. */
app.use(mongoSanitize());

/**  Compression middleware */
app.use(compression());

app.use(cors({ credentials: true, origin }));

app.use(cookieParser());

app.use((req: Request, res: Response, next: NextFunction) => {
   res.header('Access-Control-Allow-Origin', origin);
   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   res.header('Access-Control-Allow-Credentials', 'true');

   return next();
});

/** Parse application/x-www-form-urlencoded */
app.use(express.urlencoded({ extended: true }));

/** Parse application/json */
app.use(express.json());

mongoose.Promise = Promise;

/** Router */
app.use('/api', router());

// app.all('/api/*', function (req: Request, res: Response, next: NextFunction) {
//    next();
// });

export default app;
