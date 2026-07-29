import { projects } from '../../data/siteData';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import { useScrollReveal } from '../../hooks/useScrollReveal';

function ProjectCard({ project }) {
  return (
    <article className="card p-6 flex flex-col h-full group">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display font-semibold text-lg text-text">{project.title}</h3>
        {project.featured && (
          <span className="font-mono text-[10px] uppercase tracking-wide text-amber border border-amber/30 rounded px-1.5 py-0.5 shrink-0">
            Featured
          </span>
        )}
      </div>

      <p className="mt-3 text-muted text-sm leading-relaxed flex-1">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <Badge key={s}>{s}</Badge>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-text hover:text-accent transition-colors inline-flex items-center gap-1.5"
        >
          Code
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            Live demo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-20 md:py-28 scroll-mt-16" aria-label="Projects">
      <div className="container-content">
        <div className="reveal" ref={ref}>
          <SectionHeading
            eyebrow="projects"
            title="Selected work"
            description="A few things I've built. Swap these in src/data/siteData.js with real projects and links."
          />

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
