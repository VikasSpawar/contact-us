import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';
import { v4 as uuidv4 } from 'uuid';


const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: parseInt(process.env.PGPORT || '5432', 10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { first_name, last_name, email_id, phone_number, message, country_of_residence, office_location } = body;

    const client = await pool.connect();
    const id = uuidv4();
    const created_at = new Date().toISOString();
    const updated_at = created_at;

  
    const query = `
      INSERT INTO callback_requests (id, first_name, last_name, email_id, phone_number, message, country_of_residence, office_location, created_at, updated_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    `;
    const values = [id, first_name, last_name, email_id, phone_number, message, country_of_residence, office_location, created_at, updated_at];

    await client.query(query, values);
    client.release();

    return NextResponse.json({ message: 'Callback request created successfully', id }, { status: 201 });
  } catch (error) {
    console.error('Error creating callback request:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
