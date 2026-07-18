import { useState } from 'react';
import {
  MessageSquare, Mail, Send, Heart, Lightbulb, Bug, ArrowRight,
  CheckCircle2, Sparkles, Clock, MapPin,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import FeatureGrid from '../components/sections/FeatureGrid';
import CtaBanner from '../components/CtaBanner';

const feedbackTypes = [
  { icon: Lightbulb, title: 'Feature idea', description: 'Suggest a feature you would love to see in the next version of the platform.' },
  { icon: Bug, title: 'Report an issue', description: 'Spotted something broken, confusing or outdated? Let the team know.' },
  { icon: Heart, title: 'General feedback', description: 'Share what is working well and what could be better for future releases.' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

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
            eyebrow="Send a message"
            title="Share your thoughts"
            description="A simple, no-login form. Nothing is stored yet — this is a foundation placeholder."
          />
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  setTimeout(() => setSent(false), 4000);
                }}
                className="rounded-3xl border border-ink-200/70 bg-white/70 p-6 backdrop-blur-xl sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your name" placeholder="Ada Lovelace" />
                  <Field label="Email (optional)" placeholder="you@vitstudent.ac.in" type="email" />
                </div>
                <div className="mt-5">
                  <label className="mb-1.5 block text-[13px] font-medium text-ink-700">Subject</label>
                  <input
                    className="w-full rounded-xl border border-ink-200 bg-white/70 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                    placeholder="What is this about?"
                  />
                </div>
                <div className="mt-5">
                  <label className="mb-1.5 block text-[13px] font-medium text-ink-700">Message</label>
                  <textarea
                    rows={5}
                    className="w-full resize-none rounded-xl border border-ink-200 bg-white/70 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                    placeholder="Write your message…"
                  />
                </div>
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
            </Reveal>

            <Reveal delay={120}>
              <div className="flex h-full flex-col gap-5">
                <div className="rounded-3xl border border-ink-200/70 bg-white/70 p-6 backdrop-blur-xl">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-white">
                    <Mail className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">Direct email</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    Prefer email? Reach the student team directly. A real address will appear here in the next release.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-brand-600">
                    hello@vitchennai-hub (placeholder)
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="rounded-3xl border border-ink-200/70 bg-white/70 p-6 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <Clock className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-[13px] font-semibold text-ink-900">Response time</div>
                      <div className="text-[12px] text-ink-500">Usually within a week during the semester.</div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-[13px] font-semibold text-ink-900">Where we are</div>
                      <div className="text-[12px] text-ink-500">VIT Chennai, Vandalur–Kelambakkam Road.</div>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-3xl border border-ink-200/70 bg-gradient-to-br from-ink-900 to-ink-800 p-6 text-white">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/30 blur-3xl" />
                  <span className="relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-ink-200">
                    <Sparkles className="h-3.5 w-3.5" /> Roadmap
                  </span>
                  <h3 className="relative mt-4 font-display text-lg font-semibold">
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

function Field({
  label,
  placeholder,
  type = 'text',
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[13px] font-medium text-ink-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink-200 bg-white/70 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
      />
    </div>
  );
}
