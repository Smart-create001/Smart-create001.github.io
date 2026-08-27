'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'WORK', href: '/work' },
  { label: 'LAB', href: '/lab' },
  { label: 'KNOWLEDGE', href: '/knowledge' },
  { label: 'ABOUT', href: '/about' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const active = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-nav-wrap">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link className="brand-mark" href="/" onClick={() => setOpen(false)} aria-label="SMART_TECH home">
          <span>SMART_TECH</span>
          <span className="brand-mark__light" aria-hidden="true" />
          <small>0.01</small>
        </Link>

        <div className="site-nav__center" aria-label="Page sections">
          {navItems.map(item => (
            <Link key={item.href} className={active(item.href) ? 'is-active' : ''} href={item.href} aria-current={active(item.href) ? 'page' : undefined}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="site-nav__right">
          <Link className={active('/resume') ? 'is-active' : ''} href="/resume">RESUME</Link>
          <Link className={active('/contact') ? 'is-active' : ''} href="/contact">CONTACT</Link>
        </div>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen(value => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div id="mobile-navigation" className={`mobile-nav ${open ? 'is-open' : ''}`}>
        {navItems.map(item => (
          <Link key={item.href} className={active(item.href) ? 'is-active' : ''} href={item.href} onClick={() => setOpen(false)}>
            <span>{item.label}</span>
            <span>↘</span>
          </Link>
        ))}
        <Link href="/resume" onClick={() => setOpen(false)}><span>RESUME</span><span>↘</span></Link>
        <Link href="/contact" onClick={() => setOpen(false)}><span>CONTACT</span><span>↘</span></Link>
      </div>
    </header>
  );
}
