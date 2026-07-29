import { about } from '../../data/siteData';
import SectionHeading from '../ui/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-20 md:py-28 scroll-mt-16" aria-label="About me">
      <div className="container-content">
        <div className="reveal grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-start" ref={ref}>
          <div>
            <SectionHeading eyebrow="about" title="A bit about me" />
            <div className="mt-6 space-y-4 text-muted leading-relaxed">
              {about.summary.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <dl className="card p-6 grid grid-cols-2 gap-6">
            {about.highlights.map((h) => (
              <div key={h.label}>
                <dt className="font-mono text-xs text-muted uppercase tracking-wide">{h.label}</dt>
                <dd className="mt-1.5 text-text font-medium">{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
