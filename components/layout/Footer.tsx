import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>SMART_TECH</strong>
        <span>PERSONAL ENGINEERING LAB</span>
      </div>
      <p>BUILD → LEARN → ITERATE → AGRI-ROBOTICS</p>
      <div className="site-footer__right">
        <nav aria-label="Footer navigation">
          <Link href="/work">WORK</Link>
          <Link href="/lab">LAB</Link>
          <Link href="/knowledge">KNOWLEDGE</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>
        <span>SMART_TECH // 2026 // V0.01</span>
      </div>
    </footer>
  );
}
