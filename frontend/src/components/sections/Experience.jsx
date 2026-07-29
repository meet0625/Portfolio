import { experience } from '../../data/siteData';
import SectionHeading from '../ui/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-20 md:py-28 scroll-mt-16" aria-label="Experience">
      <div className="container-content">
        <div className="reveal" ref={ref}>
          <SectionHeading eyebrow="experience" title="Where I've worked" />

          <ol className="mt-10 relative border-l border-border pl-8 space-y-10">
            {experience.map((item) => (
              <li key={`${item.role}-${item.org}`} className="relative">
                <span
                  className="absolute -left-[35px] top-1.5 w-3 h-3 rounded-full bg-accent
                    shadow-[0_0_0_4px_rgba(79,140,255,0.15)]"
                  aria-hidden="true"
                />
                <p className="font-mono text-xs text-amber">{item.period}</p>
                <h3 className="font-display font-semibold text-lg text-text mt-1">
                  {item.role} <span className="text-muted font-body font-normal">— {item.org}</span>
                </h3>
                <ul className="mt-3 space-y-1.5 text-muted text-sm leading-relaxed list-disc list-inside">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
