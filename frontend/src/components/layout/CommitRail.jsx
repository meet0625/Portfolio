import { useScrollProgress } from '../../hooks/useScrollProgress';

/**
 * Signature element: a vertical "commit history" rail fixed to the left edge
 * on wide screens. The filled portion tracks scroll progress, and a dot marks
 * the current position — evoking a git log graph running down the page.
 */
export default function CommitRail() {
  const progress = useScrollProgress();

  return (
    <div
      className="hidden lg:flex fixed left-6 top-0 h-screen w-6 z-40 flex-col items-center pointer-events-none"
      aria-hidden="true"
    >
      <div className="relative w-px h-full bg-border/70 mt-16 mb-16">
        <div
          className="absolute left-0 top-0 w-px bg-gradient-to-b from-accent to-amber transition-all duration-150"
          style={{ height: `${progress}%` }}
        />
        <div
          className="absolute -left-[5px] w-[11px] h-[11px] rounded-full bg-accent shadow-[0_0_10px_rgba(79,140,255,0.7)] transition-all duration-150"
          style={{ top: `${progress}%` }}
        />
      </div>
    </div>
  );
}
