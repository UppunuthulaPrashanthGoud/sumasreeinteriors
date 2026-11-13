import Image from "next/image";
import Link from "next/link";
import {imageUrl,projects,services} from "@/lib/site";
import HeroSlider from "@/components/HeroSlider";

const expertise=[
 {icon:"⌂",title:"Interior",sub:"Design",href:"/interior-design"},
 {icon:"▤",title:"Modular",sub:"Kitchens",href:"/modular-kitchen"},
 {icon:"⌂",title:"Home",sub:"Renovation",href:"/house-renovation"},
 {icon:"⌑",title:"Construction",sub:"& Execution",href:"/house-construction"},
 {icon:"♧",title:"Space",sub:"Planning",href:"/services"}
];
const projectCards=[
 {title:"Contemporary Family Home",place:"Hanamakonda",image:"photo-1600607687939-ce8a6c25118c",tag:"FEATURED"},
 {title:"Modular Kitchen",place:"Design reference",image:"photo-1600607687920-4e2a09cf159d",tag:"KITCHEN"},
 {title:"Warm Minimal Living",place:"Design reference",image:"photo-1600210492486-724fe5c67fb0",tag:"LIVING"}
];
export default function Home(){
 return <main className="chosen-home">
  <HeroSlider/>
  <section className="expertise-strip"><div className="expertise-heading"><span className="eyebrow">OUR EXPERTISE</span><h2>One place to<br/>shape your<br/>space.</h2></div>
   <div className="expertise-items">{expertise.map((item)=><Link href={item.href} className="expertise-item" key={item.title}><span className="expertise-icon" aria-hidden="true">{item.icon}</span><span>{item.title}<br/>{item.sub}</span></Link>)}</div>
  </section>
  <section className="chosen-about wrap">
   <div className="chosen-about-photo"><Image src={imageUrl("photo-1600210492486-724fe5c67fb0",1600)} alt="Warm contemporary living room interior" fill sizes="(max-width:700px) 100vw,50vw"/></div>
   <div className="chosen-about-copy"><span className="eyebrow">ABOUT SUMA SRI INTERIORS</span><h2>A home should feel like <em>your own story.</em></h2><p>We design and build personalized spaces that reflect your lifestyle, taste and aspirations — from concept to completion.</p><Link href="/about" className="text-link">Know More About Us&nbsp; →</Link></div>
  </section>
  <section className="chosen-projects wrap"><div className="chosen-project-heading"><div><span className="eyebrow">SELECTED PROJECTS</span><h2>Ideas made for<br/>everyday living.</h2></div><Link className="text-link" href="/projects">View All Projects&nbsp; →</Link></div>
   <div className="chosen-project-grid">{projectCards.map((item,i)=><Link href="/projects" className="chosen-project-card" key={item.title}>
    <div className="chosen-project-image"><Image src={imageUrl(item.image,1200)} alt={item.title} fill sizes="(max-width:700px) 100vw,25vw"/><span>0{i+1}</span></div>
    <div className="chosen-project-caption"><div><h3>{item.title}</h3><small>{item.place}</small></div><i>›</i></div>
   </Link>)}</div>
   <p className="chosen-project-note">Only the Hanamakonda home is identified as a featured Suma Sri project. Other images are illustrative design references.</p>
  </section>
  <section className="chosen-process wrap"><div className="chosen-process-heading"><span className="eyebrow">OUR PROCESS</span><h2>Good work starts<br/>with a clear plan.</h2></div>
   <div className="chosen-process-steps"><article><b>01</b><div><h3>Discover</h3><p>Understand your needs,<br/>style and goals.</p></div><span>›</span></article><article><b>02</b><div><h3>Design</h3><p>Create a tailored design<br/>that fits your space.</p></div><span>›</span></article><article><b>03</b><div><h3>Build</h3><p>Execute with quality,<br/>care and transparency.</p></div></article></div>
  </section>
  <section className="chosen-cta"><div className="chosen-cta-image"><Image src={imageUrl("photo-1600210492486-724fe5c67fb0",1400)} alt="" fill sizes="100vw"/></div><div className="chosen-cta-copy"><h2>Have a space in mind?<br/><em>Let’s bring it to life.</em></h2><p>Book a free consultation with our design team and take the first step<br className="desktop-break"/> towards your dream space.</p></div><Link href="/contact" className="button button-dark">▣&nbsp; Book a Consultation&nbsp; →</Link></section>
 </main>;
}
