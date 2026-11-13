"use client";

import Image from "next/image";
import Link from "next/link";
import {useEffect,useState} from "react";
import {imageUrl} from "@/lib/site";

const slides=[
  {image:"photo-1600210492486-724fe5c67fb0",alt:"Elegant contemporary living room with layered natural textures",eyebrow:"01 / LIVING SPACES",title:"Layered for living"},
  {image:"photo-1600607687939-ce8a6c25118c",alt:"Modern interior with warm wood and clean architectural lines",eyebrow:"02 / INTERIOR DESIGN",title:"Made to feel like home"},
  {image:"photo-1616486338812-3dadae4b4ace",alt:"Calm bedroom interior with carefully coordinated finishes",eyebrow:"03 / PRIVATE RETREATS",title:"A quieter kind of comfort"},
  {image:"photo-1600585154340-be6161a56a0c",alt:"Contemporary home architecture surrounded by greenery",eyebrow:"04 / HOMES & CONSTRUCTION",title:"A beautiful first impression"}
];

export default function HeroSlider(){
  const [activeIndex,setActiveIndex]=useState(0);
  const [paused,setPaused]=useState(false);

  useEffect(()=>{
    if(paused||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    const timer=window.setInterval(()=>setActiveIndex(current=>(current+1)%slides.length),6200);
    return ()=>window.clearInterval(timer);
  },[paused,activeIndex]);

  const previous=()=>setActiveIndex(current=>(current-1+slides.length)%slides.length);
  const next=()=>setActiveIndex(current=>(current+1)%slides.length);

  return <section className="hero hero-home hero-animated" aria-label="Suma Sri Interiors">
    <div className="hero-stage">
      {slides.map((slide,index)=><div className={`hero-slide ${activeIndex===index?"is-active":""}`} key={slide.image} aria-hidden={activeIndex!==index}>
        <Image className="hero-slide-image" src={imageUrl(slide.image,2200)} alt={activeIndex===index?slide.alt:""} fill priority={index===0} sizes="(max-width: 700px) 100vw, 52vw"/>
        <div className="hero-slide-caption">
          <span>{slide.eyebrow}</span>
          <strong>{slide.title}</strong>
        </div>
      </div>)}
      <div className="hero-slider-controls" role="group" aria-label="Hero image controls">
        <div className="hero-progress-track"><span key={activeIndex} className={`hero-progress ${paused?"is-paused":""}`}/></div>
        <div className="hero-control-row">
          <span className="hero-count"><b>{String(activeIndex+1).padStart(2,"0")}</b><i>/</i>{String(slides.length).padStart(2,"0")}</span>
          <div className="hero-dots">
            {slides.map((slide,index)=><button key={slide.image} type="button" className={activeIndex===index?"hero-dot is-active":"hero-dot"} aria-label={`Show image ${index+1}: ${slide.title}`} aria-pressed={activeIndex===index} onClick={()=>setActiveIndex(index)}><span/></button>)}
          </div>
          <button className="hero-nav-button" type="button" onClick={previous} aria-label="Previous image">←</button>
          <button className="hero-nav-button" type="button" onClick={next} aria-label="Next image">→</button>
          <button className="hero-pause-button" type="button" onClick={()=>setPaused(value=>!value)} aria-label={paused?"Play automatic image rotation":"Pause automatic image rotation"}>{paused?"▶":"Ⅱ"}</button>
        </div>
      </div>
    </div>
    <div className="wrap hero-content">
      <span className="eyebrow">SUMA SRI INTERIORS & CONSTRUCTIONS · WARANGAL</span>
      <h1>Beautiful spaces.<br/><em>Thoughtfully built.</em></h1>
      <p>Interior design, kitchens, construction and renovation—planned around the way you want to live.</p>
      <div className="hero-actions">
        <Link className="button button-dark" href="/contact">Discuss your project ↗</Link>
        <Link className="text-link light-link" href="/projects">Explore selected work →</Link>
      </div>
      <div className="hero-location">HANAMAKONDA, WARANGAL <span>—</span> TELANGANA & ANDHRA PRADESH</div>
    </div>
    <div className="hero-index">DESIGN <i/> BUILD <i/> FINISH</div>
  </section>;
}
