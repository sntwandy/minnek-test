// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const config = {
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
};

export default config;
