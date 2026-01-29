import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextRequest } from "next/server";

// 1. Define authOptions directly here to stop the 'i5' minification error
const authOptions: any = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) return null;
          
          await connectToDatabase();
          
          const user = await User.findOne({ 
            email: credentials.email.toLowerCase() 
          });

          if (!user) return null;

          const isValid = await bcrypt.compare(credentials.password, user.password);
          if (!isValid) return null;

          return { id: user._id.toString(), email: user.email, name: user.name };
        } catch (error) {
          console.error("AUTH_DEBUG_ERROR:", error);
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/auth/signin" },
  // Mandatory for production environments with domain mismatches
  trustHost: true, 
};

const handler = NextAuth(authOptions);

// 2. Next.js 16 Mandatory Promise Wrapper
export async function GET(req: NextRequest, { params }: { params: Promise<any> }) {
  const resolvedParams = await params;
  return handler(req, { params: resolvedParams });
}

export async function POST(req: NextRequest, { params }: { params: Promise<any> }) {
  const resolvedParams = await params;
  return handler(req, { params: resolvedParams });
}