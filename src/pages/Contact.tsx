import { useState } from 'react';
import {
  MessageSquare, Mail, Send, Heart, Lightbulb, Bug, ArrowRight,
  CheckCircle2, Sparkles, Clock, MapPin, BookOpen, AlertTriangle,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import FeatureGrid from '../components/sections/FeatureGrid';
import FaqAccordion from '../components/FaqAccordion';
import CtaBanner from '../components/CtaBanner';

const feedbackTypes = [
  { icon: Lightbulb, title: 'Feature idea', description: 'Suggest a feature you would love to see in the next version of the platform.' },
  { icon: Bug, title: 'Report an issue', description: 'Spotted something broken, confusing or outdated? Let the team know.' },
  { icon: Heart, title: 'General feedback', description: 'Share what is working well and what could be better for future releases.' },
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@vitchennai-hub (placeholder)', hint: 'Reach the student team directly' },
  { icon: Clock, label: 'Response time', value: 'Usually within a week', hint: 'During the active semester' },
  { icon: MapPin, label: 'Location', value: 'VIT Chennai, Vandalur–Kelambakkam Road', hint: 'Where we are based' },
];

const faqs = [
  { q: 'Is this an official VIT platform?', a: 'No — this is an unofficial, student-built platform. It is not affiliated with or endorsed by VIT.' },
  { q: 'Do I need to log in to use it?', a: 'No. Version 1 has no login, no tracking and no data collection. Just open and explore.' },
  { q: 'Where does my data go?', a: 'Nowhere. Bookmarks and checklist progress are saved only in your browser. No data leaves your device.' },
  { q: 'How can I contribute?', a: 'Use the forms on this page to suggest resources, report issues or share feedback. More contribution options will arrive soon.' },
  { q: 'When will real content arrive?', a: 'Version 1 is the foundation. Real content, live data and interactive features are planned for upcoming releases.' },
];

const inputCls =
  'w-full rounded-xl border border-ink-200 bg-white/70 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100';

function Field({ label, placeholder, type = 'text' }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-[13px] font-medium text-ink-700">{label}</label>
      <input type={type} placeholder={placeholder} className={inputCls} />
    </div>
  );
}

function useFakeSubmit() {
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  return { sent, submit };
}

function SuccessMessage() {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-accent-200 bg-accent-50 px-4 py-3 text-[13px] font-medium text-accent-700">
      <CheckCircle2 className="h-4 w-4 flex-none" />
      Thank you! Your message has been queued. A team member will respond soon.
    </div>
  );
}

