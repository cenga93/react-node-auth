import mongoose from 'mongoose';
import app from './app';
import { errorConverter, errorHandler } from './middleware/error';
import * as http from 'http';
import config from './config/config';

const PORT: number = config.PORT;
const MONGO_URL: string | undefined = config.MONGO_URL;

/** Starting the server */
const server = http.createServer(app);
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`));

/** Database connection */
if (MONGO_URL) {
   mongoose.connect(MONGO_URL).then(() => console.log(`==> Connected to  database`));
   mongoose.connection.on('error', (err) => console.log('Could not connect to the database. Exiting now...', err));
}

/** Error middleware */
app.use(errorConverter);
app.use(errorHandler);
