'use client';

import { FormEvent, useMemo, useState } from 'react';
import { Check, Code2, Copy, Mail, MoveRight, Network, Wrench } from 'lucide-react';
import Magnet from '@/components/reactbits/Magnet';
import { profile } from '@/data/profile';

export default function ContactWorkspace() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [area, setArea] = useState('ENGINEERING COLLABORATION');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const configured = Boolean(profile.email);

  const payload = useMemo(
    () => `SMART_TECH contact\n\nName: ${name || '—'}\nEmail: ${email || '—'}\nArea: ${area}\n\n${message || '—'}`,
    [area, email, message, name]
  );

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (configured) {
      const subject = encodeURIComponent(`[SMART_TECH] ${area}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${encodeURIComponent(payload)}`;
      setStatus('Opening your email application.');
      return;
    }
    try {
      await navigator.clipboard.writeText(payload);
      setStatus('Message copied. Add Smart’s real email in data/profile.ts to enable direct email.');
    } catch {
      setStatus('Message is ready. Add Smart’s real email in data/profile.ts to enable direct email.');
    }
  };

  const social = [
    { label: 'EMAIL', value: profile.email, icon: Mail },
    { label: 'LINKEDIN', value: profile.linkedIn, icon: Network },
    { label: 'GITHUB', value: profile.github, icon: Code2 }
  ];

  return (
    <section className="contact-workspace section-shell" aria-labelledby="contact-workspace-title">
      <div className="contact-workspace__status"><span>SYSTEM STATUS</span><strong><i /> OPEN TO OPPORTUNITIES</strong><small>CONTACT MODULE / V0.01</small></div>
      <div className="contact-workspace__grid">
        <div className="contact-workspace__copy">
          <span>START A CONVERSATION</span>
          <h2 id="contact-workspace-title">Let&apos;s build<br /><em>something useful.</em></h2>
          <p>Open to internships, research, engineering collaborations, and conversations around Agri-Robotics, Robotics, Smart Agriculture and intelligent machines.</p>
          <div className="contact-channels">
            {social.map(item => {
              const Icon = item.icon;
              return item.value ? (
                <a href={item.label === 'EMAIL' ? `mailto:${item.value}` : item.value} key={item.label} target={item.label === 'EMAIL' ? undefined : '_blank'} rel="noreferrer">
                  <Icon size={17} /><span>{item.label}</span><strong>{item.value}</strong><MoveRight size={15} />
                </a>
              ) : (
                <div key={item.label} className="is-unconfigured"><Icon size={17} /><span>{item.label}</span><strong>ADD REAL LINK</strong><Wrench size={14} /></div>
              );
            })}
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <div className="contact-form__top"><span>MESSAGE COMPOSER</span><span>{configured ? 'EMAIL READY' : 'LOCAL COPY MODE'}</span></div>
          <label><span>YOUR NAME</span><input value={name} onChange={event => setName(event.target.value)} placeholder="Name" autoComplete="name" required /></label>
          <label><span>YOUR EMAIL</span><input type="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="you@example.com" autoComplete="email" required /></label>
          <label><span>AREA</span><select value={area} onChange={event => setArea(event.target.value)}>{profile.availability.map(item => <option key={item} value={item.toUpperCase()}>{item}</option>)}</select></label>
          <label><span>MESSAGE</span><textarea value={message} onChange={event => setMessage(event.target.value)} placeholder="Tell Smart about the problem, project or opportunity." rows={7} required /></label>
          <Magnet padding={28} magnetStrength={9} wrapperClassName="contact-form__magnet">
            <button type="submit">{configured ? <Mail size={17} /> : <Copy size={17} />}<span>{configured ? 'OPEN EMAIL' : 'COPY MESSAGE'}</span><MoveRight size={16} /></button>
          </Magnet>
          <p className="contact-form__integrity"><Check size={14} /> This prototype sends no data to a server. Direct email activates after Smart adds a real address.</p>
          {status ? <div className="contact-form__status" role="status">{status}</div> : null}
        </form>
      </div>
    </section>
  );
}
