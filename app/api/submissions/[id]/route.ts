import { NextRequest, NextResponse } from 'next/server';
import pool from '../../../../lib/db';

// GET /api/submissions/[id] - Get specific submission
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    console.log('Fetching submission with ID:', params.id);
    const client = await pool.connect();
    
    const result = await client.query(
      'SELECT * FROM form_submissions WHERE id = $1',
      [parseInt(params.id)]
    );
    
    console.log('Query result:', result.rows);
    client.release();
    
    if (result.rows.length === 0) {
      console.log('No submission found with ID:', params.id);
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT /api/submissions/[id] - Update submission
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { status, name, phone, message } = await request.json();
    
    const client = await pool.connect();
    
    let query = 'UPDATE form_submissions SET ';
    const values: unknown[] = [];
    let paramCount = 1;
    
    if (status !== undefined) {
      query += `status = $${paramCount}`;
      values.push(status);
      paramCount++;
    }
    
    if (name !== undefined) {
      if (paramCount > 1) query += ', ';
      query += `name = $${paramCount}`;
      values.push(name);
      paramCount++;
    }
    
    if (phone !== undefined) {
      if (paramCount > 1) query += ', ';
      query += `phone = $${paramCount}`;
      values.push(phone);
      paramCount++;
    }
    
    if (message !== undefined) {
      if (paramCount > 1) query += ', ';
      query += `message = $${paramCount}`;
      values.push(message);
      paramCount++;
    }
    
    query += ` WHERE id = $${paramCount} RETURNING *`;
    values.push(parseInt(params.id));
    
    const result = await client.query(query, values);
    
    client.release();
    
    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE /api/submissions/[id] - Delete submission
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const client = await pool.connect();
    
    const result = await client.query(
      'DELETE FROM form_submissions WHERE id = $1 RETURNING *',
      [parseInt(params.id)]
    );
    
    client.release();
    
    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: 'Submission deleted successfully' });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 