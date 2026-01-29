import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextRequest } from "next/server";

// 1. Initialize handler outside the exports
const handler = NextAuth(authOptions);

// 2. Explicitly type the params as a Promise for Next.js 16
export async function GET(req: NextRequest, { params }: { params: Promise<any> }) {
  const resolvedParams = await params;
  // Use 'as any' to suppress the TypeScript warning while maintaining the fix
  return (handler as any)(req, { params: resolvedParams });
}

export async function POST(req: NextRequest, { params }: { params: Promise<any> }) {
  const resolvedParams = await params;
  return (handler as any)(req, { params: resolvedParams });
}