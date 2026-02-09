import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Activity } from '@/lib/models';

export async function GET() {
  try {
    await connectDB();
    const activities = await Activity.find({ published: true })
      .sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, data: activities });
  } catch (error) {
    console.error('Error fetching activities:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch activities' }, { status: 500 });
  }
}
