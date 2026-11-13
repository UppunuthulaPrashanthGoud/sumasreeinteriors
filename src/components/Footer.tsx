import Link from "next/link";
import Image from "next/image";
import {site} from "@/lib/site";
export default function Footer(){return <footer className="chosen-footer"><div className="chosen-footer-main wrap">
 <div className="chosen-footer-brand"><Link href="/"><Image src="/brand/suma-sri-logo.svg" alt="Suma Sri Interiors" width={900} height={210}/></Link><p>Spaces that inspire, built around you.</p></div>
 <div><h4>Quick Links</h4><Link href="/">Home</Link><Link href="/about">About Us</Link><Link href="/services">Services</Link><Link href="/projects">Projects</Link><Link href="/contact">Contact</Link></div>
 <div><h4>Our Services</h4><Link href="/interior-design">Interior Design</Link><Link href="/modular-kitchen">Modular Kitchens</Link><Link href="/house-renovation">Home Renovation</Link><Link href="/house-construction">Construction</Link><Link href="/services">Space Planning</Link></div>
 <div><h4>Get in Touch</h4><p>⌖ &nbsp;{site.address}</p><p>☎ &nbsp;+91 98765 43210</p><p>✉ &nbsp;info@sumasriinteriors.in</p></div>
 <div className="chosen-social"><a href="https://instagram.com" aria-label="Instagram">◎</a><a href="https://facebook.com" aria-label="Facebook">f</a><a href="https://linkedin.com" aria-label="LinkedIn">in</a><a href="https://youtube.com" aria-label="YouTube">▶</a></div>
 </div><div className="chosen-footer-bottom wrap"><span>© {new Date().getFullYear()} Suma Sri Interiors. All rights reserved.</span><span><Link href="/privacy">Privacy</Link>　|　<Link href="/terms">Terms</Link>　|　<Link href="/sitemap.xml">Sitemap</Link></span></div></footer>}
