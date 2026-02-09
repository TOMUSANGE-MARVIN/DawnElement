import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { GalleryImage } from '@/lib/models';

export async function GET() {
  try {
    await connectDB();
    const images = await GalleryImage.find({ published: true })
      .sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, data: images });
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch gallery' }, { status: 500 });
  }
}
