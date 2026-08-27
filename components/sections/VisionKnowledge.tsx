'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, BookMarked, Boxes, ExternalLink, FlaskConical, HelpCircle, ScanSearch } from 'lucide-react';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import { knowledge, researchQuestions, roadmap, trail } from '@/data/content';
import { CornerMarks, EvidenceTag, Reveal, SectionHeading, SectionLabel, StatusBadge } from '@/components/ui/Primitives';

function CapabilityRoadmap() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  return (
    <div className="roadmap-panel">
      <CornerMarks />
      <div className="roadmap-panel__meta"><span>CAPABILITY ROADMAP // INTERACTIVE</span><StatusBadge tone="neutral">VISION / CONCEPT</StatusBadge></div>
      <div className="roadmap-track">
        <motion.div
          className="roadmap-track__line"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={reduce ? undefined : { scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3 }}
          aria-hidden="true"
        />
        {roadmap.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={`roadmap-node ${active === index ? 'is-active' : ''}`}
            aria-pressed={active === index}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span>
            <i aria-hidden="true" />
            <strong>{item.title}</strong>
            {index < roadmap.length - 1 ? <ArrowRight size={14} aria-hidden="true" /> : null}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="roadmap-inspector"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -6 }}
          transition={{ duration: .25 }}
        >
          <span>ACTIVE CAPABILITY / 0{active + 1}</span>
          <strong>{roadmap[active].title}</strong>
          <p>{roadmap[active].note}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function EngineeringTrail() {
  const [active, setActive] = useState(0);
  return (
    <div className="trail-panel">
      <CornerMarks />
      <div className="trail-panel__header"><SectionLabel>ENGINEERING TRAIL // TRACE</SectionLabel><span>MINI KNOWLEDGE GRAPH / PHASE 1</span></div>
      <div className="trail-track" role="list" aria-label="Engineering knowledge trail">
        {trail.map((item, index) => (
          <div className="trail-segment" key={item} role="listitem">
            <button
              type="button"
              className={`${active === index ? 'is-active' : ''} ${index < active ? 'is-upstream' : ''} ${index > active ? 'is-downstream' : ''}`}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              aria-pressed={active === index}
            >
              <span>0{index + 1}</span><i aria-hidden="true" /><strong>{item}</strong>
            </button>
            {index < trail.length - 1 ? <span className={`trail-connector ${index < active ? 'is-lit' : ''}`} aria-hidden="true"><ArrowRight size={14} /></span> : null}
          </div>
        ))}
      </div>
      <div className="trail-panel__footer">
        <div><span>SELECTED NODE</span><strong>{trail[active]}</strong><small>{active === 0 ? 'OBSERVED' : active === 1 ? 'QUESTION' : active === 2 ? 'LEARNING NOTE' : active === 3 ? 'EXPERIMENT' : 'NEXT BUILD'}</small></div>
        <Link href="/knowledge">Explore Knowledge Records <ArrowRight size={15} aria-hidden="true" /></Link>
      </div>
    </div>
  );
}

const knowledgeIcons = [ScanSearch, BookMarked, FlaskConical, Boxes];

export default function VisionKnowledge() {
  return (
    <>
      <section className="vision-section" aria-labelledby="vision-title">
        <div className="vision-section__grid-bg" aria-hidden="true" />
        <div className="section-shell">
          <div className="vision-heading-grid">
            <SectionHeading label="VISION // AGRI-ROBOTICS" title={<span id="vision-title">Building capability<br /><em>before claiming the future.</em></span>} />
            <Reveal className="vision-principle">
              <span>DESIGN PRINCIPLE</span>
              <blockquote>Technology must adapt to farmers,<br /><em>not farmers to technology.</em></blockquote>
              <StatusBadge tone="neutral">VISION / CONCEPT</StatusBadge>
            </Reveal>
          </div>
          <Reveal><CapabilityRoadmap /></Reveal>

          <div className="questions-wrap">
            <SectionLabel>OPEN RESEARCH QUESTIONS // INTELLECTUAL ANCHORS</SectionLabel>
            <div className="question-grid">
              {researchQuestions.map((question, index) => (
                <Reveal key={question} delay={index * .08}>
                  <article><span>0{index + 1}</span><HelpCircle size={19} strokeWidth={1.4} aria-hidden="true" /><h3>{question}</h3><small>OPEN QUESTION / REQUIRES FIELD EVIDENCE</small></article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="knowledge" className="knowledge-section section-shell" aria-labelledby="knowledge-title">
        <SectionHeading
          label="FROM THE LAB // KNOWLEDGE"
          title={<span id="knowledge-title">What I am learning,<br /><em>testing and questioning.</em></span>}
          copy="A modern engineering notebook where claims stay connected to their maturity and evidence."
        />

        <div className="knowledge-grid">
          {knowledge.map((item, index) => {
            const Icon = knowledgeIcons[index];
            return (
              <Reveal key={item.title} delay={(index % 2) * .08}>
                <SpotlightCard className={`knowledge-card knowledge-card--${index + 1}`} spotlightColor="rgba(0, 255, 102, 0.08)">
                  <article>
                    <div className="knowledge-card__top"><span>0{index + 1} / {item.type}</span><Icon size={18} strokeWidth={1.5} aria-hidden="true" /></div>
                    <h3>{item.title}</h3>
                    <div className="knowledge-card__status"><span>STATUS // {item.status}</span><span>EVIDENCE // {item.evidence}</span></div>
                    {item.source ? (
                      <div className="knowledge-interpretation">
                        <div><span>SOURCE SAYS</span><p>{item.source}</p></div>
                        <div><span>MY INTERPRETATION</span><p>{item.interpretation}</p></div>
                      </div>
                    ) : (
                      <div className="knowledge-card__signal"><i aria-hidden="true" /><span>{index === 0 ? 'FIELD OBSERVATION' : index === 1 ? 'CONCEPT MAPPING' : 'TEST LOG / SINGLE RUN'}</span></div>
                    )}
                    <div className="knowledge-card__footer"><EvidenceTag>{item.evidence}</EvidenceTag><Link href={`/knowledge/${item.slug}`}>OPEN NOTE <ExternalLink size={13} aria-hidden="true" /></Link></div>
                  </article>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="engineering-trail-wrap"><EngineeringTrail /></Reveal>
      </section>
    </>
  );
}
