import type { Metadata } from 'next';
import RouteIntro from '@/components/layout/RouteIntro';
import KnowledgeRegistry from '@/components/pages/KnowledgeRegistry';

export const metadata: Metadata = {
  title: 'Knowledge Lab',
  description: 'Field notes, learning maps, experiments and research questions from SMART_TECH.'
};

export default function KnowledgePage() {
  return (
    <main id="main-content" className="route-page">
      <RouteIntro
        eyebrow="FROM THE LAB // KNOWLEDGE"
        title="Learning becomes"
        accent="traceable."
        copy="Notes are not presented as finished expertise. Each record shows its question, maturity, evidence boundary and next action."
        meta={['FIELD NOTES', 'EXPERIMENTS', 'RESEARCH QUESTIONS']}
      />
      <KnowledgeRegistry />
    </main>
  );
}
