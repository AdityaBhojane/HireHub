import dotenv from 'dotenv';

dotenv.config();

export const DB_URL = process.env.DB_URL;
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRY = process.env.JWT_EXPIRY || '10d';
export const JWT_ADMIN_SECRET = process.env.JWT_ADMIN_SECRET;
export const JWT_HR_SECRET = process.env.JWT_HR_SECRET;