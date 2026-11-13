import Image from "next/image";
import Link from "next/link";
import {imageUrl,projects,services} from "@/lib/site";
import SectionTitle from "@/components/SectionTitle";
import HeroSlider from "@/components/HeroSlider";

export default function Home(){
  return <>
    <HeroSlider/>

    <section className="intro-section wrap section-pad">
      <div className="intro-aside">
        <span className="eyebrow">A MORE PERSONAL APPROACH</span>
        <span className="vertical-note">DESIGNED AROUND YOU</span>
      </div>
      <div className="intro-copy">
        <h2>A home should feel like <em>your own story.</em></h2>
        <p>At Suma Sri, design thinking and on-ground execution come together. We listen to your needs, plan with clarity and bring the details together—from the first sketch to the finishing touch.</p>
        <Link className="text-link" href="/about">Get to know our approach ↗</Link>
      </div>
      <div className="intro-stamp"><span>01—03</span><small>THOUGHTFUL DESIGN<br/>CLEAR PLANNING<br/>CAREFUL EXECUTION</small></div>
    </section>

    <section className="services-section section-pad">
      <div className="wrap">
        <SectionTitle eyebrow="WHAT WE DO" title="One place to shape your space." text="A considered range of design and build services, brought together around your project."/>
        <div className="service-grid">
          {services.slice(0,4).map(s=><Link href={`/${s.slug}`} className="service-card" key={s.slug}>
            <div className="service-image"><Image src={imageUrl(s.image,1000)} alt={s.title} fill sizes="(max-width:700px) 100vw,50vw"/><span className="service-number">{s.number}</span></div>
            <div className="service-info"><div><h3>{s.title}</h3><p>{s.text}</p></div><span className="circle-arrow">↗</span></div>
          </Link>)}
        </div>
        <div className="center-link"><Link className="button button-outline" href="/services">View all services ↗</Link></div>
      </div>
    </section>

    <section className="feature-band">
      <div className="feature-photo"><Image src={imageUrl("photo-1600210492486-724fe5c67fb0",1400)} alt="A warm and thoughtfully layered living room" fill sizes="(max-width:700px) 100vw,50vw"/></div>
      <div className="feature-copy">
        <span className="eyebrow">FROM FIRST SKETCH TO FINAL FINISH</span>
        <h2>One conversation.<br/><em>A clearer way forward.</em></h2>
        <p>Design decisions, material choices and execution details work better when they work together. We keep your priorities at the centre of every step.</p>
        <Link className="text-link" href="/about">How we work ↗</Link>
      </div>
    </section>

    <section className="process-section section-pad">
      <div className="wrap">
        <SectionTitle eyebrow="A SIMPLE PROCESS" title="Good work starts with a clear plan." text="A practical first step, with the right conversations before the work begins."/>
        <div className="process-grid">
          <article><span>01</span><h3>Tell us about your space</h3><p>Share your ideas, needs, location and the kind of work you have in mind.</p></article>
          <article><span>02</span><h3>Plan it together</h3><p>Discuss the site, scope, layouts, materials and estimate before starting.</p></article>
          <article><span>03</span><h3>Bring it to life</h3><p>Move into execution with the agreed design direction and project scope.</p></article>
        </div>
        <div className="process-link"><Link className="text-link" href="/faq">Read frequently asked questions ↗</Link></div>
      </div>
    </section>

    <section className="projects-section section-pad wrap">
      <SectionTitle eyebrow="SELECTED WORK" title="Ideas made for everyday living." text="Explore a featured Hanamakonda home and additional illustrative design references."/>
      <div className="project-grid">
        {projects.map((p,i)=><Link href="/projects" className={`project-card project-${i+1}`} key={p.title}>
          <div className="project-image"><Image src={imageUrl(p.image,1400)} alt={p.title} fill sizes="(max-width:700px) 100vw,50vw"/></div>
          <div className="project-meta"><div><span>{p.category}</span><h3>{p.title}</h3><small>{p.location}</small></div><span className="circle-arrow">↗</span></div>
        </Link>)}
      </div>
      <div className="center-link"><Link className="text-link" href="/projects">Explore the project gallery ↗</Link></div>
      <p className="project-disclaimer">The Hanamakonda home is the featured project shared by Suma Sri. Other gallery images are illustrative design references, not verified completed projects.</p>
    </section>

    <section className="cta-section">
      <div className="wrap cta-inner">
        <span className="eyebrow">YOUR SPACE, YOUR WAY</span>
        <h2>Have a space in mind?<br/><em>Let’s start there.</em></h2>
        <p>Tell us what you’re planning. We’ll help you understand the next step.</p>
        <Link className="button button-dark" href="/contact">Start a conversation ↗</Link>
      </div>
    </section>
  </>;
}
