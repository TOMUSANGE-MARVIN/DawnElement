import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { BlogPost } from '@/lib/models';
import { requireAuth } from '@/lib/auth';

export async function GET() {
  try {
    await connectDB();
    const blogs = await BlogPost.find({}, { content: 0 }).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, data: blogs });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const authError = requireAuth(request);
  if (authError) return authError;

  try {
    await connectDB();
    const body = await request.json();
    const blog = new BlogPost(body);
    await blog.save();
    return NextResponse.json({ success: true, data: blog }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
