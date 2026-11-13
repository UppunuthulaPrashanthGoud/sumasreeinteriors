import {NextRequest,NextResponse} from "next/server";
import {timingSafeEqual} from "node:crypto";
import {createSession,cookieName,cookieOptions} from "@/lib/admin-auth";
export const runtime="nodejs";
function eq(a:string,b:string){const x=Buffer.from(a),y=Buffer.from(b);return x.length===y.length&&timingSafeEqual(x,y);}
export async function POST(req:NextRequest){try{const b=await req.json(),email=String(b.email||""),password=String(b.password||""),expected=process.env.ADMIN_EMAIL||"",secret=process.env.ADMIN_PASSWORD||"";if(!expected||!secret||!process.env.ADMIN_SESSION_SECRET)return NextResponse.json({error:"Admin login is not configured. Add the admin environment variables."},{status:503});if(!eq(email.toLowerCase(),expected.toLowerCase())||!eq(password,secret))return NextResponse.json({error:"Email or password is incorrect."},{status:401});const res=NextResponse.json({ok:true});res.cookies.set(cookieName,await createSession(),cookieOptions);return res;}catch{return NextResponse.json({error:"Unable to sign in."},{status:400});}}
