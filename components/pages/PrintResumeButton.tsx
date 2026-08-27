'use client';

import { Download, Printer } from 'lucide-react';

export default function PrintResumeButton() {
  return (
    <button className="resume-print" type="button" onClick={() => window.print()}>
      <Printer size={16} /><span>PRINT / SAVE PDF</span><Download size={15} />
    </button>
  );
}
