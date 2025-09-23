import pg from 'pg';

export const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'admin',
    database: 'PERN',
});

pool.on("connect", () => {
    console.log('Conectado a la base de datos');
});