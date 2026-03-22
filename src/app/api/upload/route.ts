import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { requireAuth } from '@/lib/auth';

// Allowed file types
const IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
const DOCUMENT_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

export async function POST(request: NextRequest) {
  const authError = requireAuth(request);
  if (authError) return authError;

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const fileType = formData.get('type') as string; // 'image' or 'document'
    
    if (!file) {
      return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 });
    }

    // Validate file type
    const isImage = IMAGE_TYPES.includes(file.type);
    const isDocument = DOCUMENT_TYPES.includes(file.type);
    
    if (!isImage && !isDocument) {
      return NextResponse.json({ 
        success: false, 
        error: 'Invalid file type. Allowed: images (JPG, PNG, GIF, WebP) and documents (PDF, DOC, DOCX)'
      }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create appropriate directory
    const subFolder = isDocument ? 'documents' : 'uploads';
    const uploadDir = path.join(process.cwd(), 'public', subFolder);
    await mkdir(uploadDir, { recursive: true });

    // Generate unique filename
    const timestamp = Date.now();
    const originalName = file.name.replace(/[^a-zA-Z0-9.-]/g, '-');
    const filename = `${timestamp}-${originalName}`;
    const filepath = path.join(uploadDir, filename);

    await writeFile(filepath, buffer);

    // Return the URL path - use API route for uploads to ensure they're served in production
    const publicUrl = subFolder === 'uploads' ? `/api/uploads/${filename}` : `/${subFolder}/${filename}`;
    
    // Get file size in human readable format
    const fileSizeBytes = buffer.length;
    let fileSize = '';
    if (fileSizeBytes >= 1024 * 1024) {
      fileSize = (fileSizeBytes / (1024 * 1024)).toFixed(1) + ' MB';
    } else {
      fileSize = (fileSizeBytes / 1024).toFixed(1) + ' KB';
    }

    // Get file extension for type
    const ext = path.extname(originalName).toUpperCase().replace('.', '');
    
    return NextResponse.json({ 
      success: true, 
      url: publicUrl,
      filename: filename,
      fileSize: fileSize,
      fileType: ext,
      isDocument: isDocument
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ success: false, error: 'Upload failed' }, { status: 500 });
  }
}
