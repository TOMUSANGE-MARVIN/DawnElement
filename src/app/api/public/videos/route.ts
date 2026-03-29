import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Video } from '@/lib/models';

export async function GET() {
  try {
    await connectDB();
    const videos = await Video.find({ published: { $ne: false } })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ success: true, data: videos });
  } catch (error) {
    console.error('Error fetching videos:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch videos' }, { status: 500 });
  }
}
