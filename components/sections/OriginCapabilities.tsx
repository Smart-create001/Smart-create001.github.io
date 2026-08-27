'use client';

import { motion, useReducedMotion } from 'motion/react';
import { CircuitBoard, Cog, Cpu, Leaf, Tractor, Waypoints } from 'lucide-react';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import { capabilities } from '@/data/content';
import { CornerMarks, EvidenceTag, Reveal, SectionHeading, SectionLabel } from '@/components/ui/Primitives';

const originSteps = [
  { icon: Leaf, label: 'RURAL ROOTS', note: 'Farming, rice fields, animals, everyday agricultural life.' },
  { icon: Cog, label: 'ENGINEERING', note: 'A new way to see mechanisms, constraints and systems.' },
  { icon: Tractor, label: 'SMART AGRICULTURE', note: 'Applying sensing, control and connected technology.' },
  { icon: Waypoints, label: 'ROBOTICS', note: 'Machines that perceive, move and physically interact.' },
  { icon: Cpu, label: 'AGRI-ROBOTICS', note: 'A direction built from evidence, not a title already claimed.' }
];

function OriginTrail() {
  const reduce = useReducedMotion();
  return (
    <div className="origin-trail" aria-label="Journey from rural roots toward Agri-Robotics">
      <CornerMarks />
      <div className="origin-trail__meta"><span>PERSONAL SYSTEM TRACE</span><span>THAILAND // ONGOING</span></div>
      <div className="origin-trail__line" aria-hidden="true" />
      {originSteps.map((step, index) => {
        const Icon = step.icon;
        return (
          <motion.div
            className="origin-step"
            key={step.label}
            initial={reduce ? false : { opacity: .32 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={{ once: true, margin: '-25% 0px -25%' }}
            transition={{ duration: .45, delay: index * .08 }}
          >
            <span className="origin-step__number">0{index + 1}</span>
            <span className="origin-step__icon"><Icon size={18} strokeWidth={1.5} aria-hidden="true" /></span>
            <div><strong>{step.label}</strong><p>{step.note}</p></div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function OriginCapabilities() {
  return (
    <>
      <section className="origin-section section-shell" aria-labelledby="origin-title">
        <div className="origin-grid">
          <div>
            <SectionHeading label="ORIGIN // WHY AGRICULTURE" title={<span id="origin-title">Agriculture came<br />before engineering.</span>} />
            <Reveal className="origin-copy" delay={.08}>
              <p>I spent part of my childhood in rural Thailand around farming, rice fields, animals, and everyday agricultural life.</p>
              <p>Years later, after entering Smart Agricultural Engineering, I began seeing the same environment through an engineering perspective.</p>
              <p>Agriculture faces difficult problems: physical workload, an aging workforce, labor shortages, and technologies that can be difficult to adopt.</p>
              <p>That eventually led me toward a question:</p>
              <strong>How can robotics reduce agricultural workload without forcing farmers to become technologists first?</strong>
            </Reveal>
          </div>
          <Reveal className="origin-visual" delay={.12}><OriginTrail /></Reveal>
        </div>

        <Reveal className="philosophy-statement">
          <span>CORE PHILOSOPHY // HUMAN-CENTERED ENGINEERING</span>
          <blockquote>Technology must adapt to farmers,<br /><em>not farmers to technology.</em></blockquote>
          <small>DESIGN INPUT / FARMER WORKFLOW&nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;&nbsp;SYSTEM OUTPUT / USEFUL TECHNOLOGY</small>
        </Reveal>
      </section>

      <section className="capabilities-section section-shell" aria-labelledby="capabilities-title">
        <SectionHeading
          label="ENGINEERING STACK // CAPABILITIES"
          title={<span id="capabilities-title">Building across<br /><em>the system.</em></span>}
          copy="Capabilities are shown as evidence-linked working domains — never as unsupported percentages or expert badges."
        />

        <div className="capability-grid">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.number} delay={index * .08}>
              <SpotlightCard className={`capability-card capability-card--${index + 1}`} spotlightColor="rgba(0, 255, 102, 0.1)">
                <article>
                  <div className="capability-card__top">
                    <span>{`${capability.number} // DOMAIN`}</span>
                    {index === 0 ? <Cog size={19} aria-hidden="true" /> : index === 1 ? <CircuitBoard size={19} aria-hidden="true" /> : <Cpu size={19} aria-hidden="true" />}
                  </div>
                  <h3>{capability.title}</h3>
                  <p>{capability.statement}</p>
                  <ul>{capability.items.map(item => <li key={item}>{item}</li>)}</ul>
                  <div className="capability-evidence">
                    <SectionLabel>EVIDENCE-BASED SKILLS</SectionLabel>
                    {capability.evidence.map(item => (
                      <div key={item.name}>
                        <strong>{item.name}</strong>
                        <span>{item.detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="capability-card__footer"><EvidenceTag>USED IN BUILD</EvidenceTag><span>TRACE TO PROJECTS ↑</span></div>
                </article>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
