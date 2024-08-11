import { NextResponse } from 'next/server';
import { Pool } from 'pg';


const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: parseInt(process.env.PGPORT || '5432', 10),
});

export async function GET() {
  try {
    const client = await pool.connect();

    
    const query = 'SELECT * FROM callback_requests ORDER BY created_at DESC';
    const result = await client.query(query);

    client.release();

 
    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    console.error('Error fetching callback requests:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
