import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Partner } from '@/lib/models';

export async function GET() {
  try {
    await connectDB();
    const partners = await Partner.find({ published: true })
      .sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, data: partners });
  } catch (error) {
    console.error('Error fetching partners:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch partners' }, { status: 500 });
  }
}
