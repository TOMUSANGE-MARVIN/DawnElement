import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { BlogPost } from '@/lib/models';

export async function GET() {
  try {
    await connectDB();
    const blogs = await BlogPost.find({ published: true }, { content: 0 })
      .sort({ createdAt: -1 })
      .limit(10)
      .lean();
    
    return NextResponse.json({ success: true, data: blogs });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch blogs' }, { status: 500 });
  }
}
