import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Activity } from '@/lib/models';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const activity = await Activity.findById(id).lean();

    if (!activity) {
      return NextResponse.json({ success: false, error: 'Activity not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: activity });
  } catch (error) {
    console.error('Error fetching activity:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch activity' }, { status: 500 });
  }
}
