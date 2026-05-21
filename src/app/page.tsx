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
} from 'lucide-react'

/* ─────────── NAV ─────────── */
function Navigation() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'Problem', href: '#problem' },
    { label: "Who it's for", href: '#who' },
    { label: 'How it works', href: '#how' },
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
      {/* Subtle hero visual - abstract decision pattern */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
        <div className="relative w-full max-w-xl lg:max-w-2xl opacity-[0.07] mr-0 lg:mr-0">
          <img
            src="/hero-visual.png"
            alt=""
            aria-hidden="true"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          {/* Campaign line — small, above headline */}
          <p className="text-sm font-medium tracking-widest uppercase text-slate-accent mb-6 animate-fade-in-up">
            Before you offer the job, test the decision.
          </p>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-navy leading-[1.15] animate-fade-in-up animation-delay-100">
            The wrong hire rarely looks wrong at interview.
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200">
            Critical Hire gives you an independent review of the role, the
            evidence, the shortlist, and the appointment risk — before the offer
            is made.
          </p>

          {/* Supporting line */}
          <p className="mt-4 text-base text-muted-foreground/80 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-300">
            Some hires carry too much risk to leave to interview instinct alone.
            This is for the decisions that shape businesses.
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
            By Optitude 360 — applying Executive Search Psychology to
            business-critical hiring decisions.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─────────── PROBLEM ─────────── */
function ProblemSection() {
  const items = [
    {
      icon: <Eye className="h-5 w-5" />,
      title: 'Interviews create impressions.',
      desc: 'Not evidence. Confidence at interview is not the same as competence in the role.',
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Pressure creates shortcuts.',
      desc: 'The role is vacant. The team is stretched. The need to fill it can override the discipline to test it.',
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: 'Stakeholders may not be aligned.',
      desc: 'Different interviewers weight different things. Without structure, the final decision can default to the loudest voice.',
    },
    {
      icon: <Search className="h-5 w-5" />,
      title: 'Evidence gaps are often missed.',
      desc: "What hasn't been tested is just as important as what has. Most final-stage reviews don't examine the gaps.",
    },
    {
      icon: <AlertTriangle className="h-5 w-5" />,
      title: 'The cost appears after the offer, not before.',
      desc: 'By the time a poor hire becomes visible, the cost is already inside the business.',
    },
  ]

  return (
    <section id="problem" className="bg-section-alt">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
            Interviews create confidence. Confidence creates risk.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            By the final stage, the candidate is polished, the business is under
            pressure, and doubts are often rationalised because the role needs
            filling. This is where hiring discipline weakens — and where the
            most consequential mistakes begin.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-background rounded-lg border border-border/60 p-6 group hover:border-navy/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded bg-navy/5 text-navy">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-navy text-sm">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────── COST OF RISK ─────────── */
function CostSection() {
  const costs = [
    'Management time dealing with underperformance',
    'Lost productivity during the learning curve that never ends',
    'Team disruption and morale impact',
    'Client relationship risk',
    'Replacement recruitment and onboarding cost',
    'Delayed growth and missed opportunities',
    'Cultural damage that affects retention',
  ]

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
              A bad hire costs more than you think.
              <br />
              <span className="text-muted-foreground">
                And more than you'll see at the time.
              </span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A hiring mistake is rarely just a recruitment cost. The real
              damage — management time, team disruption, client risk, lost
              momentum — often doesn't appear on any single budget line. But it
              accumulates quickly.
            </p>

            <ul className="mt-6 space-y-3">
              {costs.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                  <TrendingDown className="h-4 w-4 mt-0.5 text-destructive/70 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Evidence card */}
          <div className="bg-navy text-white rounded-lg p-8 md:p-10">
            <p className="text-xs font-medium tracking-widest uppercase text-white/50 mb-4">
              The evidence
            </p>
            <blockquote className="text-lg md:text-xl font-medium leading-relaxed">
              &ldquo;A poor mid-manager hire on a £42,000 salary can cost more
              than £132,000 once hidden costs such as training, lost
              productivity, and increased staff turnover are included.&rdquo;
            </blockquote>
            <Separator className="my-6 bg-white/20" />
            <div className="flex items-start gap-3">
              <BarChart3 className="h-5 w-5 text-white/50 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-white/80">
                  Recruitment & Employment Confederation, 2017.
                </p>
                <p className="text-xs text-white/40 mt-1">
                  Based on total cost of a poor mid-management hire including
                  salary, training, lost productivity, and replacement costs.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-white/60 leading-relaxed">
                In a business with 50–150 employees, a single poor hire at this
                level can affect an entire department, multiple client
                relationships, and the trajectory of the business for a year or
                more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────── WHO IT'S FOR ─────────── */
function WhoSection() {
  const roles = [
    'Operations Manager',
    'General Manager',
    'Sales Manager',
    'Finance Manager',
    'Commercial Manager',
    'Practice Manager',
    'Technical Manager',
    'Head of People',
    'Delivery Lead',
    'Production Manager',
    'Lab Manager',
    'Registered Manager',
    'Partner-track hire',
  ]

  const sectors = [
    'Owner-managed SMEs',
    'Professional services',
    'Engineering & manufacturing',
    'Technology & software',
    'Life sciences & biotech',
    'Agri-tech',
    'Healthcare, care & veterinary',
    'Specialist education',
  ]

  return (
    <section id="who" className="bg-section-alt">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
            For the hire that will shape your next three years.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Critical Hire is for businesses with 20–250 employees — especially
            50–150 employees — making appointments that affect delivery,
            clients, cashflow, culture, compliance, or growth.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-slate-accent mb-4">
              Typical roles
            </h3>
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
            <p className="mt-5 text-sm text-muted-foreground italic">
              Critical does not mean executive. Critical means consequential.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-slate-accent mb-4">
              Best-fit sectors
            </h3>
            <ul className="space-y-2.5">
              {sectors.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-2.5 text-sm text-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-green-dark shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
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
      title: 'Role Calibration',
      desc: 'We clarify what success in the role actually requires — beyond the job description.',
      icon: <Target className="h-5 w-5" />,
    },
    {
      num: '02',
      title: 'Evidence Review',
      desc: 'We examine what has been tested, what has been assumed, and what has been missed.',
      icon: <Search className="h-5 w-5" />,
    },
    {
      num: '03',
      title: 'Candidate Risk Map',
      desc: 'We identify likely strengths, gaps, derailers, and fit concerns for each shortlisted candidate.',
      icon: <AlertTriangle className="h-5 w-5" />,
    },
    {
      num: '04',
      title: 'Decision Session',
      desc: 'We review the shortlist with you and challenge the decision logic before the offer is made.',
      icon: <Scale className="h-5 w-5" />,
    },
    {
      num: '05',
      title: 'Critical Hire Decision Brief',
      desc: 'You receive a clear recommendation, risk summary, and next-step guidance.',
      icon: <FileCheck className="h-5 w-5" />,
    },
  ]

  return (
    <section id="how">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
            How Critical Hire works.
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Five steps. Before the offer.
          </p>
        </div>

        <div className="mt-12 space-y-0">
          {steps.map((step, i) => (
            <div key={step.num}>
              <div className="flex gap-5 md:gap-8 items-start py-6 group">
                {/* Step number */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-navy text-white font-mono text-sm font-semibold">
                    {step.num}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="text-navy/60 hidden sm:block">{step.icon}</div>
                    <h3 className="font-semibold text-navy text-base md:text-lg">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="ml-[19px] md:ml-[23px] w-0.5 h-4 bg-border" />
              )}
            </div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div className="mt-14 pt-10 border-t border-border">
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

/* ─────────── WHAT YOU RECEIVE ─────────── */
function DeliverableSection() {
  const items = [
    { label: 'Role success criteria', desc: 'What the role actually requires, clarified and documented.' },
    { label: 'Evidence gaps', desc: "What hasn't been tested — and what that means for the decision." },
    { label: 'Candidate comparison', desc: 'A structured comparison of shortlisted candidates against the role requirements.' },
    { label: 'Appointment risk map', desc: 'Specific risks for each candidate, ranked and explained.' },
    { label: 'Stakeholder alignment notes', desc: 'Where interviewers agree and disagree, and what that reveals.' },
    { label: 'Final interview questions', desc: 'Targeted questions to close the most important evidence gaps.' },
    { label: 'Offer / no-offer considerations', desc: 'A clear summary to support the final decision.' },
    { label: '30/60/90-day early-risk watchpoints', desc: 'What to monitor in the first three months if the appointment is made.' },
  ]

  return (
    <section className="bg-section-alt">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
            What you receive: The Critical Hire Decision Brief
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A single, structured document you can share with your board,
            share with your team, and act on with confidence.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-background rounded-lg border border-border/60 p-5 group hover:border-navy/20 transition-colors"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-dark shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm text-navy">
                    {item.label}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────── WHY OPTITUDE 360 ─────────── */
function WhySection() {
  const pillars = [
    {
      title: 'Judgement',
      desc: 'How the candidate thinks, decides, and acts when the role becomes difficult.',
    },
    {
      title: 'Role-fit',
      desc: 'Whether the person fits what the role actually demands — not just what the CV describes.',
    },
    {
      title: 'Behavioural evidence',
      desc: 'What past behaviour predicts about future performance in this specific context.',
    },
    {
      title: 'Stakeholder alignment',
      desc: "Whether the hiring team is aligned on what matters — and where they're not.",
    },
    {
      title: 'Decision discipline',
      desc: 'A structured challenge to the decision logic, not just the candidate.',
    },
    {
      title: 'Appointment risk',
      desc: 'Specific, named risks — and what to do about them before and after the offer.',
    },
  ]

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
            Why this works when gut instinct doesn't.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Optitude 360 applies Executive Search Psychology — a discipline that
            looks beyond what candidates have done and examines how they think,
            decide, adapt, and perform when the role becomes difficult.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            This is not generic HR consultancy. It is a focused, evidence-based
            review of the decision you're about to make — and the risks you may
            not yet have seen.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-lg border border-border/60 p-5 hover:border-navy/20 transition-colors"
            >
              <h3 className="font-semibold text-navy text-sm mb-1.5">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────── WHEN TO USE ─────────── */
function WhenSection() {
  const triggers = [
    'You have one to three final candidates.',
    'The role has failed before.',
    'Stakeholders disagree on the preferred candidate.',
    'The preferred candidate is impressive but doubts remain.',
    'The business is under pressure to fill the vacancy quickly.',
    'The role will materially affect performance, clients, culture, or growth.',
    'You want independent judgement before making the offer.',
  ]

  return (
    <section className="bg-section-alt">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
            These are the moments when a second look matters most.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Use Critical Hire when the decision matters and the evidence is not
            yet strong enough to proceed with confidence.
          </p>
        </div>

        <div className="mt-10 max-w-2xl">
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
            Not sure? Take the Hiring Risk Diagnostic.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl mx-auto">
            A short assessment to see whether your final hiring decision would
            benefit from an independent review before the offer is made. Takes
            five minutes. Gives you a clear risk rating.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base border-navy/20 text-navy hover:bg-navy/5"
              asChild
            >
              <a href="#diagnostic">
                Take the 5-Minute Diagnostic
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
      q: 'Do you replace our recruiter or search partner?',
      a: 'No. Search finds candidates. Critical Hire tests the decision before the offer is made. We work alongside your existing recruitment process — we don\'t replace any part of it.',
    },
    {
      q: 'Do you replace our HR team?',
      a: 'No. Critical Hire supports HR and hiring teams by adding independent decision discipline at the highest-risk point in the process. Think of it as a final-stage check that strengthens the work your team has already done.',
    },
    {
      q: 'Will this slow down our hiring process?',
      a: 'A Critical Hire review typically takes 3–5 working days. A poor hire costs 3–6 months of management time, team disruption, and replacement cost. A short review before the offer prevents a long correction afterwards.',
    },
    {
      q: 'Is this only for executive roles?',
      a: 'No. Critical does not mean executive — it means consequential. Operations managers, finance managers, technical leads, practice managers, registered managers — these roles carry significant risk in businesses with 50–150 employees. The consequences of a poor hire are often more immediate and more visible than in larger organisations.',
    },
    {
      q: 'Can we just rely on probation?',
      a: 'Probation is a correction mechanism, not a prevention one. By the time you\'re managing someone through probation, the cost is already inside the business: management time, team disruption, client risk, and the distraction of starting the hiring process again. Critical Hire reduces the risk before the offer is made — before the cost enters the business.',
    },
    {
      q: 'What if the review confirms the candidate we were going to appoint anyway?',
      a: 'That\'s a valuable outcome. Confirmation with evidence is more useful than confidence without it. You proceed with the offer knowing the risks have been independently assessed, the evidence gaps have been addressed, and your 30/60/90-day watchpoints are in place.',
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
            Questions you're likely asking
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
            Before you make the offer, make sure the evidence supports it.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            If the role is too important to get wrong, the decision deserves a
            second look. Test the evidence, the assumptions, and the risk —
            before the offer is made.
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
              <a href="#diagnostic">Download the Critical Hire Summary</a>
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground/60">
            Critical Hire by Optitude 360 — applying Executive Search Psychology
            to business-critical hiring decisions.
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
              by Optitude 360 — applying Executive Search Psychology to
              business-critical hiring decisions.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/40">
            <a href="#problem" className="hover:text-white/70 transition-colors">
              Problem
            </a>
            <a href="#who" className="hover:text-white/70 transition-colors">
              Who it's for
            </a>
            <a href="#how" className="hover:text-white/70 transition-colors">
              How it works
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
            © {new Date().getFullYear()} Optitude 360 Ltd. All rights reserved.
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
        <CostSection />
        <WhoSection />
        <HowSection />
        <DeliverableSection />
        <WhySection />
        <WhenSection />
        <DiagnosticSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
