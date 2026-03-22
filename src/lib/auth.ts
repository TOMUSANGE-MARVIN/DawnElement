import { NextRequest, NextResponse } from 'next/server';

const ADMIN_API_KEY = process.env.ADMIN_API_KEY;

export function requireAuth(request: NextRequest): NextResponse | null {
  if (!ADMIN_API_KEY) {
    return NextResponse.json(
      { success: false, error: 'Server misconfiguration: ADMIN_API_KEY not set' },
      { status: 500 }
    );
  }

  const authHeader = request.headers.get('authorization');
  const apiKeyHeader = request.headers.get('x-api-key');

  const token = authHeader?.startsWith('Bearer ')
    ? authHeader.slice(7)
    : apiKeyHeader;

  if (!token || token !== ADMIN_API_KEY) {
    return NextResponse.json(
      { success: false, error: 'Unauthorized' },
      { status: 401 }
    );
  }

  return null;
}
