import http from 'http';
import mongoose from 'mongoose';
import app from './app';

const PORT: string | undefined = process.env.PORT;
const MONGO_URL: string | undefined = process.env.MONGO_URL;

/** Starting the server */
const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`));

if (MONGO_URL) {
     mongoose.connect(MONGO_URL).then(() => console.log(`==> Connected to  database`));
     mongoose.connection.on('error', (err) => console.log('Could not connect to the database. Exiting now...', err));
}