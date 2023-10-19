import mongoose from 'mongoose';
import app from './app';
import { errorConverter, errorHandler } from './middleware/error';

mongoose.set('strictQuery', false);

const PORT: string | undefined = process.env.PORT;

/** Starting the server */
app.listen(PORT, async () => {
     const MONGO_URL: string | undefined = process.env.MONGO_URL;

     console.log(`Server running on http://localhost:${PORT}/`);

     if (MONGO_URL) {
          mongoose.connect(MONGO_URL).then(() => console.log(`==> Connected to  database`));
          mongoose.connection.on('error', (err) => console.log('Could not connect to the database. Exiting now...', err));
     }

     /** Error middleware */
     app.use(errorConverter);
     app.use(errorHandler);
});