function FeedbackForm() {
  const { sent, submit } = useFakeSubmit();
  return (
    <form onSubmit={submit} className="rounded-3xl glass-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" placeholder="Ada Lovelace" />
        <Field label="Email (optional)" placeholder="you@vitstudent.ac.in" type="email" />
      </div>
      <div className="mt-5">
        <label className="mb-1.5 block text-[13px] font-medium text-ink-700">Subject</label>
        <input className={inputCls} placeholder="What is this about?" />
      </div>
      <div className="mt-5">
        <label className="mb-1.5 block text-[13px] font-medium text-ink-700">Message</label>
        <textarea rows={5} className={`${inputCls} resize-none`} placeholder="Write your message…" />
      </div>
      {sent && <div className="mt-5"><SuccessMessage /></div>}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[12px] text-ink-500">No login. No tracking. No data stored in V1.</p>
        <button type="submit" className="btn-primary">
          {sent ? (
            <>
              <CheckCircle2 className="h-4 w-4 text-accent-400" /> Sent
            </>
          ) : (
            <>
              Send message
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function ResourceForm() {
  const { sent, submit } = useFakeSubmit();
  return (
    <form onSubmit={submit} className="sheen-host rounded-3xl glass-card p-6 sm:p-8">
      <div className="flex items-center gap-2.5">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-900 text-white shadow-glow">
          <BookOpen className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-display text-lg font-semibold tracking-tight text-ink-900">Suggest a resource</h3>
          <p className="text-[12px] text-ink-500">UI only · nothing is stored</p>
        </div>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Resource title" placeholder="e.g. DBMS cheat sheet" />
        <div>
          <label className="mb-1.5 block text-[13px] font-medium text-ink-700">Category</label>
          <select className={inputCls} defaultValue="">
            <option value="" disabled>Select a category</option>
            <option>Notes</option>
            <option>Book</option>
            <option>Video</option>
            <option>Tool</option>
            <option>Link</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <Field label="Link (optional)" placeholder="https://…" type="url" />
      </div>
      <div className="mt-5">
        <label className="mb-1.5 block text-[13px] font-medium text-ink-700">Why is it useful?</label>
        <textarea rows={4} className={`${inputCls} resize-none`} placeholder="A short note for the team…" />
      </div>
      {sent && <div className="mt-5"><SuccessMessage /></div>}
      <div className="mt-6 flex items-center justify-end">
        <button type="submit" className="btn-primary">
          {sent ? (
            <>
              <CheckCircle2 className="h-4 w-4 text-accent-400" /> Submitted
            </>
          ) : (
            <>
              Suggest resource
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function IssueForm() {
  const { sent, submit } = useFakeSubmit();
  return (
    <form onSubmit={submit} className="sheen-host rounded-3xl glass-card p-6 sm:p-8">
      <div className="flex items-center gap-2.5">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-900 text-white shadow-glow">
          <AlertTriangle className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-display text-lg font-semibold tracking-tight text-ink-900">Report an issue</h3>
          <p className="text-[12px] text-ink-500">UI only · nothing is stored</p>
        </div>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Your name" placeholder="Ada Lovelace" />
        <Field label="Email (optional)" placeholder="you@vitstudent.ac.in" type="email" />
      </div>
      <div className="mt-5">
        <label className="mb-1.5 block text-[13px] font-medium text-ink-700">Issue type</label>
        <select className={inputCls} defaultValue="">
          <option value="" disabled>Select a type</option>
          <option>Bug</option>
          <option>Broken link</option>
          <option>Outdated content</option>
          <option>Accessibility</option>
          <option>Other</option>
        </select>
      </div>
      <div className="mt-5">
        <label className="mb-1.5 block text-[13px] font-medium text-ink-700">Where did it happen?</label>
        <input className={inputCls} placeholder="Page or section name" />
      </div>
      <div className="mt-5">
        <label className="mb-1.5 block text-[13px] font-medium text-ink-700">Describe the issue</label>
        <textarea rows={4} className={`${inputCls} resize-none`} placeholder="What happened, and what did you expect?" />
      </div>
      {sent && <div className="mt-5"><SuccessMessage /></div>}
      <div className="mt-6 flex items-center justify-end">
        <button type="submit" className="btn-primary">
          {sent ? (
            <>
              <CheckCircle2 className="h-4 w-4 text-accent-400" /> Reported
            </>
          ) : (
            <>
              Report issue
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Feedback"
        title="Contact & Feedback"
        subtitle="This is a student-run platform built with care. Your ideas, bug reports and kind words help shape what comes next."
        icon={MessageSquare}
      />

      <div className="section-shell space-y-20 pb-10">
        <section>
          <SectionHeading
            eyebrow="Channels"
            title="Ways to reach us"
            description="Pick the path that fits — every message is read by a fellow student."
          />
          <FeatureGrid items={feedbackTypes} />
        </section>

        <section>
          <SectionHeading
            eyebrow="Contact information"
            title="How to reach the team"
            description="A few placeholder channels — real contact details will arrive in the next release."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {contactInfo.map((c, i) => (
              <Reveal key={i} delay={i * 60} variant="scale">
                <div className="sheen-host group h-full rounded-3xl glass-card p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                    {c.label}
                  </div>
                  <div className="mt-1 font-display text-[15px] font-semibold tracking-tight text-ink-900">
                    {c.value}
                  </div>
                  <div className="mt-1 text-[12px] text-ink-500">{c.hint}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="Send a message"
            title="Share your thoughts"
            description="A simple, no-login form. Nothing is stored yet — this is a foundation placeholder."
          />
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <Reveal variant="scale">
              <FeedbackForm />
            </Reveal>

            <Reveal delay={120} variant="scale">
              <div className="flex h-full flex-col gap-5">
                <div className="rounded-3xl glass-card p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-white shadow-glow">
                    <Mail className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-ink-900">Direct email</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    Prefer email? Reach the student team directly. A real address will appear here in the next release.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-brand-600">
                    hello@vitchennai-hub (placeholder)
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-6 text-white">
                  <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-60" />
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/40 blur-3xl" />
                  <span className="relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-200 backdrop-blur">
                    <Sparkles className="h-3.5 w-3.5 text-accent-300" /> Roadmap
                  </span>
                  <h3 className="relative mt-4 font-display text-lg font-semibold tracking-tight">
                    What happens to your feedback?
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-ink-300">
                    In upcoming versions, feedback will be triaged, tagged and visible on a public roadmap — so you can see what is being worked on.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="Contribute"
            title="Suggest a resource & report an issue"
            description="Help us grow the hub and keep it running smoothly."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal variant="scale">
              <ResourceForm />
            </Reveal>
            <Reveal delay={120} variant="scale">
              <IssueForm />
            </Reveal>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Quick answers about the platform and how it works."
          />
          <FaqAccordion items={faqs} columns={2} />
        </section>

        <CtaBanner
          title="Your voice shapes what comes next."
          description="Feedback collection, a public roadmap and tagging will arrive in upcoming releases."
          primary={{ label: 'Back to home', to: '/' }}
          secondary={{ label: 'Explore sections', to: '/resources' }}
        />
      </div>
    </>
  );
}
