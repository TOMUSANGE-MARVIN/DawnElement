import mongoose, { Schema, Document } from 'mongoose';

// Blog Post
export interface IBlogPost extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: string;
  image: string;
  featured: boolean;
  published: boolean;
}

const blogPostSchema = new Schema<IBlogPost>({
  title: { type: String, required: true },
  slug: String,
  excerpt: String,
  content: String,
  author: { type: String, default: 'RNADW Team' },
  authorRole: { type: String, default: 'Communications' },
  date: String,
  readTime: { type: String, default: '5 min read' },
  category: String,
  categoryColor: { type: String, default: '#2563EB' },
  image: String,
  featured: { type: Boolean, default: false },
  published: { type: Boolean, default: true }
}, { timestamps: true });

// Activity
export interface IActivity extends Document {
  title: string;
  slug: string;
  subtitle: string;
  icon: string;
  color: string;
  image: string;
  description: string;
  published: boolean;
}

const activitySchema = new Schema<IActivity>({
  title: { type: String, required: true },
  slug: String,
  subtitle: String,
  icon: { type: String, default: '📋' },
  color: { type: String, default: '#2563EB' },
  image: String,
  description: String,
  published: { type: Boolean, default: true }
}, { timestamps: true });

// Resource
export interface IResource extends Document {
  title: string;
  slug: string;
  description: string;
  category: string;
  categoryColor: string;
  fileType: string;
  fileSize: string;
  icon: string;
  downloadUrl: string;
  published: boolean;
}

const resourceSchema = new Schema<IResource>({
  title: { type: String, required: true },
  slug: String,
  description: String,
  category: String,
  categoryColor: { type: String, default: '#2563EB' },
  fileType: { type: String, default: 'PDF' },
  fileSize: String,
  icon: { type: String, default: '📄' },
  downloadUrl: String,
  published: { type: Boolean, default: true }
}, { timestamps: true });

// Video
export interface IVideo extends Document {
  videoId: string;
  title: string;
  description: string;
  category: string;
  published: boolean;
}

const videoSchema = new Schema<IVideo>({
  videoId: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  category: String,
  published: { type: Boolean, default: true }
}, { timestamps: true });

// Gallery Image
export interface IGalleryImage extends Document {
  src: string;
  title: string;
  category: string;
  categoryColor: string;
  description: string;
  published: boolean;
}

const galleryImageSchema = new Schema<IGalleryImage>({
  src: { type: String, required: true },
  title: String,
  category: String,
  categoryColor: { type: String, default: '#2563EB' },
  description: String,
  published: { type: Boolean, default: true }
}, { timestamps: true });

// Partner
export interface IPartner extends Document {
  name: string;
  category: string;
  color: string;
  logo: string;
  website: string;
  published: boolean;
}

const partnerSchema = new Schema<IPartner>({
  name: { type: String, required: true },
  category: String,
  color: { type: String, default: '#2563EB' },
  logo: String,
  website: String,
  published: { type: Boolean, default: true }
}, { timestamps: true });

// Team Member
export interface ITeamMember extends Document {
  name: string;
  role: string;
  description: string;
  image: string;
  published: boolean;
}

const teamMemberSchema = new Schema<ITeamMember>({
  name: { type: String, required: true },
  role: String,
  description: String,
  image: String,
  published: { type: Boolean, default: true }
}, { timestamps: true });

// Testimonial
export interface ITestimonial extends Document {
  quote: string;
  author: string;
  role: string;
  image: string;
  published: boolean;
}

const testimonialSchema = new Schema<ITestimonial>({
  quote: { type: String, required: true },
  author: { type: String, required: true },
  role: String,
  image: String,
  published: { type: Boolean, default: true }
}, { timestamps: true });

// Export models (handle hot reloading)
export const BlogPost = mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', blogPostSchema);
export const Activity = mongoose.models.Activity || mongoose.model<IActivity>('Activity', activitySchema);
export const Resource = mongoose.models.Resource || mongoose.model<IResource>('Resource', resourceSchema);
export const Video = mongoose.models.Video || mongoose.model<IVideo>('Video', videoSchema);
export const GalleryImage = mongoose.models.GalleryImage || mongoose.model<IGalleryImage>('GalleryImage', galleryImageSchema);
export const Partner = mongoose.models.Partner || mongoose.model<IPartner>('Partner', partnerSchema);
export const TeamMember = mongoose.models.TeamMember || mongoose.model<ITeamMember>('TeamMember', teamMemberSchema);
export const Testimonial = mongoose.models.Testimonial || mongoose.model<ITestimonial>('Testimonial', testimonialSchema);

// Helper to generate slug
export function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
