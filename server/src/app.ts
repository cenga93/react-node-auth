import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
import express, { Request, Response, NextFunction } from 'express';
import mongoose, { Promise } from 'mongoose';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import * as http from 'http';

const app = express();
const port = 3000;
const MONGO_URL = 'mongodb+srv://test12345:test12345@cluster0.chgl2ua.mongodb.net/?retryWrites=true&w=majority';

app.use(
     cors({
          credentials: true,
          origin: 'http://localhost:3000',
     }),
);

mongoose.Promise = Promise;

app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use((req: Request, res: Response, next: NextFunction) => {
//      res.header('Access-Control-Allow-Origin', origin);
//      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//      res.header('Access-Control-Allow-Credentials', 'true');
//
//      return next();
// });

/** Router */
// app.use('/api', router());

// app.all('/api/*', function (req: Request, res: Response, next: NextFunction) {
//      next();
// });

app.get('/', (req: Request, res: Response) => {
     res.send('Hello');
});

const server = http.createServer(app);

server.listen(8080, () => {
     console.log('Server running on http://localhost:8080/');
});

mongoose.connect(MONGO_URL).then(({ connections }) => {
     console.log(`==> Connected to [${connections[0].name}] database`);
});

mongoose.connection.on('error', (err) => {
     console.log(err);
});
