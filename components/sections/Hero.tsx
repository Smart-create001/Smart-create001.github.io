'use client';

import { ArrowDownRight, MoveRight } from 'lucide-react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import DecryptedText from '@/components/reactbits/DecryptedText';
import Magnet from '@/components/reactbits/Magnet';
import EngineeringCanvas from './EngineeringCanvas';
import { SectionLabel } from '@/components/ui/Primitives';

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="hero" className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel>SMART_TECH // PERSONAL ENGINEERING LAB</SectionLabel>
          <p className="hero-identity">Smart Agricultural Engineering Student</p>
          <h1 id="hero-title">
            <span>Building toward</span>
            <span className="hero-accent">
              {reduce ? (
                'AGRI-ROBOTICS.'
              ) : (
                <DecryptedText
                  text="AGRI-ROBOTICS."
                  speed={34}
                  maxIterations={16}
                  sequential
                  revealDirection="start"
                  animateOn="view"
                  className="hero-accent__revealed"
                  encryptedClassName="hero-accent__encrypted"
                  parentClassName="hero-accent__parent"
                />
              )}
            </span>
          </h1>

          <p className="hero-disciplines">Mechatronics <i /> Industrial IoT <i /> AI &amp; Computer Vision</p>
          <p className="hero-tagline">Building Intelligent Machines for Agriculture.</p>
          <p className="hero-description">
            I build with what I know, learn when I get stuck, and keep iterating — combining mechanical systems,
            electronics, software, and intelligence toward practical agricultural robotics.
          </p>

          <div className="hero-actions">
            <Magnet padding={55} magnetStrength={6} disabled={Boolean(reduce)}>
              <Link className="button button--primary" href="/work">
                <span>Explore My Work</span><MoveRight size={18} aria-hidden="true" />
              </Link>
            </Magnet>
            <Link className="button button--ghost" href="/lab">
              <span>Enter the Lab</span><ArrowDownRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <div className="hero-status" aria-label="Lab status active">
            <span className="live-dot" aria-hidden="true" />
            <strong>LAB ACTIVE</strong>
            <i aria-hidden="true" />
            <span>Building</span><span>Learning</span><span>Exploring</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-canvas-wrap"
          initial={reduce ? false : { opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduce ? 0 : 0.9, delay: 0.12 }}
        >
          <EngineeringCanvas />
        </motion.div>
      </div>
      <div className="hero-scroll-cue" aria-hidden="true">
        <span>SCROLL / ENGINEERING EVIDENCE</span><i />
      </div>
    </section>
  );
}
