import { useState } from 'react';
import { profile } from '../../data/siteData';
import SectionHeading from '../ui/SectionHeading';
import SocialLinks from '../ui/SocialLinks';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || '';

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!values.message.trim()) errors.message = 'Enter a message.';
  return errors;
}

export default function Contact() {
  const ref = useScrollReveal();
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (!FORM_ENDPOINT) {
      // No backend configured: fall back to opening the user's mail client.
      const subject = encodeURIComponent(`Portfolio contact from ${values.name}`);
      const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus('sent');
      return;
    }

    try {
      setStatus('sending');
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      setValues({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 scroll-mt-16" aria-label="Contact">
      <div className="container-content">
        <div className="reveal grid lg:grid-cols-2 gap-12" ref={ref}>
          <div>
            <SectionHeading
              eyebrow="contact"
              title="Let's build something"
              description="Have a role, project, or just want to say hi? My inbox is open."
            />

            <dl className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <dt className="sr-only">Email</dt>
                <dd>
                  <a href={`mailto:${profile.email}`} className="text-text hover:text-accent transition-colors">
                    {profile.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-center gap-3">
                <dt className="sr-only">Phone</dt>
                <dd>
                  <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="text-text hover:text-accent transition-colors">
                    {profile.phone}
                  </a>
                </dd>
              </div>
            </dl>

            <SocialLinks className="mt-8" />
          </div>

          <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8 space-y-5" aria-label="Contact form">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className="w-full bg-surface-alt border border-border rounded-lg px-4 py-2.5 text-text
                  placeholder:text-muted/60 focus:border-accent transition-colors"
                placeholder="Your name"
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-sm text-amber">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className="w-full bg-surface-alt border border-border rounded-lg px-4 py-2.5 text-text
                  placeholder:text-muted/60 focus:border-accent transition-colors"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-sm text-amber">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="w-full bg-surface-alt border border-border rounded-lg px-4 py-2.5 text-text
                  placeholder:text-muted/60 focus:border-accent transition-colors resize-none"
                placeholder="What's on your mind?"
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-sm text-amber">
                  {errors.message}
                </p>
              )}
            </div>

            <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center">
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            <p role="status" aria-live="polite" className="text-sm text-muted min-h-[1.25rem]">
              {status === 'sent' && 'Thanks — your message client should have opened. I\u2019ll reply soon.'}
              {status === 'error' && 'Something went wrong sending that. Please email me directly instead.'}
            </p>

            {!FORM_ENDPOINT && (
              <p className="text-xs text-muted/70">
                This form currently opens your email client. Set{' '}
                <code className="font-mono">VITE_FORM_ENDPOINT</code> to connect a real backend (e.g. Formspree).
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
