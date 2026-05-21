'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  ShieldCheck,
  Search,
  Brain,
  Users,
  FileCheck,
  AlertTriangle,
  Clock,
  TrendingDown,
  ArrowRight,
  ChevronRight,
  Target,
  Eye,
  Scale,
  BarChart3,
  CheckCircle2,
  Menu,
  X,
  XCircle,
  MessageSquare,
  ClipboardCheck,
  UserCheck,
  Layers,
  Microscope,
} from 'lucide-react'

/* ─────────── NAV ─────────── */
function Navigation() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'When to use', href: '#when' },
    { label: 'How it works', href: '#how' },
    { label: 'What\u2019s included', href: '#included' },
    { label: 'Diagnostic', href: '#diagnostic' },
    { label: 'Book review', href: '#book' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded bg-navy flex items-center justify-center">
            <ShieldCheck className="h-4.5 w-4.5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-navy leading-none">
              Critical Hire
            </span>
            <span className="text-[10px] text-muted-foreground tracking-wide leading-none mt-0.5">
              by Optitude 360
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-navy transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button
            size="sm"
            className="bg-navy hover:bg-navy-light text-white"
            asChild
          >
            <a href="#book">Book a Review</a>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-muted-foreground hover:text-navy transition-colors border-b border-border/50 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <Button
            size="sm"
            className="mt-3 w-full bg-navy hover:bg-navy-light text-white"
            asChild
          >
            <a href="#book" onClick={() => setOpen(false)}>
              Book a Review
            </a>
          </Button>
        </div>
      )}
    </header>
  )
}

/* ─────────── HERO ─────────── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle hero visual */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
        <div className="relative w-full max-w-xl lg:max-w-2xl opacity-[0.06]">
          <img
            src="/hero-visual.png"
            alt=""
            aria-hidden="true"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          {/* Campaign line */}
          <p className="text-sm font-medium tracking-widest uppercase text-gold-accent mb-6 animate-fade-in-up">
            Before you offer the job, test the decision
          </p>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-navy leading-[1.15] animate-fade-in-up animation-delay-100">
            Final-stage selection support for businesses that already have candidates
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200">
            Critical Hire brings Optitude 360&rsquo;s selection judgement into
            your existing hiring process. We help test the role, the evidence,
            the final candidates, and the decision risk before you commit.
          </p>

          {/* Supporting line */}
          <p className="mt-4 text-base text-muted-foreground/80 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-300">
            This is not recruitment. It is not a replacement for HR. It is
            independent final-stage selection support for roles too important
            to get wrong.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3 animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="bg-navy hover:bg-navy-light text-white h-12 px-8 text-base"
              asChild
            >
              <a href="#book">
                Book a Critical Hire Review
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base border-navy/20 text-navy hover:bg-navy/5"
              asChild
            >
              <a href="#diagnostic">Take the Hiring Risk Diagnostic</a>
            </Button>
          </div>

          {/* Credibility line */}
          <p className="mt-6 text-xs text-muted-foreground/60 animate-fade-in-up animation-delay-400">
            By Optitude 360 &mdash; applying Executive Search Psychology to
            business-critical hiring decisions.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─────────── PROBLEM ─────────── */
