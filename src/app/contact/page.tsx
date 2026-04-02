'use client';

import { useState } from 'react';
import FadeIn from '@/components/FadeIn';

const engagementTypes = [
  'Launch Stress Test (30-min call)',
  'Advanced Metabolic Retention Audit',
  'Launch Architecture Mandate',
  'Talent Architecture & Squad Building',
  'Coaching & Training Add-On',
  'Intelligence Vault Access',
  'General Inquiry',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will be wired to Supabase or email service later
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-surface border-b border-gray-200 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-content">
          <FadeIn>
            <span className="eyebrow mb-4 block">Contact</span>
            <h1 className="font-serif text-h2 text-navy mb-5 max-w-2xl">
              Start with a conversation, <em className="italic">not a contract</em>
            </h1>
            <p className="text-base text-mid leading-relaxed max-w-xl">
              Schedule a 30-minute Launch Stress Test, request an Intelligence Vault report,
              or reach out with a general inquiry. Sharon responds personally within 24 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-navy">
        <div className="container-content py-20">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: what to expect */}
            <FadeIn>
              <div>
                <span className="eyebrow text-gold/70 mb-6 block">What to Expect</span>
                <div className="space-y-0">
                  {[
                    { num: '1', title: 'You reach out', desc: 'Fill out the form or email us directly. Tell us about your asset, stage, and what you are trying to solve.' },
                    { num: '2', title: 'Sharon responds personally', desc: 'Within 24 hours, Sharon will review your inquiry and either schedule a call or ask a clarifying question.' },
                    { num: '3', title: '30-minute Launch Stress Test', desc: 'A focused diagnostic conversation to identify where your launch is most exposed and whether UEM is the right fit.' },
                    { num: '4', title: 'Clear recommendation', desc: 'You will receive a short written summary of the key risks identified and a recommendation for the right engagement model -- or a candid note that we are not the right fit.' },
                  ].map((step, i) => (
                    <div
                      key={step.num}
                      className={`flex gap-4 py-5 ${
                        i < 3 ? 'border-b border-white/10' : ''
                      }`}
                    >
                      <span className="font-serif text-base text-gold flex-shrink-0 w-5">
                        {step.num}
                      </span>
                      <div>
                        <p className="text-[13px] font-semibold text-white mb-1">{step.title}</p>
                        <p className="text-xs text-white/50 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact info */}
                <div className="mt-10 pt-8 border-t border-white/10">
                  <h3 className="text-[10px] font-bold tracking-[0.16em] uppercase text-gold mb-5">
                    Direct Contact
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-white/40 mb-0.5">Principal</p>
                      <p className="text-sm text-white">Sharon Lee</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/40 mb-0.5">Email</p>
                      <p className="text-sm text-white">info@echelonconsulting.io</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/40 mb-0.5">Phone</p>
                      <p className="text-sm text-white">(307) 761-6181</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right: form */}
            <FadeIn delay={0.15}>
              <div>
                {submitted ? (
                  <div className="bg-white/[0.06] border border-white/10 rounded-md p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-5">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8952A" strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-xl text-white mb-3">Message received</h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      Sharon will review your inquiry and respond personally within 24 hours.
                      If you requested a Launch Stress Test, expect scheduling options shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-0.5">
                    <div className="grid grid-cols-2 gap-0.5">
                      <div>
                        <label className="block text-[10px] font-bold tracking-[0.14em] uppercase text-white/40 bg-white/[0.06] px-4 pt-3 pb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your first name"
                          className="w-full bg-white/[0.06] border-none border-b border-white/10 text-white px-4 py-2.5 text-sm outline-none focus:border-gold/60 placeholder:text-white/25 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold tracking-[0.14em] uppercase text-white/40 bg-white/[0.06] px-4 pt-3 pb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your last name"
                          className="w-full bg-white/[0.06] border-none border-b border-white/10 text-white px-4 py-2.5 text-sm outline-none focus:border-gold/60 placeholder:text-white/25 transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-0.5">
                      <div>
                        <label className="block text-[10px] font-bold tracking-[0.14em] uppercase text-white/40 bg-white/[0.06] px-4 pt-3 pb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="you@company.com"
                          className="w-full bg-white/[0.06] border-none border-b border-white/10 text-white px-4 py-2.5 text-sm outline-none focus:border-gold/60 placeholder:text-white/25 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold tracking-[0.14em] uppercase text-white/40 bg-white/[0.06] px-4 pt-3 pb-1">
                          Title / Role
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., VP Commercial"
                          className="w-full bg-white/[0.06] border-none border-b border-white/10 text-white px-4 py-2.5 text-sm outline-none focus:border-gold/60 placeholder:text-white/25 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.14em] uppercase text-white/40 bg-white/[0.06] px-4 pt-3 pb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Company name"
                        className="w-full bg-white/[0.06] border-none border-b border-white/10 text-white px-4 py-2.5 text-sm outline-none focus:border-gold/60 placeholder:text-white/25 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.14em] uppercase text-white/40 bg-white/[0.06] px-4 pt-3 pb-1">
                        Interest
                      </label>
                      <select
                        required
                        className="w-full bg-white/[0.06] border-none border-b border-white/10 text-white/60 px-4 py-2.5 text-sm outline-none appearance-none"
                      >
                        <option value="">Select engagement type</option>
                        {engagementTypes.map((t) => (
                          <option key={t} value={t} className="text-navy bg-white">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.14em] uppercase text-white/40 bg-white/[0.06] px-4 pt-3 pb-1">
                        Message
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your asset, stage, and what you are trying to solve..."
                        className="w-full bg-white/[0.06] border-none border-b border-white/10 text-white px-4 py-3 text-sm outline-none resize-none focus:border-gold/60 placeholder:text-white/25 transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gold text-navy font-bold text-[12px] tracking-[0.08em] uppercase py-4 mt-0.5 hover:bg-gold-light transition-colors"
                    >
                      Submit Inquiry
                    </button>
                    <p className="text-center text-[11px] text-white/30 mt-3">
                      All inquiries are confidential. Sharon responds personally within 24 hours.
                    </p>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
