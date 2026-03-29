import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Resource } from '@/lib/models';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const resource = await Resource.findById(id).lean();

    if (!resource) {
      return NextResponse.json({ success: false, error: 'Resource not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: resource });
  } catch (error) {
    console.error('Error fetching resource:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch resource' }, { status: 500 });
  }
}
