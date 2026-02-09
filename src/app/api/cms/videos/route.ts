import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Video } from '@/lib/models';

export async function GET() {
  try {
    await connectDB();
    const videos = await Video.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: videos });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const video = new Video(body);
    await video.save();
    return NextResponse.json({ success: true, data: video }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
