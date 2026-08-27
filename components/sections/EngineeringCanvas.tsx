'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Cpu, Eye, Factory, Leaf, Radio, Wrench } from 'lucide-react';
import { subsystems } from '@/data/content';
import { CornerMarks } from '@/components/ui/Primitives';

const icons = {
  mechanical: Wrench,
  electronics: Cpu,
  iot: Radio,
  software: Factory,
  vision: Eye,
  agriculture: Leaf
};

const paths: Record<string, string> = {
  mechanical: 'M 135 128 L 252 128 L 342 248',
  electronics: 'M 665 128 L 548 128 L 458 248',
  iot: 'M 90 310 L 245 310 L 328 310',
  software: 'M 710 310 L 555 310 L 472 310',
  vision: 'M 165 500 L 265 500 L 350 374',
  agriculture: 'M 635 500 L 535 500 L 450 374'
};

export default function EngineeringCanvas() {
  const [active, setActive] = useState<string>('mechanical');
  const reduce = useReducedMotion();

  return (
    <div className="engineering-canvas" aria-label="Interactive engineering subsystem map">
      <CornerMarks />
      <div className="canvas-toolbar">
        <span>SYSTEM MAP / 6 SUBSYSTEMS</span>
        <span className="canvas-toolbar__status"><i aria-hidden="true" /> INTERACTIVE</span>
      </div>

      <div className="canvas-coordinate canvas-coordinate--x" aria-hidden="true">X 00—80</div>
      <div className="canvas-coordinate canvas-coordinate--y" aria-hidden="true">Y 00—62</div>

      <svg className="canvas-lines" viewBox="0 0 800 620" role="img" aria-label="Subsystem connections to the engineer">
        <defs>
          <filter id="line-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {subsystems.map(node => {
          const selected = active === node.id;
          return (
            <motion.path
              key={node.id}
              d={paths[node.id]}
              fill="none"
              stroke={selected ? '#00ff66' : '#334139'}
              strokeWidth={selected ? 2 : 1}
              strokeDasharray={selected ? '0' : '5 7'}
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: selected ? 1 : 0.58 }}
              transition={{ duration: reduce ? 0 : 0.7, ease: 'easeOut' }}
              filter={selected ? 'url(#line-glow)' : undefined}
            />
          );
        })}
      </svg>

      <div className="engine-core" aria-label="Smart, agricultural engineering student">
        <span className="engine-core__orbit" aria-hidden="true" />
        <span className="engine-core__orbit engine-core__orbit--two" aria-hidden="true" />
        <div className="engine-portrait" aria-hidden="true">
          <span className="engine-portrait__head" />
          <span className="engine-portrait__body" />
          <span className="engine-portrait__seam" />
        </div>
        <div className="engine-core__label">
          <span>ENGINEER // SMART</span>
          <strong>SYSTEMS THINKING</strong>
          <small>STUDENT / BUILDING TOWARD AGRI-ROBOTICS</small>
        </div>
      </div>

      <div className="canvas-nodes">
        {subsystems.map(node => {
          const Icon = icons[node.id];
          const selected = active === node.id;
          return (
            <motion.button
              key={node.id}
              type="button"
              className={`subsystem-node ${selected ? 'is-active' : ''}`}
              style={{ '--node-x': `${node.x}%`, '--node-y': `${node.y}%` } as React.CSSProperties}
              aria-pressed={selected}
              onMouseEnter={() => setActive(node.id)}
              onFocus={() => setActive(node.id)}
              onClick={() => setActive(node.id)}
              animate={{ opacity: selected ? 1 : 0.72, scale: selected ? 1.025 : 1 }}
              transition={{ duration: reduce ? 0 : 0.25 }}
            >
              <span className="subsystem-node__head">
                <Icon size={15} strokeWidth={1.6} aria-hidden="true" />
                <strong>{node.label}</strong>
                <i aria-hidden="true" />
              </span>
              <span className="subsystem-node__tech">
                {node.tech.map(tech => <span key={tech}>{tech}</span>)}
              </span>
            </motion.button>
          );
        })}
      </div>

      <div className="canvas-footer">
        <span>INPUT / DISCIPLINES</span>
        <span>OUTPUT / PRACTICAL INTELLIGENCE</span>
      </div>
    </div>
  );
}
