import { NextResponse, NextRequest } from 'next/server';
import bcrypt from 'bcrypt';
import client from '../../../../lib/db';

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const { name, email, password } = body;

  if (!name || !email || !password) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await client.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id',
      [name, email, hashedPassword]
    );

    return NextResponse.json({ success: true, userId: result.rows[0].id }, { status: 201 });
  } catch (error) {
    console.error('Error during signup:', error);

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
};
