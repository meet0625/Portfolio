import { profile } from '../../data/siteData';
import SocialLinks from '../ui/SocialLinks';

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container-content py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-mono text-sm text-muted">
            <span className="text-accent">$</span> echo &quot;built by {profile.name}&quot;
          </p>
          <p className="text-xs text-muted/70 mt-1">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
