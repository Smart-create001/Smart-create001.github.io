'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import ProjectVisual from '@/components/projects/ProjectVisual';
import { projects } from '@/data/content';
import { EvidenceTag, SectionHeading, StatusBadge } from '@/components/ui/Primitives';

export default function FeaturedWork() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="work" className="work-section section-shell" aria-labelledby="work-title">
      <SectionHeading
        label="SELECTED WORK // ENGINEERING EVIDENCE"
        title={<><span id="work-title">Different disciplines.</span><br /><em>One direction.</em></>}
        copy="These projects were built across different engineering domains, but together they form the foundation I am developing toward Agri-Robotics."
      />

      <div className="project-story-rail" aria-label="Project disciplines converge toward Agri-Robotics">
        <span>MECHANICAL / ROBOTICS</span><i />
        <span>ELECTRONICS / IoT</span><i />
        <span>SOFTWARE / AI</span><b>=</b>
        <strong>AGRI-ROBOTICS DIRECTION</strong>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => {
          const isExpanded = expanded === project.id;
          return (
            <motion.div
              key={project.id}
              initial={reduce ? false : { opacity: 0, y: 40 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12% 0px' }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
            >
              <SpotlightCard className={`project-spotlight ${isExpanded ? 'is-expanded' : ''}`} spotlightColor="rgba(0, 255, 102, 0.12)">
                <article className={`project-card project-card--${index + 1}`}>
                  <ProjectVisual project={project} />
                  <div className="project-card__content">
                    <div className="project-card__topline">
                      <span>PROJECT {project.number}</span>
                      <StatusBadge>{project.status}</StatusBadge>
                    </div>
                    <p className="project-card__category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <div className="project-card__problem">
                      <span>PROBLEM</span>
                      <p>{project.problem}</p>
                    </div>

                    <button
                      className="project-expand"
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={`project-details-${project.id}`}
                      onClick={() => setExpanded(isExpanded ? null : project.id)}
                    >
                      <span>{isExpanded ? 'Close evidence' : 'Explore evidence'}</span>
                      <ChevronDown size={17} aria-hidden="true" />
                    </button>

                    <AnimatePresence initial={false}>
                      <motion.div
                        id={`project-details-${project.id}`}
                        className="project-details"
                        initial={false}
                        animate={{ height: isExpanded ? 'auto' : undefined, opacity: isExpanded ? 1 : undefined }}
                        transition={{ duration: reduce ? 0 : 0.35 }}
                      >
                        <div className="project-details__grid">
                          <div>
                            <span>MY CONTRIBUTION</span>
                            <ul>{project.contribution.map(item => <li key={item}>{item}</li>)}</ul>
                          </div>
                          <div>
                            <span>OBSERVED RESULT</span>
                            <p>{project.result}</p>
                          </div>
                        </div>
                        <div className="project-stack">
                          <span>STACK</span>
                          <div>{project.stack.map(item => <EvidenceTag key={item}>{item}</EvidenceTag>)}</div>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <div className="project-card__footer">
                      <EvidenceTag>{project.visualLabel}</EvidenceTag>
                      <Link href={`/work/${project.id}`}>VIEW CASE STUDY <ArrowUpRight size={15} aria-hidden="true" /></Link>
                    </div>
                  </div>
                </article>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
