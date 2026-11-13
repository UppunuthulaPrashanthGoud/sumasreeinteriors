import Image from "next/image";
import Link from "next/link";
import {imageUrl,projects,services} from "@/lib/site";
import HeroSlider from "@/components/HeroSlider";

export default function Home(){
 const gallery=[
  {...projects[0],title:"Hanamakonda Family Home",category:"FEATURED PROJECT",image:"photo-1600607687939-ce8a6c25118c",layout:"gallery-large"},
  {title:"Warm Minimal Living",location:"Design reference",category:"LIVING SPACES",image:"photo-1600210492486-724fe5c67fb0",layout:"gallery-tall"},
  {title:"Contemporary Kitchen",location:"Design reference",category:"KITCHEN DESIGN",image:"photo-1600607687920-4e2a09cf159d",layout:"gallery-wide"}
 ];
 return <main className="home-redesign gallery-home">
  <HeroSlider/>
  <section className="gallery-intro wrap">
   <div className="gallery-intro-label"><span className="eyebrow">THE SUMA SRI APPROACH</span><span className="gallery-index">01 — 04 / SPACES</span></div>
   <div className="gallery-intro-copy"><h2>Spaces that feel like <em>you.</em></h2><p>Considered interiors, thoughtful planning and dependable execution—brought together to make everyday living feel more beautiful.</p><Link className="text-link" href="/about">Discover our approach ↗</Link></div>
   <div className="gallery-intro-note">DESIGNED WITH INTENTION<br/>MADE FOR EVERYDAY LIVING</div>
  </section>
  <section className="gallery-work-section"><div className="wrap">
   <div className="gallery-section-heading"><div><span className="eyebrow">A CLOSER LOOK</span><h2>Rooms to remember.</h2></div><Link className="text-link" href="/projects">View all projects ↗</Link></div>
   <div className="editorial-gallery">{gallery.map((item,i)=><Link href="/projects" className={`editorial-tile ${item.layout}`} key={item.title}>
    <div className="editorial-image"><Image src={imageUrl(item.image,1600)} alt={item.title} fill sizes="(max-width:700px) 100vw, 65vw"/><span className="editorial-image-count">0{i+1}</span></div>
    <div className="editorial-caption"><div><span>{item.category}</span><h3>{item.title}</h3><small>{item.location}</small></div><span className="circle-arrow">↗</span></div>
   </Link>)}</div>
   <p className="project-disclaimer">The Hanamakonda home is the featured project shared by Suma Sri. Other images are illustrative design references, not verified completed projects.</p>
  </div></section>
  <section className="gallery-services-section"><div className="wrap">
   <div className="gallery-section-heading"><div><span className="eyebrow">WHAT WE DO</span><h2>One team. Every detail.</h2><p>From the first idea to the final finish, bring your project together with one team.</p></div><Link className="text-link" href="/services">Explore all services ↗</Link></div>
   <div className="gallery-service-grid">{services.slice(0,4).map((s,i)=><Link href={`/${s.slug}`} className="gallery-service-card" key={s.slug}>
    <div className="gallery-service-image"><Image src={imageUrl(s.image,1000)} alt={s.title} fill sizes="(max-width:700px) 50vw,25vw"/><span>0{i+1}</span></div>
    <div className="gallery-service-caption"><h3>{s.title}</h3><span>↗</span></div><p>{s.text}</p>
   </Link>)}</div>
  </div></section>
  <section className="gallery-about"><div className="gallery-about-image"><Image src={imageUrl("photo-1600210492486-724fe5c67fb0",1600)} alt="Warm contemporary living room with natural textures" fill sizes="(max-width:700px) 100vw,55vw"/></div>
   <div className="gallery-about-copy"><span className="eyebrow">ABOUT SUMA SRI INTERIORS</span><h2>A home should feel like <em>your own story.</em></h2><p>We bring design, materials and execution into one considered process. Your needs shape the plan; thoughtful details bring it to life.</p><Link className="text-link" href="/about">Meet the studio ↗</Link><div className="gallery-about-mark">SS<span>INTERIORS & CONSTRUCTIONS</span></div></div>
  </section>
  <section className="gallery-process wrap"><div className="gallery-process-heading"><span className="eyebrow">FROM IDEA TO REALITY</span><h2>Good work starts<br/>with a clear plan.</h2></div>
   <div className="gallery-process-steps"><article><span>01</span><h3>Tell us about your space</h3><p>Share your ideas, requirements and what you have in mind.</p></article><article><span>02</span><h3>Plan it together</h3><p>We align the scope, layout, materials and estimate.</p></article><article><span>03</span><h3>Bring it to life</h3><p>Our team takes the agreed plan into execution.</p></article></div>
  </section>
  <section className="gallery-cta"><div className="wrap gallery-cta-inner"><div><span className="eyebrow">LET'S MAKE IT PERSONAL</span><h2>Have a space in mind?<br/><em>Let's start there.</em></h2><p>Tell us what you’re planning. We’ll help you find a clear next step.</p></div><Link className="button button-dark" href="/contact">Book a consultation ↗</Link></div></section>
 </main>;
}
