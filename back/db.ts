import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'multitaskdb',
  password: 'pass',
  port: 5432,
});

export default pool;
