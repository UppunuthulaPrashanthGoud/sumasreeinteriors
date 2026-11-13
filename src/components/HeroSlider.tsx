"use client";
import Image from "next/image";
import Link from "next/link";
import {useEffect,useState} from "react";
import {imageUrl} from "@/lib/site";
const slides=[
 {image:"photo-1600585154340-be6161a56a0c",alt:"Modern luxury home with warm lighting and landscaped entrance"},
 {image:"photo-1600607687939-ce8a6c25118c",alt:"Elegant contemporary home interior"},
 {image:"photo-1600210492486-724fe5c67fb0",alt:"Warm living room with natural textures"},
 {image:"photo-1616486338812-3dadae4b4ace",alt:"Calm modern bedroom interior"}
];
export default function HeroSlider(){
 const [active,setActive]=useState(0);
 useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const timer=window.setInterval(()=>setActive(v=>(v+1)%slides.length),6000);return()=>window.clearInterval(timer)},[]);
 return <section className="chosen-hero">
  <div className="chosen-hero-copy"><span className="eyebrow">INTERIORS&nbsp; · &nbsp;ARCHITECTURE&nbsp; · &nbsp;DESIGN & BUILD</span>
   <h1>Beautiful Spaces.<br/><em>Thoughtfully Built.</em></h1>
   <p>Interior design and architectural solutions that bring elegance, comfort and lasting value to your home.</p>
   <div className="chosen-hero-actions"><Link href="/contact" className="button button-dark">Start Your Project&nbsp; →</Link><Link href="/projects" className="text-link">View Our Work&nbsp; ⊙</Link></div>
   <div className="chosen-stats"><div><b>10+</b><span>Years of Experience</span></div><div><b>150+</b><span>Spaces Designed</span></div><div><b>100%</b><span>Client Satisfaction</span></div></div>
  </div>
  <div className="chosen-hero-visual">{slides.map((slide,i)=><div className={`chosen-hero-slide ${active===i?"active":""}`} key={slide.image}><Image src={imageUrl(slide.image,2200)} alt={active===i?slide.alt:""} fill priority={i===0} sizes="(max-width:700px) 100vw,55vw"/></div>)}
   <div className="chosen-hero-controls"><span>0{active+1} / 04</span><div className="chosen-hero-track"><i style={{width:`${(active+1)*25}%`}}/></div><button onClick={()=>setActive(v=>(v+slides.length-1)%slides.length)} aria-label="Previous hero image">‹</button><button onClick={()=>setActive(v=>(v+1)%slides.length)} aria-label="Next hero image">›</button></div>
  </div>
 </section>;
}
