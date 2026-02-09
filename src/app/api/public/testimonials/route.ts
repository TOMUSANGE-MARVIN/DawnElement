import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Testimonial } from '@/lib/models';

export async function GET() {
  try {
    await connectDB();
    const testimonials = await Testimonial.find({ published: true })
      .sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, data: testimonials });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}
