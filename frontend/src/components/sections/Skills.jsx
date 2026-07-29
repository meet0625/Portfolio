import { skills } from '../../data/siteData';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-20 md:py-28 scroll-mt-16" aria-label="Skills">
      <div className="container-content">
        <div className="reveal" ref={ref}>
          <SectionHeading
            eyebrow="skills"
            title="Tools & technologies"
            description="What I reach for when building something end to end."
          />

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {skills.map((group) => (
              <div key={group.category} className="card p-6">
                <h3 className="font-display font-semibold text-text">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
