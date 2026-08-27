import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CircleDot } from 'lucide-react';
import PrintResumeButton from '@/components/pages/PrintResumeButton';
import { projects } from '@/data/content';
import { profile, resumeSections } from '@/data/profile';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'A print-ready engineering resume for Smart, centered on evidence and the direction toward Agri-Robotics.'
};

export default function ResumePage() {
  return (
    <main id="main-content" className="resume-page">
      <div className="resume-toolbar section-shell">
        <Link href="/about"><ArrowLeft size={14} /> BACK TO ABOUT</Link>
        <span>SMART_TECH // RESUME V0.01</span>
        <PrintResumeButton />
      </div>

      <article className="resume-sheet">
        <header>
          <div><span>SMART_TECH</span><small>PERSONAL ENGINEERING LAB</small></div>
          <p>BUILD → LEARN → ITERATE → AGRI-ROBOTICS</p>
        </header>
        <section className="resume-identity">
          <div><span>ENGINEER // SMART</span><h1>{profile.name}</h1><strong>{profile.role}</strong><p>{profile.institution}</p></div>
          <div><span>DIRECTION</span><strong>{profile.direction}</strong><span>CONTACT</span><p>{profile.email || 'ADD REAL EMAIL IN data/profile.ts'}</p></div>
        </section>

        <section className="resume-summary">
          <span>PROFILE</span>
          <p>I learn most effectively through building: starting with what I know, pushing until a real limitation appears, then studying and testing what is needed to move forward. My direction is to combine mechanical systems, electronics, connected control, software and machine intelligence around practical agricultural problems.</p>
        </section>

        <section className="resume-foundation">
          <span>ENGINEERING FOUNDATION</span>
          <div>{resumeSections.foundation.map((item, index) => <p key={item}><small>0{index + 1}</small><strong>{item}</strong></p>)}</div>
        </section>

        <section className="resume-projects">
          <span>SELECTED ENGINEERING EVIDENCE</span>
          <div>
            {projects.map(project => (
              <article key={project.id}>
                <div><small>PROJECT {project.number}</small><strong>{project.status}</strong></div>
                <h2>{project.title}</h2>
                <p>{project.problem}</p>
                <ul>{project.contribution.map(item => <li key={item}><CircleDot size={9} />{item}</li>)}</ul>
                <span>{project.evidence}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-capabilities">
          <span>CAPABILITIES / LINKED TO BUILD EVIDENCE</span>
          <div>{resumeSections.capabilities.map(group => <article key={group.title}><h3>{group.title}</h3><p>{group.items.join(' • ')}</p></article>)}</div>
        </section>

        <section className="resume-direction">
          <div><span>CURRENT DIRECTION</span><strong>Agri-Robotics • Autonomous Systems • Field Robotics • Human-centered Agricultural Technology</strong></div>
          <div><span>OPEN TO</span><strong>{profile.availability.join(' • ')}</strong></div>
        </section>

        <footer><span>SMART_TECH // FULL VERSION 0.01</span><Link href="/work">FULL PROJECT EVIDENCE <ArrowUpRight size={12} /></Link></footer>
      </article>
    </main>
  );
}
