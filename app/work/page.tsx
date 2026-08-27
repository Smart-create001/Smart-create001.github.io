import type { Metadata } from 'next';
import RouteIntro from '@/components/layout/RouteIntro';
import ProjectRegistry from '@/components/pages/ProjectRegistry';

export const metadata: Metadata = {
  title: 'Engineering Work',
  description: 'Real builds, tested prototypes and software experiments forming Smart’s foundation toward Agri-Robotics.'
};

export default function WorkPage() {
  return (
    <main id="main-content" className="route-page">
      <RouteIntro
        eyebrow="SELECTED WORK // ENGINEERING EVIDENCE"
        title="Different disciplines."
        accent="One direction."
        copy="Three projects across physical machines, connected control and machine perception—presented with claims limited to the evidence currently available."
        meta={['03 PROJECTS', 'REAL BUILD → TESTING', 'AGRI-ROBOTICS FOUNDATION']}
      />
      <ProjectRegistry />
    </main>
  );
}
