import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://rnadw_user:rnadw.223@rnadw.pcbz0ym.mongodb.net/?appName=rnadw';

async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  await mongoose.connect(MONGODB_URI);
}

// Target Group Schema
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

const TargetGroup = mongoose.models.TargetGroup || mongoose.model('TargetGroup', TargetGroupSchema);

// Seed data for target groups
const targetGroups = [
  {
    title: "Deaf Women",
    ageRange: "19 years and above",
    description: "Adult deaf women with diverse sexual orientations, gender identity, educational and social backgrounds.",
    details: "Our primary community of adult deaf women includes those from all walks of life. We support women with diverse sexual orientations, gender identities, educational backgrounds, and social circumstances. Through our programs, we empower them with skills, knowledge, and advocacy tools to fully participate in society.",
    icon: "👩",
    color: "#2563EB",
    sortOrder: 1,
    published: true
  },
  {
    title: "Deaf Girls",
    ageRange: "12-18 years",
    description: "Adolescent and Young Girls (AYG) and First Time Teen Young Mothers (FTYM).",
    details: "We support adolescent deaf girls aged 12-18 years, including those who are first-time teen mothers. Our programs focus on education, life skills, reproductive health awareness, and creating safe spaces for young deaf girls to learn, grow, and develop their potential.",
    icon: "👧",
    color: "#EC4899",
    sortOrder: 2,
    published: true
  },
  {
    title: "Deaf Children",
    ageRange: "0-11 years",
    description: "Young deaf children requiring early intervention and family support.",
    details: "Early intervention is crucial for deaf children's development. We work with families and caregivers to provide sign language education, early childhood development support, and connect them with resources to ensure deaf children have the best start in life.",
    icon: "👶",
    color: "#10B981",
    sortOrder: 3,
    published: true
  },
  {
    title: "Deaf Women & Girls Refugees and IDPs",
    ageRange: "All ages",
    description: "Deaf women and girls who are refugees or internally displaced persons.",
    details: "We provide specialized support for deaf women and girls who are refugees or internally displaced persons (IDPs). These vulnerable populations face unique challenges accessing services, information, and protection. Our programs ensure they receive accessible humanitarian assistance and are included in refugee response mechanisms.",
    icon: "🤝",
    color: "#FACC15",
    sortOrder: 4,
    published: true
  }
];

export async function GET() {
  try {
    await connectDB();
    
    // Clear existing target groups
    await TargetGroup.deleteMany({});
    
    // Insert seed data
    const inserted = await TargetGroup.insertMany(targetGroups);
    
    return NextResponse.json({ 
      success: true, 
      message: `Seeded ${inserted.length} target groups`,
      data: inserted
    });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json({ 
      success: false, 
      error: String(error) 
    }, { status: 500 });
  }
}
