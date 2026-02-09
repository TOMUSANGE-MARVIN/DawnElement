import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://rnadw_user:rnadw.223@rnadw.pcbz0ym.mongodb.net/?appName=rnadw';

async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  await mongoose.connect(MONGODB_URI);
}

const SiteSettingsSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  value: String,
  label: String,
  description: String,
  type: { type: String, default: 'text' },
}, { timestamps: true });

const SiteSetting = mongoose.models.SiteSetting || mongoose.model('SiteSetting', SiteSettingsSchema);

// GET - Fetch all settings or a specific setting by key
export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');
    
    if (key) {
      // Fetch specific setting by key
      const setting = await SiteSetting.findOne({ key });
      if (!setting) {
        return NextResponse.json({ 
          success: false, 
          message: 'Setting not found' 
        }, { status: 404 });
      }
      return NextResponse.json({ success: true, data: setting });
    }
    
    // Fetch all settings
    const settings = await SiteSetting.find();
    
    // Convert to key-value object for easy access
    const settingsObject: Record<string, string> = {};
    settings.forEach((s: { key: string; value: string }) => {
      settingsObject[s.key] = s.value;
    });
    
    return NextResponse.json({ 
      success: true, 
      data: settings,
      settings: settingsObject 
    });
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to fetch settings' 
    }, { status: 500 });
  }
}
