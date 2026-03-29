import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { TeamMember } from '@/lib/models';

export async function GET() {
  try {
    await connectDB();
    const team = await TeamMember.find({ published: { $ne: false } })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ success: true, data: team });
  } catch (error) {
    console.error('Error fetching team:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch team' }, { status: 500 });
  }
}