function ProblemSection() {
  return (
    <section id="problem" className="bg-section-alt">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
            For when the role is too important to get wrong
          </h2>
        </div>

        <div className="mt-8 max-w-3xl space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Some hires carry too much consequence to leave to interview
            confidence alone.
          </p>
          <p>
            By the final stage, the candidate may look credible, the business
            may be under pressure, and the shortlist may feel strong. But the
            real question is not whether the candidate has interviewed well.
          </p>
          <p className="text-foreground font-medium">
            It is whether the evidence supports the appointment.
          </p>
          <p>
            Critical Hire brings Optitude 360&rsquo;s final-stage selection
            judgement into your existing hiring process. It is designed for
            businesses that already have candidates and want independent,
            experienced support before making a role-critical offer.
          </p>
          <p>
            This is not recruitment. It is not a replacement for HR. And it is
            not generic psychometric testing.
          </p>
          <p className="text-foreground font-medium">
            It is practical selection judgement at the point where a wrong
            appointment becomes expensive.
          </p>
        </div>

        {/* Three-part positioning strip */}
        <div className="mt-14 grid md:grid-cols-3 gap-0">
          <div className="bg-navy text-white p-8 md:p-10">
            <p className="text-xs font-medium tracking-widest uppercase text-white/40 mb-3">
              01
            </p>
            <h3 className="text-lg font-semibold mb-2">You have candidates</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              The search or sourcing stage is already done.
            </p>
          </div>
          <div className="bg-navy-light text-white p-8 md:p-10">
            <p className="text-xs font-medium tracking-widest uppercase text-white/40 mb-3">
              02
            </p>
            <h3 className="text-lg font-semibold mb-2">The role carries risk</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              The wrong appointment would affect delivery, clients, culture,
              compliance, or growth.
            </p>
          </div>
          <div className="bg-navy-dark text-white p-8 md:p-10">
            <p className="text-xs font-medium tracking-widest uppercase text-white/40 mb-3">
              03
            </p>
            <h3 className="text-lg font-semibold mb-2">The decision needs testing</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Critical Hire strengthens final-stage selection before offer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────── WHEN TO USE ─────────── */
function WhenSection() {
  const triggers = [
    'You have one to three final candidates.',
    'You are close to making an offer.',
    'The role is commercially, operationally, technically, culturally, client, compliance, or leadership critical.',
    'The preferred candidate looks strong, but doubts remain.',
    'Stakeholders disagree about the safest appointment.',
    'The role has failed before.',
    'The business is hiring its first serious manager or functional lead.',
    'The consequences of a wrong hire would be difficult to absorb.',
  ]

  const roles = [
    'Operations Manager',
    'Finance Manager',
    'Sales Manager',
    'Practice Manager',
    'Technical Lead',
    'Registered Manager',
    'Production Manager',
    'Head of People',
    'Lab Manager',
    'Quality Manager',
    'Senior professional-services appointment',
  ]

  return (
    <section id="when">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
            When to use Critical Hire
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Use Critical Hire when you are close to making an offer and the role
            is too important to get wrong.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-12">
          {/* Triggers */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-slate-accent mb-5">
              Use it when
            </p>
            <ul className="space-y-4">
              {triggers.map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy text-xs font-semibold mt-0.5">
                    {i + 1}
                  </div>
                  <span className="text-foreground leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Roles */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-slate-accent mb-5">
              Typical roles
            </p>
            <div className="flex flex-wrap gap-2">
              {roles.map((r) => (
                <span
                  key={r}
                  className="inline-flex items-center rounded-md bg-background border border-border/60 px-3 py-1.5 text-sm text-foreground hover:border-navy/30 transition-colors"
                >
                  {r}
                </span>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm font-medium text-navy">
                Critical does not mean executive.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Critical means consequential.
              </p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                If the wrong person would affect clients, delivery, cashflow,
                culture, compliance, team confidence, or growth, the decision
                deserves to be tested.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────── HOW IT WORKS ─────────── */
function HowSection() {
  const steps = [
    {
      num: '01',
      title: 'Role and risk calibration',
      desc: 'We begin by clarifying the role, the business context, and the consequence of getting the appointment wrong.',
      detail: 'This includes success criteria, failure risks, stakeholder expectations, commercial exposure, operational impact, and any previous hiring concerns.',
      icon: <Target className="h-5 w-5" />,
    },
    {
      num: '02',
      title: 'Final-stage selection design',
      desc: 'We review or design the final-stage interview approach.',
      detail: 'This may include structured questioning, attitudinal-based selection, evidence prompts, role-specific scenarios, and areas where candidate claims need to be tested more carefully.',
      icon: <ClipboardCheck className="h-5 w-5" />,
    },
    {
      num: '03',
      title: 'Candidate questioning and interview support',
      desc: 'Depending on scope, Optitude 360 may attend final interviews, ask independent questions, or interview candidates directly on the client\u2019s behalf.',
      detail: 'The purpose is to test judgement, attitude, fit, motivation, pressure response, and suitability for the actual conditions of the role.',
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      num: '04',
      title: 'Evidence and fit review',
      desc: 'We review the evidence gathered across the process.',
      detail: 'This includes what has been properly tested, what remains assumed, where candidate fit is strong, and where concerns or gaps remain.',
      icon: <Search className="h-5 w-5" />,
    },
    {
      num: '05',
      title: 'Decision-risk analysis',
      desc: 'We assess the decision risk before the offer is made.',
      detail: 'This includes candidate risk signals, stakeholder alignment, interview evidence, unresolved concerns, bias or pressure signals, and offer/no-offer considerations.',
      icon: <AlertTriangle className="h-5 w-5" />,
    },
    {
      num: '06',
      title: 'Critical Hire Decision Brief',
      desc: 'You receive a concise written Decision Brief and, where appropriate, a decision discussion before the offer is made.',
      detail: 'The brief is designed to support a clear, defensible, commercially sensible final decision.',
      icon: <FileCheck className="h-5 w-5" />,
    },
  ]

  return (
    <section id="how" className="bg-section-alt">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
            How Critical Hire works
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-background rounded-lg border border-border/60 p-6 hover:border-navy/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-white font-mono text-xs font-semibold">
                  {step.num}
                </div>
                <div className="text-navy/50">{step.icon}</div>
                <h3 className="font-semibold text-navy text-sm">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                {step.desc}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                {step.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Timeframe and fee note */}
        <div className="mt-10 flex items-start gap-3 p-4 rounded-md bg-navy/5 border border-navy/10">
          <Clock className="h-4 w-4 text-navy mt-0.5 shrink-0" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-medium text-navy">Typical timeframe:</span>{' '}
            3&ndash;5 working days, depending on scope, candidate availability,
            and whether psychological testing is included.{' '}
            <span className="font-medium text-navy">The fee is fixed and agreed before engagement.</span>
          </p>
        </div>

        {/* Mid-page CTA */}
        <div className="mt-10 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-muted-foreground text-sm">
              Ready to test your next critical hiring decision?
            </p>
            <Button
              className="bg-navy hover:bg-navy-light text-white"
              asChild
            >
              <a href="#book">
                Book a Critical Hire Review
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────── WHAT'S INCLUDED ─────────── */
function IncludedSection() {
  const included = [
    'Role and risk calibration',
    'Success criteria review',
    'Final interview design',
    'Attitudinal-based selection questions',
    'Attendance at client interviews',
    'Independent candidate questioning',
    'Candidate interviews conducted on the client\u2019s behalf, where appropriate',
    'Review of candidate evidence gathered so far',
    'Candidate fit and risk assessment',
    'Stakeholder alignment review',
    'Decision-risk analysis',
    'Offer/no-offer considerations',
    'Critical Hire Decision Brief',
    'Optional 30/60/90-day early-risk watchpoints',
    'Optional registered psychological testing through Piers Courage Morgan',
  ]

  const briefContents = [
    'Role success criteria',
    'Evidence gathered so far',
    'Evidence gaps',
    'Candidate fit against the role context',
    'Interview findings',
    'Attitudinal and behavioural risk signals',
    'Stakeholder alignment considerations',
    'Decision-risk analysis',
    'Final questions or checks before offer',
    'Offer/no-offer considerations',
    'Recommended next steps',
  ]

  const commercialTerms = [
    { label: 'Fee', value: 'Fixed fee agreed before engagement' },
    { label: 'Timeframe', value: '3\u20135 working days, depending on scope' },
    { label: 'Designed for', value: 'Final-stage hiring decisions' },
    { label: 'Suitable where', value: 'Candidates already exist' },
    { label: 'Testing', value: 'Optional psychological testing quoted separately where appropriate' },
  ]

  return (
    <section id="included">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
            What may be included
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Critical Hire is scoped around the role, the stage of the process,
            and the level of appointment risk. A typical engagement may include:
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-12">
          {/* Included items */}
          <div>
            <ul className="space-y-3">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-dark shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Decision Brief preview */}
          <div>
            <div className="rounded-lg border border-border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <FileCheck className="h-5 w-5 text-navy" />
                <h3 className="font-semibold text-navy">
                  The Critical Hire Decision Brief
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                You receive a concise Decision Brief setting out:
              </p>

              <div className="space-y-0">
                {briefContents.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 py-2.5 border-b border-border/50 last:border-0"
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded bg-navy/5 text-navy text-[10px] font-semibold shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The brief is designed to support a clear, defensible,
                  commercially sensible final decision.
                </p>
              </div>
            </div>

            {/* Commercial terms */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold tracking-widest uppercase text-slate-accent mb-4">
                Commercial terms
              </h4>
              <div className="space-y-3">
                {commercialTerms.map((t) => (
                  <div key={t.label} className="flex items-start gap-3 text-sm">
                    <span className="font-medium text-navy min-w-[80px] shrink-0">
                      {t.label}
                    </span>
                    <span className="text-muted-foreground">{t.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────── WHO CONDUCTS THE REVIEW ─────────── */
function WhoConductsSection() {
  return (
    <section className="bg-section-alt">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
            Who conducts the review
          </h2>
        </div>

        <div className="mt-8 max-w-3xl space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Critical Hire is conducted by Optitude 360.
          </p>
          <p>
            The review is led by 30 years&rsquo; experience of interviewing,
            search, selection, and candidate judgement across senior and
            business-critical appointments.
          </p>
          <p>
            That experience is applied directly to the client&rsquo;s live
            hiring decision: the role, the candidates, the interviews, the
            evidence, the risks, and the final judgement before offer.
          </p>
          <p>
            Where the appointment would benefit from additional psychological
            evidence, Optitude 360 can include optional registered psychological
            testing through specialist partner{' '}
            <span className="font-medium text-foreground">
              Piers Courage Morgan
            </span>
            .
          </p>
          <p>
            This is used selectively. It is not generic psychometric testing and
            it is not presented as a substitute for judgement. It is one
            additional source of evidence where the role, risk, and decision
            context justify it.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-lg border border-border/60 bg-background p-5">
            <UserCheck className="h-5 w-5 text-navy mb-2" />
            <h3 className="font-semibold text-navy text-sm mb-1">
              30 years&rsquo; experience
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Interviewing, search, selection, and candidate judgement.
            </p>
          </div>
          <div className="rounded-lg border border-border/60 bg-background p-5">
            <Layers className="h-5 w-5 text-navy mb-2" />
            <h3 className="font-semibold text-navy text-sm mb-1">
              Applied to your decision
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Not theoretical. Directly applied to the live hiring decision.
            </p>
          </div>
          <div className="rounded-lg border border-border/60 bg-background p-5">
            <Microscope className="h-5 w-5 text-navy mb-2" />
            <h3 className="font-semibold text-navy text-sm mb-1">
              Optional psychological testing
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Registered testing through Piers Courage Morgan where appropriate.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────── DECISION CLARITY PROMISE ─────────── */
function PromiseSection() {
  const promises = [
    'What the appointment decision is really based on',
    'What has been tested properly',
    'What remains assumed',
    'Where candidate confidence may be masking risk',
    'Where stakeholders are aligned or misaligned',
    'Whether the business is accepting risk knowingly or rationalising it under pressure',
  ]

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-accent/10 border border-gold-accent/20 mb-6">
            <ShieldCheck className="h-3.5 w-3.5 text-gold-accent" />
            <span className="text-xs font-medium tracking-wide text-gold-accent">
              Decision Clarity Promise
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
            Critical Hire will not pretend to eliminate hiring risk.
          </h2>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            No serious adviser should promise that any appointment will succeed.
            What we do guarantee is a clearer, more disciplined final decision.
          </p>

          <p className="mt-3 text-muted-foreground leading-relaxed">
            It will help you see:
          </p>

          <ul className="mt-5 space-y-3">
            {promises.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground">
                <Eye className="h-4 w-4 mt-0.5 text-gold-accent shrink-0" />
                <span className="leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>

          <Separator className="my-8" />

          <div className="rounded-lg border border-gold-accent/20 bg-gold-accent/5 p-6">
            <p className="text-foreground leading-relaxed">
              If the review does not give you a sharper understanding of the
              role, the evidence, the risks, and the questions still worth
              resolving before offer,{' '}
              <span className="font-semibold text-navy">
                we will complete an additional review session at no extra cost.
              </span>
            </p>
          </div>

          <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
            The outcome is a clearer, more disciplined final decision before the
            offer is made.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─────────── WHAT CRITICAL HIRE IS NOT ─────────── */
function NotSection() {
  const distinctions = [
    {
      isNot: 'Not recruitment',
      desc: 'We do not replace your recruiter or run the search process.',
    },
    {
      isNot: 'Not HR replacement',
      desc: 'We support internal decision-makers with independent judgement.',
    },
    {
      isNot: 'Not generic psychometrics',
      desc: 'Testing is optional and used only where it adds useful evidence.',
    },
  ]

  return (
    <section className="bg-section-alt">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
            What Critical Hire is not
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {distinctions.map((d) => (
            <div
              key={d.isNot}
              className="rounded-lg border border-border/60 bg-background p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="h-5 w-5 text-destructive/50" />
                <h3 className="font-semibold text-foreground text-sm">
                  {d.isNot}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {d.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg bg-navy p-6 md:p-8 text-center">
          <p className="text-sm font-medium tracking-widest uppercase text-white/40 mb-2">
            It is
          </p>
          <p className="text-lg md:text-xl font-semibold text-white">
            Final-stage selection support
          </p>
          <p className="text-sm text-white/60 mt-2 leading-relaxed max-w-lg mx-auto">
            Practical judgement applied to a live hiring decision.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─────────── DIAGNOSTIC CTA ─────────── */
function DiagnosticSection() {
  return (
    <section id="diagnostic">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <Brain className="h-10 w-10 text-navy mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
            Start with the Hiring Risk Diagnostic
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Not every role needs Critical Hire. The 8-question Hiring Risk
            Diagnostic helps you judge whether the appointment carries enough
            risk to justify an independent final-stage review.
          </p>
          <p className="mt-3 text-sm text-muted-foreground/70 max-w-lg mx-auto">
            It is short, practical, and designed for business owners, MDs, HR
            leaders, and hiring teams who are close to making a consequential
            appointment.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base border-navy/20 text-navy hover:bg-navy/5"
              asChild
            >
              <a href="#diagnostic">
                Take the 8-Question Diagnostic
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="h-12 px-8 text-base text-muted-foreground"
              asChild
            >
              <a href="#book">Or book a review directly</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────── FAQ ─────────── */
function FAQSection() {
  const faqs = [
    {
      q: 'Is Critical Hire recruitment?',
      a: 'No. Critical Hire is for businesses that already have candidates. It does not replace your recruiter or run the search process. Your recruiter may help identify and introduce candidates. Critical Hire helps test the final selection decision before the offer is made. Search finds candidates. Critical Hire tests the decision.',
    },
    {
      q: 'Does Critical Hire replace HR?',
      a: 'No. Critical Hire supports HR and hiring managers by adding independent selection judgement at the highest-risk point in the process. It can strengthen interview structure, evidence quality, stakeholder alignment, and decision discipline without bypassing internal ownership of the hire.',
    },
    {
      q: 'Is this just psychometric testing?',
      a: 'No. Critical Hire is broader than testing. It may include role calibration, interview design, candidate questioning, independent interviewing, evidence review, attitudinal-based selection, decision-risk analysis, and a written Decision Brief. Registered psychological testing is optional and provided through specialist partner Piers Courage Morgan where appropriate.',
    },
    {
      q: 'When should we use Critical Hire?',
      a: 'Use it when you are close to making an offer and the role is too important to get wrong. It is particularly useful when the shortlist is strong, stakeholders disagree, doubts remain, the business is under pressure to decide, or the consequences of failure would be significant.',
    },
    {
      q: 'What types of roles does this apply to?',
      a: 'Critical Hire is not only for executives. It can apply to any role where failure would create serious commercial, operational, cultural, client, compliance, or leadership consequences. Examples include Operations Manager, Finance Manager, Sales Manager, Practice Manager, Technical Lead, Registered Manager, Production Manager, Head of People, Lab Manager, Quality Manager, and senior professional-services appointments.',
    },
    {
      q: 'How long does it take?',
      a: 'Most Critical Hire engagements are completed within 3\u20135 working days, depending on scope, candidate availability, interview requirements, and whether optional psychological testing is included.',
    },
    {
      q: 'How is the fee agreed?',
      a: 'Critical Hire is provided on a fixed-fee basis, agreed before engagement. The scope is defined at the start, based on the role, number of candidates, interview involvement, evidence review required, and any optional testing.',
    },
    {
      q: 'Can you attend our final interviews?',
      a: 'Yes, where appropriate. Optitude 360 can attend client interviews, ask independent questions, help structure the interview, or conduct candidate interviews on the client\u2019s behalf. This is agreed as part of the scope before engagement.',
    },
    {
      q: 'What if we only have one preferred candidate?',
      a: 'Critical Hire can still be useful. A one-candidate review can test whether the decision is sufficiently evidenced, what remains unclear, and what risk the business would be accepting if it makes the offer.',
    },
    {
      q: 'Will you tell us who to hire?',
      a: 'Critical Hire provides independent judgement, evidence review, risk analysis, and decision considerations. The final hiring decision remains with the client. The purpose is to improve the quality of that decision before the offer is made.',
    },
    {
      q: 'What is the Hiring Risk Diagnostic?',
      a: 'The Hiring Risk Diagnostic is an 8-question lead-in tool. It helps you judge whether a live appointment carries enough risk to justify a Critical Hire Review. It is not the service itself.',
    },
    {
      q: 'What does a Critical Hire review cost?',
      a: 'The review is a fixed-fee engagement based on the role and the number of candidates. Because it is designed for one to three final candidates, the scope is defined and the cost is agreed before you commit. Contact us for a specific quote.',
    },
  ]

  return (
    <section className="bg-section-alt">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-border/80"
              >
                <AccordionTrigger className="text-left text-sm md:text-base font-medium text-navy hover:no-underline hover:text-navy-light">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

/* ─────────── FINAL CTA ─────────── */
function FinalCTASection() {
  return (
    <section id="book">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
            Before you make the offer, test the decision.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            If you already have candidates and the role is too important to get
            wrong, Critical Hire gives you independent final-stage selection
            support before you commit.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-navy hover:bg-navy-light text-white h-12 px-8 text-base"
              asChild
            >
              <a href="#book">
                Book a Critical Hire Review
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base border-navy/20 text-navy hover:bg-navy/5"
              asChild
            >
              <a href="#diagnostic">Take the Hiring Risk Diagnostic</a>
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground/60">
            Fixed fee agreed before engagement. Typical review timeframe:
            3&ndash;5 working days.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─────────── FOOTER ─────────── */
function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-navy-dark text-white/60">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <ShieldCheck className="h-4 w-4 text-white/40" />
              <span className="text-sm font-semibold text-white/80">
                Critical Hire
              </span>
            </div>
            <p className="text-xs text-white/40">
              by Optitude 360 &mdash; applying Executive Search Psychology to
              business-critical hiring decisions.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/40">
            <a href="#when" className="hover:text-white/70 transition-colors">
              When to use
            </a>
            <a href="#how" className="hover:text-white/70 transition-colors">
              How it works
            </a>
            <a href="#included" className="hover:text-white/70 transition-colors">
              What&rsquo;s included
            </a>
            <a href="#diagnostic" className="hover:text-white/70 transition-colors">
              Diagnostic
            </a>
            <a href="#book" className="hover:text-white/70 transition-colors">
              Book review
            </a>
          </div>
        </div>

        <Separator className="my-6 bg-white/10" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Optitude 360 Ltd. All rights
            reserved.
          </p>
          <p className="text-xs text-white/30">
            Cambridgeshire, United Kingdom
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ─────────── PAGE ─────────── */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <WhenSection />
        <HowSection />
        <IncludedSection />
        <WhoConductsSection />
        <PromiseSection />
        <NotSection />
        <DiagnosticSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
