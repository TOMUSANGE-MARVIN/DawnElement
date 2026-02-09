import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { BlogPost, Activity, Resource, Video, GalleryImage, Partner, TeamMember, Testimonial } from '@/lib/models';

export async function GET() {
  try {
    await connectDB();
    const [blogs, activities, resources, videos, gallery, partners, team, testimonials] = await Promise.all([
      BlogPost.countDocuments(),
      Activity.countDocuments(),
      Resource.countDocuments(),
      Video.countDocuments(),
      GalleryImage.countDocuments(),
      Partner.countDocuments(),
      TeamMember.countDocuments(),
      Testimonial.countDocuments()
    ]);

    return NextResponse.json({
      success: true,
      data: { blogs, activities, resources, videos, gallery, partners, team, testimonials }
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
