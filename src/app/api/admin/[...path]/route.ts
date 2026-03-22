import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectDB } from '@/lib/mongodb';
import { requireAuth } from '@/lib/auth';
import {
  BlogPost,
  Activity,
  Resource,
  GalleryImage,
  Video,
  TeamMember,
  Partner,
  Testimonial,
  TargetGroup,
  slugify,
} from '@/lib/models';

// SiteSettings is only used in the admin catch-all route
const SiteSettingsSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  value: String,
  label: String,
  description: String,
  type: { type: String, default: 'text' },
}, { timestamps: true });

const SiteSetting = mongoose.models.SiteSetting || mongoose.model('SiteSetting', SiteSettingsSchema);

function getModel(name: string) {
  const map: Record<string, mongoose.Model<mongoose.Document>> = {
    blogs: BlogPost as mongoose.Model<mongoose.Document>,
    activities: Activity as mongoose.Model<mongoose.Document>,
    resources: Resource as mongoose.Model<mongoose.Document>,
    gallery: GalleryImage as mongoose.Model<mongoose.Document>,
    videos: Video as mongoose.Model<mongoose.Document>,
    team: TeamMember as mongoose.Model<mongoose.Document>,
    partners: Partner as mongoose.Model<mongoose.Document>,
    testimonials: Testimonial as mongoose.Model<mongoose.Document>,
    settings: SiteSetting as mongoose.Model<mongoose.Document>,
    'target-groups': TargetGroup as mongoose.Model<mongoose.Document>,
  };
  return map[name] || null;
}

// GET handler - no auth required (read-only)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    await connectDB();
    const { path } = await params;
    const [collection, id] = path;

    const Model = getModel(collection);
    if (!Model) {
      return NextResponse.json({ success: false, message: 'Invalid collection' }, { status: 400 });
    }

    if (id) {
      const item = await Model.findById(id).lean();
      return NextResponse.json({ success: true, data: item });
    }

    const projection = collection === 'blogs' ? { content: 0 } : {};
    const items = await Model.find({}, projection).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, data: items });
  } catch (error) {
    console.error('GET error:', error);
    const message = error instanceof Error ? error.message : 'Server error';
    return NextResponse.json({ success: false, message, error: String(error) }, { status: 500 });
  }
}

// POST handler
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const authError = requireAuth(request);
  if (authError) return authError;

  try {
    await connectDB();
    const { path } = await params;
    const [collection] = path;
    const body = await request.json();

    const Model = getModel(collection);
    if (!Model) {
      return NextResponse.json({ success: false, message: 'Invalid collection' }, { status: 400 });
    }

    if (body.title && ['blogs', 'activities', 'resources'].includes(collection)) {
      body.slug = slugify(body.title);
    }

    const item = new Model(body);
    await item.save();
    return NextResponse.json({ success: true, data: item }, { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    const message = error instanceof Error ? error.message : 'Server error';
    return NextResponse.json({ success: false, message, error: String(error) }, { status: 500 });
  }
}

// PUT handler
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const authError = requireAuth(request);
  if (authError) return authError;

  try {
    await connectDB();
    const { path } = await params;
    const [collection, id] = path;
    const body = await request.json();

    const Model = getModel(collection);
    if (!Model) {
      return NextResponse.json({ success: false, message: 'Invalid collection' }, { status: 400 });
    }

    if (body.title && ['blogs', 'activities', 'resources'].includes(collection)) {
      body.slug = slugify(body.title);
    }

    const item = await Model.findByIdAndUpdate(id, body, { new: true });
    if (!item) {
      return NextResponse.json({ success: false, message: 'Item not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: item });
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}

// DELETE handler
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const authError = requireAuth(request);
  if (authError) return authError;

  try {
    await connectDB();
    const { path } = await params;
    const [collection, id] = path;

    const Model = getModel(collection);
    if (!Model) {
      return NextResponse.json({ success: false, message: 'Invalid collection' }, { status: 400 });
    }

    const item = await Model.findByIdAndDelete(id);
    if (!item) {
      return NextResponse.json({ success: false, message: 'Item not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: 'Deleted successfully' });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
