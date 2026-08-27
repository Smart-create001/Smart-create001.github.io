import Link from 'next/link';
import { ArrowLeft, MoveDownRight } from 'lucide-react';
import DecryptedText from '@/components/reactbits/DecryptedText';

export default function RouteIntro({
  eyebrow,
  title,
  accent,
  copy,
  meta,
  backHref,
  backLabel
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  copy: string;
  meta: string[];
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <header className="route-intro section-shell">
      <div className="route-intro__grid" aria-hidden="true" />
      <div className="route-intro__topline">
        {backHref ? (
          <Link href={backHref}><ArrowLeft size={14} /> {backLabel ?? 'BACK'}</Link>
        ) : (
          <span>SMART_TECH // FULL VERSION 0.01</span>
        )}
        <span>ENGINEERING RECORD / 2026</span>
      </div>
      <div className="route-intro__content">
        <div>
          <p className="route-intro__eyebrow"><i />{eyebrow}</p>
          <h1>
            <span>{title}</span>
            {accent ? <em><DecryptedText text={accent} animateOn="view" sequential speed={28} maxIterations={12} /></em> : null}
          </h1>
        </div>
        <div className="route-intro__aside">
          <p>{copy}</p>
          <div>{meta.map(item => <span key={item}>{item}</span>)}</div>
        </div>
      </div>
      <div className="route-intro__cue"><span>EXPLORE THE RECORD</span><MoveDownRight size={16} /></div>
    </header>
  );
}
