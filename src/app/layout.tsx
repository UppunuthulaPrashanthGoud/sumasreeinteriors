import type {Metadata,Viewport} from "next";
import "./globals.css";
import "./white-theme.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import MotionEffects from "@/components/MotionEffects";
import {site} from "@/lib/site";
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:"Suma Sri Interiors & Constructions | Warangal",template:"%s | Suma Sri"},description:site.description,applicationName:site.name,alternates:{canonical:"/"},openGraph:{type:"website",locale:"en_IN",siteName:site.name,title:site.name,description:site.description,url:site.url},twitter:{card:"summary_large_image",title:site.name,description:site.description},robots:{index:true,follow:true},icons:{icon:"/icon.svg",shortcut:"/icon.svg",apple:"/icon.svg"}};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#ffffff"};
export default function RootLayout({children}:{children:React.ReactNode}){
 const schema={"@context":"https://schema.org","@type":"HomeAndConstructionBusiness",name:site.name,url:site.url,description:site.description,address:{"@type":"PostalAddress",streetAddress:"Hanamakonda",addressLocality:"Warangal",addressRegion:"Telangana",postalCode:"506001",addressCountry:"IN"},areaServed:["Warangal","Telangana","Andhra Pradesh"],makesOffer:["Interior design","Modular kitchens","Home construction","Home renovation"]};
 return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><MotionEffects/><Header/><main>{children}</main><Footer/><WhatsApp/></body></html>;
}