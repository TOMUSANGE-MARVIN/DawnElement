import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Resource } from '@/lib/models';

export async function GET() {
  try {
    await connectDB();
    const resources = await Resource.find({ published: true })
      .sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: resources });
  } catch (error) {
    console.error('Error fetching resources:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch resources' }, { status: 500 });
  }
}
