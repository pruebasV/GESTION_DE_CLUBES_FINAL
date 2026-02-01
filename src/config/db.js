import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false
  },
  family: 4 // fuerza IPv4 (bien pensado)
});

export default pool;
