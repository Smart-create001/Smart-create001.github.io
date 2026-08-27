import type { Metadata } from 'next';
import RouteIntro from '@/components/layout/RouteIntro';
import ContactWorkspace from '@/components/pages/ContactWorkspace';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a conversation with Smart about Agri-Robotics, engineering, research or collaboration.'
};

export default function ContactPage() {
  return (
    <main id="main-content" className="route-page contact-route">
      <RouteIntro
        eyebrow="CONTACT // START A CONVERSATION"
        title="Build something"
        accent="useful."
        copy="A direct, human ending to the engineering record—open to practical work, research and conversations around intelligent machines for agriculture."
        meta={['INTERNSHIPS', 'RESEARCH', 'ENGINEERING COLLABORATION']}
      />
      <ContactWorkspace />
    </main>
  );
}
