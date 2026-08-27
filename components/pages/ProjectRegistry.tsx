'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Filter, Layers3 } from 'lucide-react';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import ProjectVisual from '@/components/projects/ProjectVisual';
import { EvidenceTag, StatusBadge } from '@/components/ui/Primitives';
import { projects } from '@/data/content';

const filters = [
  { id: 'ALL', label: 'ALL EVIDENCE' },
  { id: 'HARDWARE', label: 'HARDWARE / IoT' },
  { id: 'ROBOTICS', label: 'ROBOTICS' },
  { id: 'SOFTWARE', label: 'SOFTWARE / AI' }
];

const projectDomain: Record<string, string> = {
  'smart-irrigation': 'HARDWARE',
  'rescue-robotics': 'ROBOTICS',
  'book-detector': 'SOFTWARE'
};

export default function ProjectRegistry() {
  const [filter, setFilter] = useState('ALL');
  const visible = useMemo(
    () => projects.filter(project => filter === 'ALL' || projectDomain[project.id] === filter),
    [filter]
  );

  return (
    <section className="registry section-shell" aria-labelledby="registry-title">
      <div className="registry__toolbar">
        <div>
          <span><Layers3 size={14} /> PROJECT REGISTRY</span>
          <strong id="registry-title">{visible.length.toString().padStart(2, '0')} RECORDS VISIBLE</strong>
        </div>
        <div className="registry__filters" aria-label="Filter projects">
          <Filter size={14} aria-hidden="true" />
          {filters.map(item => (
            <button
              key={item.id}
              type="button"
              className={filter === item.id ? 'is-active' : ''}
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="registry__grid" aria-live="polite">
        {visible.map(project => (
          <SpotlightCard key={project.id} className="registry-card" spotlightColor="rgba(0, 255, 102, 0.1)">
            <article>
              <ProjectVisual project={project} compact />
              <div className="registry-card__body">
                <div className="registry-card__meta">
                  <span>PROJECT {project.number}</span>
                  <StatusBadge>{project.status}</StatusBadge>
                </div>
                <p>{project.category}</p>
                <h2>{project.title}</h2>
                <div className="registry-card__problem"><span>ENGINEERING PROBLEM</span><p>{project.problem}</p></div>
                <div className="registry-card__evidence">
                  <EvidenceTag>{project.visualLabel}</EvidenceTag>
                  <span>{project.evidence}</span>
                </div>
                <Link href={`/work/${project.id}`}>
                  <span>OPEN CASE STUDY</span><ArrowUpRight size={17} />
                </Link>
              </div>
            </article>
          </SpotlightCard>
        ))}
      </div>

      <div className="evidence-legend" aria-label="Visual evidence legend">
        <div><span>REAL BUILD</span><p>Physical work exists; replace placeholders with Smart&apos;s own photography.</p></div>
        <div><span>PROTOTYPE</span><p>Working test evidence, with version and operating limits shown.</p></div>
        <div><span>SOFTWARE TEST</span><p>Pipeline evidence without invented accuracy or deployment claims.</p></div>
        <div><span>VISION / CONCEPT</span><p>Future direction kept visually separate from completed work.</p></div>
      </div>
    </section>
  );
}
