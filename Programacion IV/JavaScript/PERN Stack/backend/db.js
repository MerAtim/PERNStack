import pg from 'pg';
import { PG_PORT, PG_HOST, PG_USER, PG_PASSWORD, PG_DATABASE } from './config.js';

export const pool = new pg.Pool({
    host: PG_HOST,
    port: PG_PORT,
    user: PG_USER,
    password: PG_PASSWORD,
    database: PG_DATABASE,
});

pool.on("connect", () => {
    console.log('Conectado a la base de datos');
});