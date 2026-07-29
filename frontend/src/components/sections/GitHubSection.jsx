import { profile } from '../../data/siteData';
import SectionHeading from '../ui/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function GitHubSection() {
  const ref = useScrollReveal();
  const { githubUsername } = profile;

  return (
    <section id="github" className="py-20 md:py-28 scroll-mt-16" aria-label="GitHub activity">
      <div className="container-content">
        <div className="reveal" ref={ref}>
          <SectionHeading
            eyebrow="github"
            title="Commit history"
            description="A live look at recent activity, pulled straight from GitHub."
          />

          <div className="mt-10 card p-6 overflow-x-auto">
            <img
              src={`https://ghchart.rshah.org/4F8CFF/${githubUsername}`}
              alt={`GitHub contribution graph for ${githubUsername}`}
              className="w-full min-w-[640px]"
              loading="lazy"
            />
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-5">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark&bg_color=12151C&title_color=4F8CFF&icon_color=F5A623&text_color=8B93A7&border_color=232838&hide_border=false`}
              alt={`GitHub stats for ${githubUsername}`}
              className="w-full rounded-xl"
              loading="lazy"
            />
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=dark&bg_color=12151C&title_color=4F8CFF&text_color=8B93A7&border_color=232838&hide_border=false`}
              alt={`Most used languages for ${githubUsername}`}
              className="w-full rounded-xl"
              loading="lazy"
            />
          </div>

          <div className="mt-8">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              View full profile on GitHub
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
