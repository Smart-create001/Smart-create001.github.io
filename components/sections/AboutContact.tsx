'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Code2, Mail, MoveRight, Network, UserRound, Wrench } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import Magnet from '@/components/reactbits/Magnet';
import { CornerMarks, EvidenceTag, Reveal, SectionHeading, SectionLabel, StatusBadge } from '@/components/ui/Primitives';

const focusAreas = ['Agri-Robotics', 'Autonomous Systems', 'Field Robotics', 'Human-centered Agricultural Technology'];
const collaboration = ['Internships', 'Research', 'Engineering Collaboration', 'Ag-Tech', 'Robotics'];

export default function AboutContact() {
  const [notice, setNotice] = useState<string | null>(null);
  const reduce = useReducedMotion();

  const showPlaceholder = (label: string) => {
    setNotice(`${label} is ready for Smart's real profile URL in data/profile.ts.`);
    window.setTimeout(() => setNotice(null), 3600);
  };

  const actions = [
    { label: 'Email Me', icon: Mail, href: '/contact' },
    { label: 'LinkedIn', icon: Network, href: '' },
    { label: 'GitHub', icon: Code2, href: '' },
    { label: 'View Resume', icon: MoveRight, href: '/resume' }
  ];

  return (
    <>
      <section id="about" className="about-section section-shell" aria-labelledby="about-title">
        <SectionHeading label="ABOUT // SMART" title={<span id="about-title">The engineer behind<br /><em>SMART_TECH.</em></span>} />

        <div className="about-grid">
          <Reveal className="about-profile">
            <CornerMarks />
            <div className="about-profile__visual" aria-label="Neutral portrait placeholder for Smart">
              <span className="about-profile__halo" aria-hidden="true" />
              <div className="about-silhouette" aria-hidden="true"><i /><b /></div>
              <div className="about-profile__visual-meta"><span>PORTRAIT PLACEHOLDER</span><span>REAL PHOTO / PHASE 2</span></div>
            </div>
            <div className="about-profile__info">
              <span>PROFILE // CURRENT</span>
              <h3>Smart Agricultural<br />Engineering Student</h3>
              <p>KMITL, Thailand</p>
              <div><EvidenceTag>HANDS-ON ENGINEER</EvidenceTag><EvidenceTag>CURIOUS TECHNOLOGIST</EvidenceTag></div>
            </div>
          </Reveal>

          <Reveal className="about-copy" delay={.1}>
            <SectionLabel>LEARNING BEHAVIOR // BUILD-DRIVEN</SectionLabel>
            <blockquote>“I am most comfortable learning through building.”</blockquote>
            <p>I usually start with the knowledge and experience I already have, push the project until I encounter a real limitation, then study exactly what I need to move forward.</p>
            <p>My current direction is to bring mechanical engineering, electronics, connected systems, software and machine intelligence together around agricultural problems.</p>
            <div className="about-behavior">
              <span>BUILD</span><i />
              <span>GET STUCK</span><i />
              <span>LEARN</span><i />
              <span>ITERATE</span>
            </div>
          </Reveal>
        </div>

        <div className="direction-grid">
          <Reveal className="direction-card">
            <span>WHERE I&apos;M GOING</span>
            <h3>Capability converging toward field-ready intelligent machines.</h3>
            <div>{focusAreas.map(item => <span key={item}>{item}</span>)}</div>
          </Reveal>
          <Reveal className="direction-card direction-card--collab" delay={.08}>
            <span>WHERE WE COULD WORK TOGETHER</span>
            <h3>Practical work, research and engineering collaboration.</h3>
            <div>{collaboration.map(item => <span key={item}>{item}</span>)}</div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div className="contact-grid-bg" aria-hidden="true" />
        <div className="section-shell">
          <div className="contact-status"><span>SYSTEM STATUS</span><strong><i aria-hidden="true" /> OPEN TO OPPORTUNITIES</strong><StatusBadge>AVAILABLE</StatusBadge></div>
          <Reveal className="contact-heading">
            <SectionLabel>CONTACT // START A CONVERSATION</SectionLabel>
            <h2 id="contact-title">Let&apos;s Build<br /><em>Something Useful.</em></h2>
            <p>Open to internships, research, engineering collaborations, and conversations around Agri-Robotics, Robotics, Smart Agriculture and intelligent machines.</p>
          </Reveal>

          <div className="contact-actions">
            {actions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Magnet key={action.label} padding={38} magnetStrength={8} disabled={Boolean(reduce)} wrapperClassName="contact-magnet">
                  {action.href ? (
                    <Link className={`contact-action ${index === 0 ? 'contact-action--primary' : ''}`} href={action.href}>
                      <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                      <span>{action.label}</span>
                      <MoveRight size={16} aria-hidden="true" />
                    </Link>
                  ) : (
                    <button className="contact-action" type="button" onClick={() => showPlaceholder(action.label)}>
                      <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                      <span>{action.label}</span>
                      <MoveRight size={16} aria-hidden="true" />
                    </button>
                  )}
                </Magnet>
              );
            })}
          </div>

          <div className="contact-note"><Wrench size={15} aria-hidden="true" /><span>FULL V0.01 // CONTACT COMPOSER + PRINT-READY RESUME AVAILABLE</span></div>
          {notice ? <div className="contact-toast" role="status"><UserRound size={15} aria-hidden="true" /><span>{notice}</span><button type="button" aria-label="Dismiss message" onClick={() => setNotice(null)}>×</button></div> : null}
        </div>
      </section>
    </>
  );
}
