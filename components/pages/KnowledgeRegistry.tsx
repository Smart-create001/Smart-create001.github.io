'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, BookOpenText, Filter, FlaskConical, MapPinned, Search } from 'lucide-react';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import { EvidenceTag, StatusBadge } from '@/components/ui/Primitives';
import { knowledge } from '@/data/content';

const filters = ['ALL', 'FIELD NOTE', 'LEARNING NOTE', 'EXPERIMENT', 'RESEARCH NOTE'];
const icons = { 'FIELD NOTE': MapPinned, 'LEARNING NOTE': BookOpenText, EXPERIMENT: FlaskConical, 'RESEARCH NOTE': Search };

export default function KnowledgeRegistry() {
  const [filter, setFilter] = useState('ALL');
  const visible = useMemo(() => knowledge.filter(item => filter === 'ALL' || item.type === filter), [filter]);

  return (
    <section className="knowledge-registry section-shell" aria-labelledby="knowledge-registry-title">
      <div className="knowledge-registry__bar">
        <div><span>KNOWLEDGE RECORDS</span><strong id="knowledge-registry-title">{visible.length.toString().padStart(2, '0')} / {knowledge.length.toString().padStart(2, '0')}</strong></div>
        <div aria-label="Filter knowledge records"><Filter size={14} />{filters.map(item => <button key={item} type="button" onClick={() => setFilter(item)} aria-pressed={filter === item} className={filter === item ? 'is-active' : ''}>{item}</button>)}</div>
      </div>
      <div className="knowledge-registry__grid" aria-live="polite">
        {visible.map((item, index) => {
          const Icon = icons[item.type as keyof typeof icons];
          return (
            <SpotlightCard key={item.slug} className="knowledge-record" spotlightColor="rgba(0, 255, 102, 0.08)">
              <article>
                <div className="knowledge-record__top"><span>{(index + 1).toString().padStart(2, '0')} / {item.type}</span><Icon size={18} /></div>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
                <blockquote>{item.question}</blockquote>
                <div className="knowledge-record__state"><StatusBadge tone="neutral">{item.status}</StatusBadge><EvidenceTag>{item.evidence}</EvidenceTag></div>
                <Link href={`/knowledge/${item.slug}`}>OPEN RECORD <ArrowUpRight size={15} /></Link>
              </article>
            </SpotlightCard>
          );
        })}
      </div>
      <div className="knowledge-method">
        <span>KNOWLEDGE METHOD // V0.01</span>
        <div><strong>01 / SOURCE OR OBSERVATION</strong><p>What triggered the note?</p></div>
        <div><strong>02 / INTERPRETATION</strong><p>What do I currently think it means?</p></div>
        <div><strong>03 / EVIDENCE LIMIT</strong><p>What does this note not prove?</p></div>
        <div><strong>04 / NEXT ACTION</strong><p>What would create stronger evidence?</p></div>
      </div>
    </section>
  );
}
