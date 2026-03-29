import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { TargetGroup } from '@/lib/models';

export async function GET() {
  try {
    await connectDB();
    const groups = await TargetGroup.find({ published: { $ne: false } })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ success: true, data: groups });
  } catch (error) {
    console.error('Error fetching target groups:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch target groups' }, { status: 500 });
  }
}
