'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Activity, ArrowRight, Gauge, RadioTower } from 'lucide-react';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import { EvidenceTag, StatusBadge } from '@/components/ui/Primitives';
import { labExperiments } from '@/data/content';

const notes: Record<string, { question: string; control: string; next: string }> = {
  'EXP-004': {
    question: 'How do motor load, current draw and cooling affect driver temperature?',
    control: 'Repeatable load, current measurement and recorded cooling configuration.',
    next: 'Run a controlled retest before changing the hardware conclusion.'
  },
  'EXP-005': {
    question: 'Which navigation concepts must be understood before moving from simulation to a physical robot?',
    control: 'Separate learning notes, simulation observations and physical evidence.',
    next: 'Map a minimal ROS2 navigation learning path with explicit assumptions.'
  },
  'EXP-006': {
    question: 'Which agricultural tasks create the most meaningful physical workload?',
    control: 'Use a consistent observation frame before proposing automation.',
    next: 'Prepare field questions and identify evidence that would change the design direction.'
  }
};

export default function ExperimentRegister() {
  const [active, setActive] = useState(labExperiments[0].id);
  const reduce = useReducedMotion();
  const selected = labExperiments.find(item => item.id === active) ?? labExperiments[0];

  return (
    <section className="experiment-register section-shell" aria-labelledby="experiment-title">
      <div className="experiment-register__heading">
        <div><span>EXPERIMENT REGISTER // ACTIVE QUESTIONS</span><h2 id="experiment-title">Problems become<br /><em>learning targets.</em></h2></div>
        <p>Version 0.01 keeps each experiment connected to a question, an evidence boundary and a next action.</p>
      </div>
      <div className="experiment-console">
        <div className="experiment-console__list" role="list" aria-label="Experiment register">
          {labExperiments.map(item => (
            <button key={item.id} type="button" className={active === item.id ? 'is-active' : ''} onClick={() => setActive(item.id)} aria-pressed={active === item.id}>
              <span>{item.id}</span><strong>{item.title}</strong><small>{item.signal}</small><i /><ArrowRight size={15} />
            </button>
          ))}
        </div>
        <SpotlightCard className="experiment-console__viewer" spotlightColor="rgba(0, 255, 102, 0.09)">
          <AnimatePresence mode="wait">
            <motion.article
              key={selected.id}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: reduce ? 0 : .22 }}
            >
              <div className="experiment-console__top"><span><Activity size={15} /> SELECTED SIGNAL / {selected.signal}</span><StatusBadge>{selected.state}</StatusBadge></div>
              <h3>{selected.title}</h3>
              <div className="experiment-readouts"><span><RadioTower size={15} /> EVIDENCE // {selected.evidence}</span><span><Gauge size={15} /> STATE // {selected.state}</span></div>
              <dl>
                <div><dt>QUESTION</dt><dd>{notes[selected.id].question}</dd></div>
                <div><dt>CONTROL NEEDED</dt><dd>{notes[selected.id].control}</dd></div>
                <div><dt>NEXT ACTION</dt><dd>{notes[selected.id].next}</dd></div>
              </dl>
              <EvidenceTag>NO STRONGER CLAIM THAN THE TEST SUPPORTS</EvidenceTag>
            </motion.article>
          </AnimatePresence>
        </SpotlightCard>
      </div>
    </section>
  );
}
