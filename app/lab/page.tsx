import type { Metadata } from 'next';
import RouteIntro from '@/components/layout/RouteIntro';
import LabProcess from '@/components/sections/LabProcess';
import ExperimentRegister from '@/components/pages/ExperimentRegister';

export const metadata: Metadata = {
  title: 'Engineering Lab',
  description: 'Current builds, experiments, failure evidence and build-driven learning at SMART_TECH.'
};

export default function LabPage() {
  return (
    <main id="main-content" className="route-page lab-route">
      <RouteIntro
        eyebrow="LAB STATUS // BUILDING IN PUBLIC"
        title="The work is"
        accent="still moving."
        copy="A live engineering workspace for current builds, unresolved questions, observed failures and the next evidence to create."
        meta={['BUILDING', 'LEARNING', 'RESEARCHING']}
      />
      <LabProcess />
      <ExperimentRegister />
    </main>
  );
}
