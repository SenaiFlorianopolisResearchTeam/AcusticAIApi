import dotenv from 'dotenv';

dotenv.config();

export const host = process.env.DB_HOST
export const port = Number(process.env.DB_PORT)
export const database = process.env.DB_NAME
export const username = process.env.DB_USERNAME
export const password = process.env.DB_PASSWORD

export const JWTKey = process.env.JWT_key
export const AIKey = process.env.ai_key
export const BACKENDKey = process.env.backend_key
