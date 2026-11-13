"use client";
import Image from "next/image";
import Link from "next/link";
import {useEffect,useState} from "react";
import {imageUrl} from "@/lib/site";
const slides=[
 {image:"photo-1600210492486-724fe5c67fb0",alt:"Warm contemporary living room with natural textures",eyebrow:"01 / LIVING SPACES",title:"A softer way to live",note:"Warmth in every detail"},
 {image:"photo-1600607687939-ce8a6c25118c",alt:"Modern home interior with clean architectural lines",eyebrow:"02 / CONTEMPORARY HOMES",title:"Designed around you",note:"Spaces with a point of view"},
 {image:"photo-1616486338812-3dadae4b4ace",alt:"Calm bedroom with elegant warm finishes",eyebrow:"03 / PRIVATE RETREATS",title:"Find your quiet",note:"A little more room to breathe"},
 {image:"photo-1600585154340-be6161a56a0c",alt:"Modern residential architecture surrounded by greenery",eyebrow:"04 / ARCHITECTURE",title:"Made to make an impression",note:"Thoughtfully built, beautifully lived"}
];
export default function HeroSlider(){
 const [activeIndex,setActiveIndex]=useState(0);const [paused,setPaused]=useState(false);
 useEffect(()=>{if(paused||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const timer=window.setInterval(()=>setActiveIndex(current=>(current+1)%slides.length),6500);return()=>window.clearInterval(timer);},[paused]);
 const select=(index:number)=>setActiveIndex((index+slides.length)%slides.length);
 return <section className="gallery-hero" aria-label="Featured interiors">
  <div className="gallery-hero-stage">{slides.map((slide,index)=><div className={`gallery-hero-slide ${activeIndex===index?"is-active":""}`} key={slide.image} aria-hidden={activeIndex!==index}>
   <Image src={imageUrl(slide.image,2200)} alt={activeIndex===index?slide.alt:""} fill priority={index===0} sizes="100vw" className="gallery-hero-photo"/>
  </div>)}<div className="gallery-hero-shade"/>
   <div className="gallery-hero-caption"><span>{slides[activeIndex].eyebrow}</span><strong>{slides[activeIndex].note}</strong></div>
   <div className="gallery-hero-controls"><div className="gallery-hero-progress"><span key={activeIndex} className={paused?"is-paused":""}/></div><div className="gallery-hero-control-row">
    <span className="gallery-hero-count"><b>{String(activeIndex+1).padStart(2,"0")}</b> / 04</span>
    <div className="gallery-hero-dots">{slides.map((slide,index)=><button type="button" key={slide.image} onClick={()=>select(index)} className={activeIndex===index?"is-active":""} aria-label={`Show slide ${index+1}: ${slide.title}`} aria-pressed={activeIndex===index}/>)}</div>
    <button type="button" className="gallery-hero-nav" onClick={()=>select(activeIndex-1)} aria-label="Previous slide">←</button><button type="button" className="gallery-hero-nav" onClick={()=>select(activeIndex+1)} aria-label="Next slide">→</button><button type="button" className="gallery-hero-pause" onClick={()=>setPaused(value=>!value)} aria-label={paused?"Resume slide rotation":"Pause slide rotation"}>{paused?"▶":"Ⅱ"}</button>
   </div></div>
  </div>
  <div className="gallery-hero-panel"><span className="eyebrow">INTERIORS&nbsp; / &nbsp;ARCHITECTURE&nbsp; / &nbsp;TURNKEY</span>
   <h1>{slides[activeIndex].title.split(" ").slice(0,-1).join(" ")} <em>{slides[activeIndex].title.split(" ").slice(-1)}</em></h1>
   <p>Interior design, kitchens, construction and renovation—thoughtfully planned around the way you want to live.</p>
   <div className="gallery-hero-actions"><Link className="button button-dark" href="/contact">Start your project ↗</Link><Link className="text-link" href="/projects">Explore the gallery →</Link></div>
   <span className="gallery-hero-location">SUMA SRI INTERIORS & CONSTRUCTIONS <i/> WARANGAL</span><span className="gallery-hero-side-index">01 — 04</span>
  </div>
 </section>;
}
