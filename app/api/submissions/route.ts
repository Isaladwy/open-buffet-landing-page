import { NextRequest, NextResponse } from 'next/server';
import pool from '../../../lib/db';

// GET /api/submissions - Get all submissions
export async function GET() {
  try {
    console.log('Fetching all submissions...');
    const client = await pool.connect();
    console.log('Database connected successfully');
    
    // Create table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS form_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        message TEXT,
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'completed'))
      )
    `);
    console.log('Table created/verified successfully');

    const result = await client.query(
      'SELECT * FROM form_submissions ORDER BY timestamp DESC'
    );
    
    console.log(`Found ${result.rows.length} submissions:`, result.rows);
    client.release();
    
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/submissions - Create new submission
export async function POST(request: NextRequest) {
  try {
    const { name, phone, message } = await request.json();
    
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    const client = await pool.connect();
    
    const result = await client.query(
      'INSERT INTO form_submissions (name, phone, message) VALUES ($1, $2, $3) RETURNING *',
      [name, phone, message || '']
    );
    
    client.release();
    
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 