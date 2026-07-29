import { profile } from '../../data/siteData';
import { useTypewriter } from '../../hooks/useTypewriter';
import SocialLinks from '../ui/SocialLinks';

function CommitGraph() {
  return (
    <svg
      viewBox="0 0 360 360"
      className="w-full max-w-sm mx-auto"
      role="img"
      aria-label="Illustration of a branching commit graph"
    >
      <g fill="none" strokeWidth="2">
        <path
          d="M60 30 V150 M60 150 C60 190 100 190 100 230 V330"
          stroke="#232838"
          className="animate-draw-line"
          style={{ strokeDasharray: 1000 }}
        />
        <path
          d="M60 150 C60 190 20 190 20 230 V300"
          stroke="#232838"
          className="animate-draw-line"
          style={{ strokeDasharray: 1000, animationDelay: '0.3s' }}
        />
        <path
          d="M100 230 C100 190 180 190 180 150 V60"
          stroke="#232838"
          className="animate-draw-line"
          style={{ strokeDasharray: 1000, animationDelay: '0.6s' }}
        />
      </g>

      {[
        { cx: 60, cy: 30, color: '#4F8CFF', delay: '0s' },
        { cx: 60, cy: 150, color: '#4F8CFF', delay: '0.3s' },
        { cx: 20, cy: 230, color: '#F5A623', delay: '0.5s' },
        { cx: 20, cy: 300, color: '#3FB950', delay: '0.7s' },
        { cx: 100, cy: 230, color: '#4F8CFF', delay: '0.6s' },
        { cx: 100, cy: 330, color: '#3FB950', delay: '0.9s' },
        { cx: 180, cy: 150, color: '#F5A623', delay: '0.8s' },
        { cx: 180, cy: 60, color: '#4F8CFF', delay: '1.1s' },
      ].map((n, i) => (
        <circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r="7"
          fill={n.color}
          className="animate-fade-up"
          style={{ animationDelay: n.delay, opacity: 0 }}
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      aria-label="Introduction"
    >
      <div className="container-content grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="eyebrow">whoami</p>

          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-tight mt-3 text-text">
            {profile.name}
          </h1>

          <div className="mt-4 h-8 flex items-center">
            <span className="font-mono text-accent text-lg">$</span>
            <span className="font-mono text-lg text-text ml-2">{typed}</span>
            <span className="w-2.5 h-6 bg-accent ml-1 animate-blink" aria-hidden="true" />
          </div>

          <p className="mt-6 text-muted text-lg max-w-md">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary"
            >
              Get in Touch
            </a>
          </div>

          <SocialLinks className="mt-8" />
        </div>

        <div className="hidden md:block" aria-hidden="true">
          <CommitGraph />
        </div>
      </div>
    </section>
  );
}
