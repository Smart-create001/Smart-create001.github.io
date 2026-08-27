import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CircleDot, MoveRight } from 'lucide-react';
import { EvidenceTag, StatusBadge } from '@/components/ui/Primitives';
import { knowledge, projects } from '@/data/content';

export function generateStaticParams() {
  return knowledge.map(item => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = knowledge.find(item => item.slug === slug);
  if (!entry) return { title: 'Knowledge record not found' };
  return {
    title: entry.title,
    description: entry.summary,
    openGraph: { title: `${entry.title} — SMART_TECH`, description: entry.summary, images: [] },
    twitter: { title: `${entry.title} — SMART_TECH`, description: entry.summary, images: [] }
  };
}

export default async function KnowledgeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = knowledge.find(item => item.slug === slug);
  if (!entry) notFound();
  const related = projects.filter(project => entry.relatedProjects.includes(project.id));

  return (
    <main id="main-content" className="note-page">
      <article className="note-shell section-shell">
        <header className="note-header">
          <Link href="/knowledge"><ArrowLeft size={14} /> ALL KNOWLEDGE</Link>
          <div className="note-header__meta"><span>{entry.type}</span><StatusBadge tone="neutral">{entry.status}</StatusBadge><EvidenceTag>{entry.evidence}</EvidenceTag></div>
          <h1>{entry.title}</h1>
          <p>{entry.summary}</p>
        </header>

        <div className="note-question">
          <span>PRIMARY QUESTION</span>
          <blockquote>{entry.question}</blockquote>
          <small>OPEN / REQUIRES MORE EVIDENCE</small>
        </div>

        <div className="note-grid">
          <aside>
            <span>RECORD STATE</span>
            <dl><div><dt>TYPE</dt><dd>{entry.type}</dd></div><div><dt>STATUS</dt><dd>{entry.status}</dd></div><div><dt>EVIDENCE</dt><dd>{entry.evidence}</dd></div><div><dt>VERSION</dt><dd>0.01 / WORKING NOTE</dd></div></dl>
          </aside>
          <div className="note-body">
            {entry.source ? <section><span>SOURCE SAYS</span><p>{entry.source}</p></section> : null}
            {entry.interpretation ? <section><span>MY CURRENT INTERPRETATION</span><p>{entry.interpretation}</p></section> : null}
            <section><span>OBSERVATIONS / CURRENT</span><ul>{entry.observations.map(item => <li key={item}><CircleDot size={13} />{item}</li>)}</ul></section>
            <section className="note-next"><span>NEXT ACTION</span><p>{entry.nextAction}</p><MoveRight size={20} /></section>
            <section className="note-limit"><span>INTEGRITY NOTE</span><p>This record documents current understanding. It should not be read as a validated field conclusion unless stronger evidence is added later.</p></section>
          </div>
        </div>
      </article>

      <section className="note-related section-shell">
        <span>RELATED ENGINEERING EVIDENCE</span>
        <div>{related.map(project => <Link key={project.id} href={`/work/${project.id}`}><small>{project.category}</small><strong>{project.title}</strong><span>OPEN PROJECT <ArrowUpRight size={14} /></span></Link>)}</div>
      </section>
    </main>
  );
}
