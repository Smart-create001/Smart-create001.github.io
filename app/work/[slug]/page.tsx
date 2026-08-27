import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CheckCircle2, CircleDotDashed, GitBranch, MoveRight } from 'lucide-react';
import ProjectVisual from '@/components/projects/ProjectVisual';
import { EvidenceTag, StatusBadge } from '@/components/ui/Primitives';
import { projects } from '@/data/content';

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.id === slug);
  if (!project) return { title: 'Project not found' };
  return {
    title: project.title,
    description: `${project.category}. ${project.summary}`,
    openGraph: { title: `${project.title} — SMART_TECH`, description: project.summary, images: [] },
    twitter: { title: `${project.title} — SMART_TECH`, description: project.summary, images: [] }
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(item => item.id === slug);
  if (!project) notFound();
  const related = projects.filter(item => item.id !== project.id);

  return (
    <main id="main-content" className="case-page">
      <header className="case-hero section-shell">
        <div className="case-hero__nav">
          <Link href="/work"><ArrowLeft size={14} /> ALL PROJECTS</Link>
          <span>CASE STUDY // {project.number} / 03</span>
        </div>
        <div className="case-hero__grid">
          <div className="case-hero__copy">
            <div className="case-hero__badges"><StatusBadge>{project.status}</StatusBadge><EvidenceTag>{project.visualLabel}</EvidenceTag></div>
            <p>{project.category}</p>
            <h1>{project.title}</h1>
            <strong>{project.summary}</strong>
          </div>
          <dl className="case-hero__facts">
            <div><dt>ROLE</dt><dd>{project.role}</dd></div>
            <div><dt>EVIDENCE</dt><dd>{project.evidence}</dd></div>
            <div><dt>CLAIM LIMIT</dt><dd>No metrics are shown without verified measurement.</dd></div>
          </dl>
        </div>
      </header>

      <section className="case-visual section-shell">
        <ProjectVisual project={project} />
      </section>

      <section className="case-narrative section-shell">
        <aside className="case-index">
          <span>CASE INDEX</span>
          <a href="#objective">01 / OBJECTIVE</a>
          <a href="#system">02 / SYSTEM</a>
          <a href="#decisions">03 / DECISIONS</a>
          <a href="#evidence">04 / EVIDENCE</a>
          <a href="#learning">05 / LEARNING</a>
        </aside>
        <div className="case-content">
          <article id="objective" className="case-block case-block--lead">
            <span>01 // ENGINEERING OBJECTIVE</span>
            <h2>Build the capability.<br /><em>Keep the claim honest.</em></h2>
            <p>{project.objective}</p>
            <div className="case-problem"><span>PROBLEM FRAME</span><strong>{project.problem}</strong></div>
          </article>

          <article id="system" className="case-block">
            <span>02 // SYSTEM ARCHITECTURE</span>
            <h2>How the build fits together.</h2>
            <div className="system-chain">
              {project.system.map((item, index) => (
                <div key={item.label}>
                  <small>0{index + 1}</small><i /><strong>{item.label}</strong><p>{item.detail}</p>
                  {index < project.system.length - 1 ? <MoveRight size={17} /> : null}
                </div>
              ))}
            </div>
            <div className="case-contribution">
              <span>MY CONTRIBUTION</span>
              <div>{project.contribution.map(item => <EvidenceTag key={item}>{item}</EvidenceTag>)}</div>
            </div>
          </article>

          <article id="decisions" className="case-block">
            <span>03 // ENGINEERING DECISIONS</span>
            <h2>Decisions with a reason.</h2>
            <div className="decision-grid">
              {project.decisions.map((item, index) => (
                <div key={item.title}><small>DECISION 0{index + 1}</small><GitBranch size={18} /><h3>{item.title}</h3><p>{item.detail}</p></div>
              ))}
            </div>
          </article>

          <article id="evidence" className="case-block">
            <span>04 // CLAIM / EVIDENCE MATRIX</span>
            <h2>What the evidence supports.</h2>
            <div className="evidence-table" role="table" aria-label="Project claim and evidence matrix">
              <div role="row" className="evidence-table__head"><span role="columnheader">CLAIM</span><span role="columnheader">CURRENT SUPPORT</span><span role="columnheader">STRENGTH</span></div>
              {project.evidenceItems.map(item => (
                <div role="row" key={item.claim}><strong role="cell">{item.claim}</strong><p role="cell">{item.support}</p><span role="cell"><CircleDotDashed size={13} />{item.strength}</span></div>
              ))}
            </div>
            <p className="evidence-note"><CheckCircle2 size={16} /> Result recorded: {project.result}</p>
          </article>

          <article id="learning" className="case-block">
            <span>05 // LEARNING &amp; NEXT ITERATION</span>
            <h2>The build continues.</h2>
            <div className="learning-grid">
              <div><span>WHAT THIS BUILD TAUGHT ME</span><ul>{project.lessons.map(item => <li key={item}>{item}</li>)}</ul></div>
              <div><span>NEXT EVIDENCE TO CREATE</span><ol>{project.nextSteps.map(item => <li key={item}>{item}</li>)}</ol></div>
            </div>
          </article>
        </div>
      </section>

      <section className="related-work section-shell">
        <div><span>CONTINUE THE SYSTEM</span><h2>Other evidence.</h2></div>
        <div className="related-work__grid">
          {related.map(item => (
            <Link href={`/work/${item.id}`} key={item.id}>
              <span>PROJECT {item.number} / {item.category}</span><strong>{item.title}</strong><small>VIEW CASE STUDY <ArrowUpRight size={14} /></small>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
