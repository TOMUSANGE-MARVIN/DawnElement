import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
  throw new Error('Please define MONGODB_URI in .env.local');
}

// Define TeamMember schema inline - must match admin API schema
const TeamMemberSchema = new mongoose.Schema({
  name: String,
  role: String,
  description: String,
  image: String,
  sortOrder: { type: Number, default: 0 },
  published: { type: Boolean, default: true },
}, { timestamps: true });

// Check if model exists before creating
const TeamMember = mongoose.models.TeamMember || mongoose.model('TeamMember', TeamMemberSchema);

const teamData = [
  {
    name: 'Muhorakeye Pelagie',
    role: 'Board President',
    description: 'Leading RNADW\'s governance and strategic direction for the empowerment of deaf women and girls.',
    sortOrder: 1,
    published: true
  },
  {
    name: 'Mukashema Dative',
    role: 'Executive Director',
    description: 'Driving the day-to-day operations and program implementation across all 22 districts of Rwanda.',
    sortOrder: 2,
    published: true
  }
];

export async function GET() {
  try {
    // Connect to MongoDB
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGODB_URI);
    }

    // Clear existing team data
    await TeamMember.deleteMany({});

    // Insert team data
    const result = await TeamMember.insertMany(teamData);

    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${result.length} team members`,
      data: result
    });

  } catch (error) {
    console.error('Error seeding team:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to seed team data',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
