import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Cpu, Leaf, MoveRight, Wrench } from 'lucide-react';
import RouteIntro from '@/components/layout/RouteIntro';
import OriginCapabilities from '@/components/sections/OriginCapabilities';
import { EvidenceTag } from '@/components/ui/Primitives';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: 'About Smart',
  description: 'The student engineer behind SMART_TECH and the honest path toward Agri-Robotics.'
};

const direction = ['Agri-Robotics', 'Autonomous Systems', 'Field Robotics', 'Human-centered Agricultural Technology'];

export default function AboutPage() {
  return (
    <main id="main-content" className="route-page about-route">
      <RouteIntro
        eyebrow="ABOUT // SMART"
        title="The engineer behind"
        accent="SMART_TECH."
        copy="Still a student. Already building, testing and connecting multiple disciplines around useful agricultural machines."
        meta={['KMITL / THAILAND', 'HANDS-ON ENGINEER', 'CURIOUS TECHNOLOGIST']}
      />

      <section className="about-route-profile section-shell">
        <div className="about-route-profile__visual" aria-label="Portrait placeholder for Smart">
          <span className="about-profile__halo" aria-hidden="true" />
          <div className="about-silhouette" aria-hidden="true"><i /><b /></div>
          <div><span>PORTRAIT PLACEHOLDER</span><strong>SMART // ENGINEER AT THE CENTER</strong><small>REPLACE WITH REAL PORTRAIT</small></div>
        </div>
        <div className="about-route-profile__copy">
          <span>PROFILE // CURRENT</span>
          <h2>{profile.role}</h2>
          <p>{profile.institution}</p>
          <blockquote>“I am most comfortable learning through building.”</blockquote>
          <p>I usually start with the knowledge and experience I already have, push the project until I encounter a real limitation, then study exactly what I need to move forward.</p>
          <p>My current direction is to bring mechanical engineering, electronics, connected systems, software and machine intelligence together around agricultural problems.</p>
          <div><EvidenceTag>HANDS-ON ENGINEER</EvidenceTag><EvidenceTag>CURIOUS TECHNOLOGIST</EvidenceTag></div>
        </div>
      </section>

      <OriginCapabilities />

      <section className="about-direction section-shell">
        <div className="about-direction__intro">
          <span>WHERE I&apos;M GOING</span>
          <h2>Capability first.<br /><em>Direction always visible.</em></h2>
          <p>The goal is not to claim expertise early. It is to keep combining reliable machines, sensing, connected control and machine intelligence around real agricultural constraints.</p>
        </div>
        <div className="about-direction__map">
          <div><Wrench size={18} /><span>BUILD</span><strong>Reliable physical systems</strong></div>
          <i><MoveRight size={15} /></i>
          <div><Cpu size={18} /><span>CONNECT</span><strong>Perception, control and autonomy</strong></div>
          <i><MoveRight size={15} /></i>
          <div><Leaf size={18} /><span>ADAPT</span><strong>Technology to farmer workflow</strong></div>
        </div>
        <div className="about-direction__focus">{direction.map(item => <span key={item}>{item}</span>)}</div>
        <div className="about-direction__actions"><Link href="/work">SEE THE EVIDENCE <ArrowUpRight size={15} /></Link><Link href="/contact">START A CONVERSATION <ArrowUpRight size={15} /></Link></div>
      </section>
    </main>
  );
}
