import mongoose from 'mongoose';
import config from '../config';

const { dbName, dbPassword, dbUser, dbHost } = config;

const URI = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`;

const connect = (): void => {
  mongoose
    .connect(URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error(`Error: ${error.message}`, error));
};

export default connect;
