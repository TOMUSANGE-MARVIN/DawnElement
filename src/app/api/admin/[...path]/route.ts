import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://rnadw_user:rnadw.223@rnadw.pcbz0ym.mongodb.net/?appName=rnadw';

async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

// Schemas
const BlogPostSchema = new mongoose.Schema({
  title: String,
  slug: String,
  excerpt: String,
  content: String,
  author: { type: String, default: 'RNADW Team' },
  authorRole: String,
  date: String,
  readTime: String,
  category: String,
  categoryColor: String,
  image: String,
  featured: { type: Boolean, default: false },
  published: { type: Boolean, default: true },
}, { timestamps: true });

const ActivitySchema = new mongoose.Schema({
  title: String,
  slug: String,
  subtitle: String,
  icon: String,
  color: String,
  image: String,
  description: String,
  mission: String,
  beneficiariesCount: String,
  districtsCount: String,
  impactText: String,
  testimonialQuote: String,
  testimonialAuthor: String,
  testimonialRole: String,
  published: { type: Boolean, default: true },
}, { timestamps: true });

const ResourceSchema = new mongoose.Schema({
  title: String,
  slug: String,
  description: String,
  introduction: String,
  category: String,
  categoryColor: String,
  fileType: String,
  fileSize: String,
  icon: String,
  downloadUrl: String,
  externalUrl: String,
  date: String,
  published: { type: Boolean, default: true },
}, { timestamps: true });

const GalleryImageSchema = new mongoose.Schema({
  src: String,
  title: String,
  category: String,
  categoryColor: String,
  description: String,
  albumId: mongoose.Schema.Types.ObjectId,
  published: { type: Boolean, default: true },
}, { timestamps: true });

const VideoSchema = new mongoose.Schema({
  videoId: String,
  title: String,
  description: String,
  category: String,
  thumbnailUrl: String,
  published: { type: Boolean, default: true },
}, { timestamps: true });

const TeamMemberSchema = new mongoose.Schema({
  name: String,
  role: String,
  memberType: { type: String, enum: ['board', 'staff'], default: 'board' },
  description: String,
  image: String,
  sortOrder: { type: Number, default: 0 },
  published: { type: Boolean, default: true },
}, { timestamps: true });

const PartnerSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  color: String,
  logo: String,
  website: String,
  sortOrder: { type: Number, default: 0 },
  published: { type: Boolean, default: true },
}, { timestamps: true });

const TestimonialSchema = new mongoose.Schema({
  quote: String,
  author: String,
  role: String,
  image: String,
  sortOrder: { type: Number, default: 0 },
  published: { type: Boolean, default: true },
}, { timestamps: true });

const SiteSettingsSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  value: String,
  label: String,
  description: String,
  type: { type: String, default: 'text' }, // text, url, image, etc.
}, { timestamps: true });

const TargetGroupSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ageRange: String,
  description: String,
  details: String,
  icon: { type: String, default: '👩' },
  color: { type: String, default: '#2563EB' },
  image: String,
  sortOrder: { type: Number, default: 0 },
  published: { type: Boolean, default: true },
}, { timestamps: true });

// Get or create models
function getModel(name: string) {
  const models: Record<string, mongoose.Schema> = {
    blogs: BlogPostSchema,
    activities: ActivitySchema,
    resources: ResourceSchema,
    gallery: GalleryImageSchema,
    videos: VideoSchema,
    team: TeamMemberSchema,
    partners: PartnerSchema,
    testimonials: TestimonialSchema,
    settings: SiteSettingsSchema,
    'target-groups': TargetGroupSchema,
  };

  const modelNames: Record<string, string> = {
    blogs: 'BlogPost',
    activities: 'Activity',
    resources: 'Resource',
    gallery: 'GalleryImage',
    videos: 'Video',
    team: 'TeamMember',
    partners: 'Partner',
    testimonials: 'Testimonial',
    settings: 'SiteSetting',
    'target-groups': 'TargetGroup',
  };

  const schema = models[name];
  const modelName = modelNames[name];
  
  if (!schema || !modelName) return null;
  
  return mongoose.models[modelName] || mongoose.model(modelName, schema);
}

// Slugify helper
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// GET handler
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

    // For list views, exclude heavy content field to speed up loading
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
  try {
    await connectDB();
    const { path } = await params;
    const [collection] = path;
    const body = await request.json();

    const Model = getModel(collection);
    if (!Model) {
      return NextResponse.json({ success: false, message: 'Invalid collection' }, { status: 400 });
    }

    // Generate slug for items that need it
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
  try {
    await connectDB();
    const { path } = await params;
    const [collection, id] = path;
    const body = await request.json();

    const Model = getModel(collection);
    if (!Model) {
      return NextResponse.json({ success: false, message: 'Invalid collection' }, { status: 400 });
    }

    // Update slug if title changed
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
