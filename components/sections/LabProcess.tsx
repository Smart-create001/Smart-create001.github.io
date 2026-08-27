'use client';

import { motion, useReducedMotion } from 'motion/react';
import { Activity, ArrowDown, ArrowRight, BookOpen, CircleAlert, Microscope, Wrench } from 'lucide-react';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import { activities, labStatus, processSteps } from '@/data/content';
import { CornerMarks, Reveal, SectionHeading, SectionLabel, StatusBadge } from '@/components/ui/Primitives';

const statusIcons = [Wrench, BookOpen, Microscope];

function LabStatusCards() {
  return (
    <div className="lab-status-grid">
      {labStatus.map((item, index) => {
        const Icon = statusIcons[index];
        return (
          <Reveal key={item.kind} delay={index * .08}>
            <SpotlightCard className="lab-status-card" spotlightColor="rgba(0, 255, 102, 0.1)">
              <article>
                <div className="lab-status-card__top"><Icon size={19} strokeWidth={1.6} aria-hidden="true" /><span>0{index + 1}</span></div>
                <span className="lab-status-card__kind">{item.kind}</span>
                <h3>{item.title}</h3>
                <div className="lab-status-card__state"><i aria-hidden="true" /><StatusBadge>{item.status} ●</StatusBadge></div>
              </article>
            </SpotlightCard>
          </Reveal>
        );
      })}
    </div>
  );
}

function ProcessTrace() {
  const reduce = useReducedMotion();
  return (
    <div className="process-trace" aria-label="Build-driven learning process">
      <CornerMarks />
      <motion.div
        className="process-trace__line"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={reduce ? undefined : { scaleX: 1 }}
        viewport={{ once: true, margin: '-20% 0px' }}
        transition={{ duration: 1.2, ease: [0.22,1,.36,1] }}
        aria-hidden="true"
      />
      {processSteps.map((step, index) => (
        <motion.div
          key={step}
          className={`process-node ${step === 'GET STUCK' ? 'process-node--friction' : ''} ${step === 'ITERATE' ? 'process-node--active' : ''}`}
          initial={reduce ? false : { opacity: .25, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px -15%' }}
          transition={{ duration: .35, delay: index * .1 }}
        >
          <span>0{index + 1}</span>
          <i aria-hidden="true" />
          <strong>{step}</strong>
          {index < processSteps.length - 1 ? <ArrowRight className="process-node__arrow" size={15} aria-hidden="true" /> : null}
        </motion.div>
      ))}
    </div>
  );
}

export default function LabProcess() {
  return (
    <>
      <section id="lab" className="lab-section section-shell" aria-labelledby="lab-title">
        <div className="lab-section__heading-row">
          <SectionHeading label="LAB STATUS // LIVE" title={<span id="lab-title">Currently at<br /><em>SMART_TECH.</em></span>} />
          <Reveal className="lab-readout">
            <span>SYSTEM STATUS</span>
            <strong><i aria-hidden="true" /> ACTIVE / ITERATING</strong>
            <small>LAST UPDATE // 2026.08</small>
          </Reveal>
        </div>

        <LabStatusCards />

        <Reveal className="activity-feed">
          <div className="activity-feed__heading"><SectionLabel>ACTIVITY FEED // RECENT SIGNALS</SectionLabel><Activity size={17} aria-hidden="true" /></div>
          <div className="activity-list">
            {activities.map((item, index) => (
              <article key={item.kind}>
                <span className="activity-list__index">0{index + 1}</span>
                <span className="activity-list__kind">{item.kind}</span>
                <h3>{item.title}</h3>
                <span className={item.when === 'OPEN QUESTION' ? 'is-open' : ''}>{item.when}</span>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="process-section section-shell" aria-labelledby="process-title">
        <div className="process-heading-grid">
          <SectionHeading label="ENGINEERING PROCESS" title={<span id="process-title">Build first.<br /><em>Learn when the problem appears.</em></span>} />
          <Reveal className="process-note">
            <span>BEHAVIOR TRACE // NOT A CORPORATE FRAMEWORK</span>
            <p>BUILD → GET STUCK → LEARN → FIX → ITERATE</p>
          </Reveal>
        </div>

        <Reveal><ProcessTrace /></Reveal>

        <Reveal className="failure-card">
          <CornerMarks />
          <div className="failure-card__aside">
            <CircleAlert size={22} strokeWidth={1.5} aria-hidden="true" />
            <span>FAILURE EVIDENCE</span>
            <strong>FAILED TEST #03</strong>
            <small>LEARNING SIGNAL / NOT A FINAL OUTCOME</small>
          </div>
          <div className="failure-card__main">
            <div className="failure-card__title"><span>MOTOR CONTROL // THERMAL</span><StatusBadge tone="warning">OBSERVED</StatusBadge></div>
            <h3>Motor Driver Overheating</h3>
            <div className="failure-grid">
              <div><span>OBSERVED</span><p>Motor temperature increased beyond expected operating behavior.</p></div>
              <div><span>QUESTION</span><p>Why is current draw higher than expected?</p></div>
              <div><span>LEARN</span><p>Motor loading and thermal handling required additional investigation.</p></div>
              <div><span>FIX</span><p>Driver, cooling and system adjustment.</p></div>
            </div>
            <div className="failure-card__next"><span>NEXT</span><strong>PROTOTYPE V0.4</strong><ArrowDown size={15} aria-hidden="true" /></div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
