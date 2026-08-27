'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="section-label">
      <span className="section-label__dot" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

export function StatusBadge({ children, tone = 'active' }: { children: ReactNode; tone?: 'active' | 'neutral' | 'warning' }) {
  return <span className={`status-badge status-badge--${tone}`}>{children}</span>;
}

export function EvidenceTag({ children }: { children: ReactNode }) {
  return <span className="evidence-tag">{children}</span>;
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 24
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px -8%' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  label,
  title,
  copy,
  align = 'left'
}: {
  label: string;
  title: ReactNode;
  copy?: ReactNode;
  align?: 'left' | 'center';
}) {
  return (
    <Reveal className={`section-heading section-heading--${align}`}>
      <SectionLabel>{label}</SectionLabel>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </Reveal>
  );
}

export function CornerMarks() {
  return (
    <>
      <span className="corner corner--tl" aria-hidden="true" />
      <span className="corner corner--tr" aria-hidden="true" />
      <span className="corner corner--bl" aria-hidden="true" />
      <span className="corner corner--br" aria-hidden="true" />
    </>
  );
}
