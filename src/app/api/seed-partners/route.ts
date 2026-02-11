import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://rnadw_user:rnadw.223@rnadw.pcbz0ym.mongodb.net/?appName=rnadw';

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

const partners = [
  {
    name: "Rwanda Investigation Bureau (RIB)",
    description: "Ensures accessible Isange One-Stop Centre services for Deaf GBV survivors, including sign language interpretation.",
    category: "Law Enforcement",
    color: "#2563EB",
    logo: "",
    website: "",
    sortOrder: 1,
    published: true
  },
  {
    name: "UNHCR",
    description: "Supports advocacy, empowerment, and inclusion of refugee Deaf women and girls in humanitarian programs.",
    category: "Humanitarian Aid",
    color: "#FACC15",
    logo: "",
    website: "https://www.unhcr.org",
    sortOrder: 2,
    published: true
  },
  {
    name: "Kvinna till Kvinna Foundation",
    description: "Funds SRHR training and leadership empowerment programs for Deaf women.",
    category: "Equality",
    color: "#2563EB",
    logo: "",
    website: "https://kvinnatillkvinna.org",
    sortOrder: 3,
    published: true
  },
  {
    name: "Embassy of Sweden in Kigali / Sida",
    description: "Funds Rwandan Sign Language awareness, SRHR education, and inclusive advocacy for Deaf women and girls.",
    category: "International Aid",
    color: "#FACC15",
    logo: "",
    website: "",
    sortOrder: 4,
    published: true
  },
  {
    name: "Urgent Action Fund-Africa",
    description: "Provides rapid-response support for feminist human rights initiatives led by Deaf women and girls.",
    category: "Feminist Action",
    color: "#2563EB",
    logo: "",
    website: "",
    sortOrder: 5,
    published: true
  },
  {
    name: "United Nations Human Rights (OHCHR)",
    description: "Collaborates on rights-based programs for Deaf persons under the CRPD and international standards.",
    category: "Human Rights",
    color: "#FACC15",
    logo: "",
    website: "",
    sortOrder: 6,
    published: true
  },
  {
    name: "CREA",
    description: "Partners in the Women Gaining Ground consortium for global feminist initiatives and Deaf women's leadership.",
    category: "Feminist Movement",
    color: "#2563EB",
    logo: "",
    website: "",
    sortOrder: 7,
    published: true
  },
  {
    name: "Embassy of Germany in Rwanda",
    description: "Funds skills development and vocational training for economic empowerment of Deaf individuals.",
    category: "Development",
    color: "#FACC15",
    logo: "",
    website: "",
    sortOrder: 8,
    published: true
  },
  {
    name: "Ministry of Youth and Arts",
    description: "Supports leadership, inclusion, and participation of Deaf youth in cultural and community activities.",
    category: "Government",
    color: "#2563EB",
    logo: "",
    website: "",
    sortOrder: 9,
    published: true
  }
];

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(MONGODB_URI);
}

export async function POST() {
  try {
    await connectDB();

    const Partner = mongoose.models.Partner || mongoose.model('Partner', PartnerSchema);

    // Clear existing partners only
    await Partner.deleteMany({});

    // Insert updated partners
    await Partner.insertMany(partners);

    return NextResponse.json({
      success: true,
      message: `Seeded ${partners.length} partners successfully!`,
      count: partners.length
    });
  } catch (error) {
    console.error('Seed partners error:', error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
