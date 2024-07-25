// app/databaseConfig.js
import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const client = new Client({
  user: 'postgres',
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: Number(process.env.DB_PORT),
  // connectionString: process.env.DATABASE_URL,
});

client.connect()
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err.stack));

export default client;
