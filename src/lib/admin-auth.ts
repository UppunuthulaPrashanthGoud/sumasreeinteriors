import {SignJWT,jwtVerify} from "jose";
import {cookies} from "next/headers";
const COOKIE="suma_admin_session";
function key(){const s=process.env.ADMIN_SESSION_SECRET;if(!s||s.length<32)throw new Error("ADMIN_SESSION_SECRET must be at least 32 characters");return new TextEncoder().encode(s);}
export async function createSession(){return new SignJWT({role:"admin"}).setProtectedHeader({alg:"HS256"}).setSubject(process.env.ADMIN_EMAIL||"admin").setIssuedAt().setExpirationTime("8h").sign(key());}
export async function isAdmin(){try{const token=(await cookies()).get(COOKIE)?.value;if(!token)return false;const v=await jwtVerify(token,key());return v.payload.role==="admin"&&v.payload.sub===(process.env.ADMIN_EMAIL||"admin");}catch{return false;}}
export const cookieName=COOKIE;
export const cookieOptions={httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax" as const,path:"/",maxAge:28800};
