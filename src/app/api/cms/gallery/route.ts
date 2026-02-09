import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { GalleryImage } from '@/lib/models';

export async function GET() {
  try {
    await connectDB();
    const images = await GalleryImage.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: images });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const image = new GalleryImage(body);
    await image.save();
    return NextResponse.json({ success: true, data: image }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
