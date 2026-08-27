import { Cpu, Droplets, ScanLine } from 'lucide-react';
import type { Project } from '@/data/content';

export default function ProjectVisual({
  project,
  compact = false
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <div
      className={`project-visual project-visual--${project.visualType} ${compact ? 'project-visual--compact' : ''}`}
      aria-label={`${project.title} technical visual placeholder`}
    >
      <div className="project-visual__meta">
        <span>{project.visualLabel}</span>
        <span>VISUAL PLACEHOLDER / REPLACE WITH REAL EVIDENCE</span>
      </div>
      {project.visualType === 'irrigation' ? (
        <div className="irrigation-diagram" aria-hidden="true">
          <span className="tank"><i /></span>
          <span className="pipe pipe--one" />
          <span className="pipe pipe--two" />
          <span className="valve valve--one" />
          <span className="valve valve--two" />
          <span className="field-row field-row--one" />
          <span className="field-row field-row--two" />
          <span className="field-row field-row--three" />
          <span className="telemetry"><Droplets size={20} /><b>FLOW ACTIVE</b><small>REMOTE CONTROL</small></span>
        </div>
      ) : null}
      {project.visualType === 'robotics' ? (
        <div className="robot-diagram" aria-hidden="true">
          <span className="robot-wheel robot-wheel--a" />
          <span className="robot-wheel robot-wheel--b" />
          <span className="robot-chassis"><i /><b /></span>
          <span className="robot-arm"><i /></span>
          <span className="robot-dimension robot-dimension--x">CHASSIS / TEST UNIT</span>
          <span className="robot-dimension robot-dimension--y">V0.3</span>
          <span className="robot-chip"><Cpu size={18} /><small>MOTOR CONTROL</small></span>
        </div>
      ) : null}
      {project.visualType === 'vision' ? (
        <div className="vision-diagram" aria-hidden="true">
          <span className="vision-book vision-book--one" />
          <span className="vision-book vision-book--two" />
          <span className="vision-box"><b>BOOK</b><small>TEST DETECTION</small></span>
          <span className="vision-scan" />
          <span className="vision-console"><ScanLine size={19} /><b>PIPELINE RUNNING</b><small>NO ACCURACY CLAIMED</small></span>
        </div>
      ) : null}
      <div className="project-visual__caption">
        <span>Replace with Smart&apos;s real workshop / field evidence</span>
        <span>{project.evidence}</span>
      </div>
    </div>
  );
}
