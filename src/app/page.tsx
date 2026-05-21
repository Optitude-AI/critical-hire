'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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
  ArrowRight,
  ChevronRight,
  Target,
  Eye,
  Scale,
  CheckCircle2,
  Menu,
  X,
  XCircle,
  MessageSquare,
  ClipboardCheck,
  UserCheck,
  Layers,
  Microscope,
  TrendingDown,
  UserMinus,
  Gauge,
  Fingerprint,
} from 'lucide-react'

/* ─────────── ANIMATION HELPERS ─────────── */
function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function StaggerContainer({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        visible: { transition: { staggerChildren: 0.08 } },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function StaggerItem({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─────────── NAV ─────────── */
function Navigation() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'When to use', href: '#when' },
    { label: 'How it works', href: '#how' },
    { label: 'What\u2019s included', href: '#included' },
    { label: 'Diagnostic', href: '#diagnostic' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="h-9 w-9 rounded-lg bg-navy flex items-center justify-center shadow-sm">
            <ShieldCheck className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-navy leading-none">
              Critical Hire
            </span>
            <span className="text-[10px] text-muted-foreground tracking-wide leading-none mt-0.5">
              by Optitude 360
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-navy transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <Button
            size="sm"
            className="bg-navy hover:bg-navy-light text-white shadow-sm transition-all duration-200"
            asChild
          >
            <a href="#book">Book a Review</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-muted-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <motion.div
        initial={false}
        animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="md:hidden overflow-hidden border-t border-border/50"
      >
        <div className="bg-background px-6 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-muted-foreground hover:text-navy transition-colors border-b border-border/30 last:border-0"
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
      </motion.div>
    </header>
  )
}

/* ─────────── HERO ─────────── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/[0.03] via-transparent to-gold-accent/[0.03]" />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      {/* Decorative geometric element */}
      <div className="absolute top-20 right-0 w-80 h-80 lg:w-[500px] lg:h-[500px] opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 500 500" fill="none" className="w-full h-full">
          <rect x="50" y="50" width="400" height="400" stroke="currentColor" strokeWidth="1" rx="2" />
          <rect x="100" y="100" width="300" height="300" stroke="currentColor" strokeWidth="0.5" rx="2" />
          <rect x="150" y="150" width="200" height="200" stroke="currentColor" strokeWidth="0.5" rx="2" />
          <line x1="50" y1="250" x2="450" y2="250" stroke="currentColor" strokeWidth="0.5" />
          <line x1="250" y1="50" x2="250" y2="450" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold-accent mb-6">
              Before you offer the job, test the decision
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-navy leading-[1.12]">
              You have candidates. Now test the decision.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Critical Hire gives businesses experienced, independent
              final-stage selection support before making an offer for a role too
              important to get wrong.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-4 text-base text-muted-foreground/80 leading-relaxed max-w-2xl">
              We work with you while there is still time to act &mdash;
              reviewing the role, testing the candidate evidence, strengthening
              final interviews, challenging assumptions, and assessing the
              decision risk before you commit.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="mt-3 text-base font-medium text-navy/80 leading-relaxed max-w-2xl">
              This is not recruitment. It is not a replacement for HR. It is
              Optitude 360&rsquo;s final-stage selection judgement applied to
              your live hiring decision.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-navy hover:bg-navy-light text-white h-12 px-8 text-base shadow-md hover:shadow-lg transition-all duration-200"
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
                className="h-12 px-8 text-base border-navy/15 text-navy hover:bg-navy/5 hover:border-navy/30 transition-all duration-200"
                asChild
              >
                <a href="#diagnostic">
                  Take the 8-Question Diagnostic
                </a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs text-muted-foreground/60">
              <span>Fixed fee agreed before engagement</span>
              <span className="hidden sm:inline text-muted-foreground/30">&bull;</span>
              <span>Typical timeframe: 3&ndash;5 working days</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="mt-5 text-xs text-muted-foreground/40 italic">
              By Optitude 360 &mdash; applying Executive Search Psychology to
              business-critical hiring decisions.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────── PROBLEM ─────────── */
function ProblemSection() {
  return (
    <section id="problem" className="bg-section-alt relative">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-bold tracking-tight text-navy leading-snug">
              When the candidate looks good, but the decision still matters
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>A poor hire does not usually look poor at interview.</p>
              <p>
                By the final stage, strong candidates are prepared, polished, and
                persuasive. The business is often tired of the process. The
                vacancy needs filling. Stakeholders want progress.
              </p>
              <p className="text-foreground font-semibold">
                That is when hiring decisions become vulnerable.
              </p>
              <p>
                Doubts get softened. Assumptions go untested. Interview
                confidence starts to stand in for evidence.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-12 rounded-xl bg-navy p-8 md:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/[0.03] rounded-full -translate-y-1/2 translate-x-1/2" />
            <p className="text-lg md:text-xl font-semibold mb-3">
              Critical Hire is for that moment.
            </p>
            <p className="text-white/75 leading-relaxed max-w-2xl">
              It gives you senior selection judgement before the offer is made,
              so you can make the appointment with clearer evidence, sharper
              questions, and a better understanding of the risk you are
              accepting.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────── WHAT IT HELPS YOU AVOID ─────────── */
function AvoidSection() {
  const risks = [
    { icon: <UserMinus className="h-4.5 w-4.5" />, label: 'Management distraction' },
    { icon: <AlertTriangle className="h-4.5 w-4.5" />, label: 'Client disruption' },
    { icon: <TrendingDown className="h-4.5 w-4.5" />, label: 'Delivery failure' },
    { icon: <Users className="h-4.5 w-4.5" />, label: 'Team instability' },
    { icon: <Eye className="h-4.5 w-4.5" />, label: 'Cultural damage' },
    { icon: <ShieldCheck className="h-4.5 w-4.5" />, label: 'Compliance or safeguarding concerns' },
    { icon: <Scale className="h-4.5 w-4.5" />, label: 'Loss of confidence in leadership judgement' },
    { icon: <Clock className="h-4.5 w-4.5" />, label: 'The need to restart the search months later' },
  ]

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <FadeIn>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-bold tracking-tight text-navy leading-snug">
              What Critical Hire helps you avoid
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A wrong appointment can cost far more than recruitment fees or
              salary. It can create:
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {risks.map((r) => (
            <StaggerItem key={r.label}>
              <div className="group flex items-center gap-3 rounded-lg border border-border/50 bg-background p-4 hover:border-destructive/20 hover:bg-destructive/[0.02] transition-all duration-200">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-destructive/5 text-destructive/60 group-hover:bg-destructive/10 group-hover:text-destructive/80 transition-all duration-200">
                  {r.icon}
                </div>
                <span className="text-sm text-foreground leading-snug">{r.label}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <p className="mt-8 text-sm font-medium text-navy/70 italic">
            The safest time to reduce that risk is before the person joins the business.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────── WHO THIS IS FOR ─────────── */
function WhoSection() {
  const sectors = [
    'Owner-managed businesses',
    'Founder-led SMEs',
    'Professional-services firms',
    'Engineering & manufacturing',
    'Technology & software',
    'Life-sciences & technical',
    'Care, veterinary & specialist education',
    'Growing businesses making first management hire',
  ]

  const roles = [
    'Operations Manager',
    'Finance Manager',
    'Sales Manager',
    'Practice Manager',
    'Technical Lead',
    'Production Manager',
    'Quality Manager',
    'Registered Manager',
    'Head of People',
    'Lab Manager',
    'Commercial Manager',
    'Senior professional-services hire',
  ]

  return (
    <section id="when" className="bg-section-alt">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-bold tracking-tight text-navy leading-snug">
            Who this is for
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
            Critical Hire is for businesses that already have candidates and are
            close to making a decision on a role that matters.
          </p>
        </FadeIn>

        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          {/* Sectors */}
          <FadeIn delay={0.1}>
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-accent mb-5">
                Particularly useful for
              </p>
              <ul className="space-y-3">
                {sectors.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-green-dark shrink-0" />
                    <span className="text-sm leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Roles */}
          <FadeIn delay={0.2}>
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-accent mb-5">
                Typical roles
              </p>
              <div className="flex flex-wrap gap-2">
                {roles.map((r) => (
                  <span
                    key={r}
                    className="inline-flex items-center rounded-md bg-background border border-border/50 px-3 py-1.5 text-sm text-foreground hover:border-navy/25 hover:bg-navy/[0.02] transition-all duration-200 cursor-default"
                  >
                    {r}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border/50 space-y-2">
                <p className="text-sm font-semibold text-navy">
                  The role does not have to be executive.
                </p>
                <p className="text-sm font-semibold text-gold-accent">
                  It has to be consequential.
                </p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  If the wrong person would create serious disruption, it is a Critical Hire.
                </p>
              </div>
            </div>
          </FadeIn>
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
      title: 'We clarify what is really at stake',
      desc: 'We begin with the role, the business context, and the cost of getting the appointment wrong.',
      detail: 'This includes what success needs to look like, where the role could fail, what pressure the business is under, and what evidence is needed before making the offer.',
      icon: <Target className="h-5 w-5" />,
    },
    {
      num: '02',
      title: 'We strengthen the final selection process',
      desc: 'We review what has already happened and identify what still needs testing.',
      detail: 'Depending on the situation, this may include final interview design, attitudinal-based selection questions, role-specific scenarios, or independent questioning of the candidate.',
      icon: <ClipboardCheck className="h-5 w-5" />,
    },
    {
      num: '03',
      title: 'We test the candidate evidence directly',
      desc: 'Critical Hire is not just a desk review.',
      detail: 'Where appropriate, we can attend final interviews, ask questions directly, or interview candidates on your behalf. The aim is to understand how the candidate thinks, decides, responds to pressure, handles ambiguity, and fits the real conditions of the role.',
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      num: '04',
      title: 'We test the decision before offer',
      desc: 'We look at the strength of the evidence behind the appointment.',
      detail: 'What is known? What is still being assumed? What has not been tested? Where are stakeholders aligned or divided? Is the decision being made on evidence, or under pressure to finish the process?',
      icon: <Search className="h-5 w-5" />,
    },
    {
      num: '05',
      title: 'You receive a clear decision view',
      desc: 'You receive a Critical Hire Decision Brief setting out the key findings, risks, evidence gaps, fit considerations, and recommended next steps before the offer is made.',
      detail: 'The final decision remains yours. But you make it with better evidence.',
      icon: <FileCheck className="h-5 w-5" />,
    },
  ]

  return (
    <section id="how">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-bold tracking-tight text-navy leading-snug">
            How Critical Hire works
          </h2>
        </FadeIn>

        <div className="mt-14 space-y-0">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.08}>
              <div className="relative flex gap-6 md:gap-8">
                {/* Left: step number + connector */}
                <div className="flex flex-col items-center shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white font-mono text-sm font-semibold shadow-md cursor-default"
                  >
                    {step.num}
                  </motion.div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-navy/20 to-border/50 min-h-[24px]" />
                  )}
                </div>

                {/* Right: content */}
                <div className="pb-10 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-navy/40">{step.icon}</div>
                    <h3 className="font-semibold text-navy text-base md:text-lg">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {step.desc}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1.5">
                    {step.detail}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────── WHAT'S INCLUDED ─────────── */
function IncludedSection() {
  const items = [
    'Role and risk calibration',
    'Success criteria review',
    'Final interview design',
    'Attitudinal-based selection questions',
    'Attendance at client interviews',
    'Independent candidate questioning',
    'Candidate interviews conducted on your behalf, where appropriate',
    'Review of candidate evidence gathered so far',
    'Candidate fit and evidence review',
    'Stakeholder alignment review',
    'Decision-risk analysis',
    'Offer/no-offer considerations',
    'Critical Hire Decision Brief',
    'Optional 30/60/90-day early-risk watchpoints',
    'Optional registered psychological testing through specialist partner Talent Praxis Group',
  ]

  return (
    <section id="included" className="bg-section-alt">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-bold tracking-tight text-navy leading-snug">
            What may be included
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
            Critical Hire is scoped around the role, the risk, the candidates,
            and how much support you need before making the offer. A review may
            include:
          </p>
        </FadeIn>

        <StaggerContainer className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1">
          {items.map((item) => (
            <StaggerItem key={item}>
              <div className="flex items-start gap-2.5 py-2.5">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-dark shrink-0" />
                <span className="text-sm text-foreground leading-relaxed">{item}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

/* ─────────── WHAT YOU RECEIVE ─────────── */
function ReceiveSection() {
  const briefItems = [
    'What the role really requires',
    'What evidence supports the preferred candidate',
    'What remains untested',
    'Where candidate fit looks strong',
    'Where risk remains',
    'What final questions should be resolved',
    'Whether the decision is being made with sufficient confidence',
    'What to watch if the offer proceeds',
  ]

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <FadeIn>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-bold tracking-tight text-navy leading-snug">
                What you receive
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                You receive a concise <strong className="text-foreground">Critical Hire Decision Brief</strong> covering:
              </p>
            </div>
          </FadeIn>

          <div />
        </div>

        {/* Decision Brief mockup */}
        <FadeIn delay={0.15}>
          <div className="mt-2 max-w-2xl">
            <div className="rounded-xl border border-navy/10 bg-white shadow-sm overflow-hidden">
              {/* Brief header */}
              <div className="bg-navy px-6 py-4 flex items-center gap-3">
                <FileCheck className="h-5 w-5 text-white/80" />
                <span className="text-sm font-semibold text-white tracking-wide">
                  Critical Hire Decision Brief
                </span>
              </div>
              {/* Brief content */}
              <div className="px-6 py-5 space-y-0">
                {briefItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 py-3 border-b border-border/30 last:border-0 group"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-navy/5 text-navy text-[10px] font-bold shrink-0 group-hover:bg-navy/10 transition-colors">
                      {i + 1}
                    </div>
                    <span className="text-sm text-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 bg-muted/30 border-t border-border/30">
                <p className="text-xs text-muted-foreground italic">
                  This gives the business a clearer view before committing.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────── ATTITUDINAL-BASED SELECTION ─────────── */
function AttitudinalSection() {
  return (
    <section className="bg-section-alt">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-navy/5 mb-6">
              <Fingerprint className="h-6 w-6 text-navy" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
              Attitudinal-based selection
            </h2>
            <p className="mt-2 text-lg text-muted-foreground font-medium">
              Beyond experience. Beyond interview polish.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-left max-w-2xl mx-auto">
              <p>
                Many hiring processes test what a candidate has done.
              </p>
              <p>
                Critical Hire also examines how they are likely to think,
                respond, adapt, take responsibility, and perform when the role
                becomes difficult.
              </p>
              <p className="text-foreground font-medium">
                This is the basis of Optitude 360&rsquo;s attitudinal-based
                selection approach.
              </p>
              <p>
                It is especially useful when a candidate has strong credentials,
                but the business needs to understand whether they are right for
                the actual conditions of the role.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────── OPTIONAL PSYCHOLOGICAL EVALUATION ─────────── */
function PsychologicalSection() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-navy/5 mb-6">
              <Microscope className="h-6 w-6 text-navy" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
              Optional psychological evaluation
            </h2>
            <p className="mt-2 text-lg text-muted-foreground font-medium">
              Additional evidence where the role justifies it.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Where deeper assessment is appropriate, registered psychological
                testing can be provided through specialist partner{' '}
                <strong className="text-foreground">Talent Praxis Group</strong>.
              </p>
              <p>
                Testing is used selectively. It is not generic psychometric
                testing, not a clinical assessment, and not a substitute for
                experienced selection judgement.
              </p>
              <p>
                It is an additional source of evidence where the appointment risk
                justifies deeper evaluation.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────── WHO CONDUCTS THE REVIEW ─────────── */
function WhoConductsSection() {
  return (
    <section className="bg-section-alt">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <FadeIn>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
              Who conducts the review
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Critical Hire is led by{' '}
              <strong className="text-foreground">Simon Childs of Optitude 360</strong>,
              drawing on 30 years of interviewing, search, selection, and
              candidate evaluation.
            </p>
            <p>
              That experience is applied directly to your live hiring decision:
              the role, the candidates, the interviews, the evidence, the risks,
              and the final judgement before offer.
            </p>
            <p>
              Where useful, optional registered psychological testing can be
              provided through specialist partner{' '}
              <strong className="text-foreground">Talent Praxis Group</strong>.
            </p>
            <p>
              Testing is used selectively. It is an additional source of
              evidence, not a substitute for experienced selection judgement.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-border/50 bg-background p-6 text-center hover:shadow-md hover:border-navy/15 transition-all duration-300">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-navy/5 mb-3">
                <UserCheck className="h-5 w-5 text-navy" />
              </div>
              <h3 className="font-semibold text-navy text-sm mb-1">
                30 years&rsquo; experience
              </h3>
              <p className="text-xs text-muted-foreground">
                Interviewing, search, selection, evaluation
              </p>
            </div>
            <div className="rounded-xl border border-border/50 bg-background p-6 text-center hover:shadow-md hover:border-navy/15 transition-all duration-300">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-navy/5 mb-3">
                <Layers className="h-5 w-5 text-navy" />
              </div>
              <h3 className="font-semibold text-navy text-sm mb-1">
                Applied to your decision
              </h3>
              <p className="text-xs text-muted-foreground">
                Not theoretical. Live judgement.
              </p>
            </div>
            <div className="rounded-xl border border-border/50 bg-background p-6 text-center hover:shadow-md hover:border-navy/15 transition-all duration-300">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-navy/5 mb-3">
                <Microscope className="h-5 w-5 text-navy" />
              </div>
              <h3 className="font-semibold text-navy text-sm mb-1">
                Optional psychological testing
              </h3>
              <p className="text-xs text-muted-foreground">
                Through Talent Praxis Group
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────── COMMERCIAL TERMS ─────────── */
function CommercialSection() {
  const terms = [
    { label: 'Fee', value: 'Fixed fee agreed before engagement.', icon: <Scale className="h-5 w-5" /> },
    { label: 'Timeframe', value: 'Most reviews are completed within 3\u20135 working days, depending on scope, candidate availability, interview scheduling, and whether optional psychological testing is included.', icon: <Clock className="h-5 w-5" /> },
    { label: 'Designed for', value: 'Final-stage hiring decisions where candidates already exist.', icon: <Target className="h-5 w-5" /> },
    { label: 'Psychological testing', value: 'Optional registered psychological testing is quoted separately where appropriate.', icon: <Microscope className="h-5 w-5" /> },
  ]

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
            Commercial terms
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-10 grid sm:grid-cols-2 gap-5">
          {terms.map((t) => (
            <StaggerItem key={t.label}>
              <div className="rounded-xl border border-border/50 bg-background p-6 hover:border-navy/15 hover:shadow-sm transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-navy/50">{t.icon}</div>
                  <h3 className="font-semibold text-navy text-sm">{t.label}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.value}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

/* ─────────── DECISION CLARITY PROMISE ─────────── */
function PromiseSection() {
  const promises = [
    'What your decision is really based on',
    'What has been properly tested',
    'What is still being assumed',
    'Where candidate confidence may be masking risk',
    'Where stakeholders are aligned or divided',
    'Whether the decision is being made on evidence, or under pressure to finish the process',
  ]

  return (
    <section className="bg-section-alt">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-accent/10 border border-gold-accent/20 mb-6">
              <ShieldCheck className="h-4 w-4 text-gold-accent" />
              <span className="text-xs font-semibold tracking-wider uppercase text-gold-accent">
                Decision Clarity Promise
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
              A clearer decision before you commit.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Critical Hire does not pretend to remove all hiring risk. No
              serious selection adviser should promise that.
            </p>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              What we do provide is a clearer, more disciplined view of the
              appointment before you make the offer.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 text-foreground font-medium">You will understand:</p>
            <ul className="mt-4 space-y-3">
              {promises.map((p) => (
                <li key={p} className="flex items-start gap-3 text-foreground">
                  <Eye className="h-4 w-4 mt-0.5 text-gold-accent shrink-0" />
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 rounded-xl border-2 border-gold-accent/20 bg-gold-accent/[0.04] p-6 md:p-8">
              <p className="text-foreground leading-relaxed">
                If the review does not give you a sharper understanding of the
                role, the evidence, the candidate risk, and the questions still
                worth resolving before offer,{' '}
                <strong className="text-navy font-semibold">
                  we will complete an additional review session at no extra cost.
                </strong>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────── DIAGNOSTIC ─────────── */
const diagnosticQuestions = [
  {
    id: 1,
    question: 'How critical is this role to business performance, clients, or delivery?',
    options: [
      { label: 'Low — the role is important but not central', score: 0 },
      { label: 'Moderate — poor performance would cause some disruption', score: 1 },
      { label: 'High — the wrong person would significantly affect the business', score: 2 },
    ],
  },
  {
    id: 2,
    question: 'How many candidates are you deciding between?',
    options: [
      { label: 'Three or more — we have a genuine choice', score: 0 },
      { label: 'Two — it is between two candidates', score: 1 },
      { label: 'One — we have a preferred candidate only', score: 2 },
    ],
  },
  {
    id: 3,
    question: 'Do stakeholders agree on who should be appointed?',
    options: [
      { label: 'Yes — there is clear alignment', score: 0 },
      { label: 'Mostly — but some doubts remain', score: 1 },
      { label: 'No — stakeholders disagree or have different concerns', score: 2 },
    ],
  },
  {
    id: 4,
    question: 'Has this role been filled before? If so, how did it go?',
    options: [
      { label: 'New role — no previous appointment', score: 0 },
      { label: 'Filled before and it went well', score: 0 },
      { label: 'Filled before and it did not work out', score: 2 },
    ],
  },
  {
    id: 5,
    question: 'How much pressure is the business under to fill this vacancy quickly?',
    options: [
      { label: 'Low — we can take our time', score: 0 },
      { label: 'Moderate — there is some urgency', score: 1 },
      { label: 'High — the vacancy is causing real problems', score: 2 },
    ],
  },
  {
    id: 6,
    question: 'Has the preferred candidate been tested beyond interview — for example, with scenarios, references, or practical assessment?',
    options: [
      { label: 'Yes — the evidence is reasonably thorough', score: 0 },
      { label: 'Partly — some areas have been tested, some have not', score: 1 },
      { label: 'No — the decision is largely based on interview performance', score: 2 },
    ],
  },
  {
    id: 7,
    question: 'Are there any doubts or concerns about the preferred candidate that have been rationalised or set aside?',
    options: [
      { label: 'No — we are confident in the appointment', score: 0 },
      { label: 'Minor concerns — but nothing that feels decisive', score: 1 },
      { label: 'Yes — there are concerns we have not fully resolved', score: 2 },
    ],
  },
  {
    id: 8,
    question: 'If this appointment does not work out, how difficult would it be to correct?',
    options: [
      { label: 'Manageable — we could adjust relatively quickly', score: 0 },
      { label: 'Costly — it would take significant time and resource', score: 1 },
      { label: 'Serious — it would damage clients, culture, compliance, or growth', score: 2 },
    ],
  },
]

function getResult(score: number): { level: string; colour: string; bg: string; border: string; summary: string; recommendation: string } {
  if (score <= 4) {
    return {
      level: 'Lower Risk',
      colour: 'text-green-dark',
      bg: 'bg-green-dark/5',
      border: 'border-green-dark/20',
      summary: 'Based on your answers, this appointment carries a lower level of risk. The evidence appears reasonably strong and the decision context is manageable.',
      recommendation: 'A Critical Hire Review may still add value, but the urgency is lower. If you would like reassurance before the offer, you can book a review at any time.',
    }
  }
  if (score <= 10) {
    return {
      level: 'Moderate Risk',
      colour: 'text-gold-accent',
      bg: 'bg-gold-accent/5',
      border: 'border-gold-accent/20',
      summary: 'Based on your answers, this appointment carries moderate risk. There are areas where the evidence is incomplete, pressure is building, or concerns have not been fully tested.',
      recommendation: 'A Critical Hire Review would strengthen the decision before the offer is made. We recommend booking a review before committing.',
    }
  }
  return {
    level: 'High Risk',
    colour: 'text-destructive',
    bg: 'bg-destructive/5',
    border: 'border-destructive/20',
    summary: 'Based on your answers, this appointment carries significant risk. The evidence base may be thin, pressure is high, stakeholders may not be aligned, and the consequences of a poor hire would be serious.',
    recommendation: 'We strongly recommend a Critical Hire Review before making the offer. Book a review now to test the decision before you commit.',
  }
}

function DiagnosticSection() {
  const [started, setStarted] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResult, setShowResult] = useState(false)

  const totalScore = Object.values(answers).reduce((sum, s) => sum + s, 0)
  const result = getResult(totalScore)
  const answeredCount = Object.keys(answers).length

  function handleAnswer(score: number) {
    const q = diagnosticQuestions[currentQ]
    setAnswers({ ...answers, [q.id]: score })
    if (currentQ < diagnosticQuestions.length - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      setShowResult(true)
    }
  }

  function handleBack() {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1)
    }
  }

  function handleReset() {
    setStarted(false)
    setCurrentQ(0)
    setAnswers({})
    setShowResult(false)
  }

  // Intro state
  if (!started) {
    const useWhen = [
      'You are close to making an offer',
      'The role matters',
      'The candidate looks strong',
      'The consequences of getting it wrong would be serious',
    ]

    return (
      <section id="diagnostic">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-navy/5 mb-6">
                  <Brain className="h-7 w-7 text-navy" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
                  Not sure whether the role needs a review?
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Start with the{' '}
                  <strong className="text-foreground">8-question Hiring Risk Diagnostic</strong>.
                  It helps you judge whether the appointment is carrying enough risk
                  to justify independent final-stage selection support.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-8">
                <p className="text-sm font-medium text-navy mb-4">Use it when:</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {useWhen.map((u) => (
                    <div key={u} className="flex items-center gap-3 rounded-lg bg-section-alt p-3.5">
                      <CheckCircle2 className="h-4 w-4 text-navy/50 shrink-0" />
                      <span className="text-sm text-foreground">{u}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  className="h-12 px-8 text-base bg-navy hover:bg-navy-light text-white shadow-sm transition-all duration-200"
                  onClick={() => setStarted(true)}
                >
                  Take the 8-Question Diagnostic
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 text-base border-navy/15 text-navy hover:bg-navy/5 hover:border-navy/30 transition-all duration-200"
                  asChild
                >
                  <a href="#book">
                    Book a Critical Hire Review
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    )
  }

  // Question state
  if (!showResult) {
    const q = diagnosticQuestions[currentQ]
    const progress = ((currentQ) / diagnosticQuestions.length) * 100

    return (
      <section id="diagnostic">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-2xl mx-auto">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                <span>Question {currentQ + 1} of {diagnosticQuestions.length}</span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <div className="h-1.5 bg-border/50 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-navy rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* Question */}
            <motion.div
              key={q.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg md:text-xl font-semibold text-navy mb-6 leading-snug">
                {q.question}
              </h3>

              <div className="space-y-3">
                {q.options.map((opt, i) => {
                  const isSelected = answers[q.id] === opt.score
                  return (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt.score)}
                      className={`w-full text-left rounded-xl border p-4 transition-all duration-200 cursor-pointer group ${
                        isSelected
                          ? 'border-navy bg-navy/5 shadow-sm'
                          : 'border-border/50 bg-background hover:border-navy/20 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 mt-0.5 transition-colors duration-200 ${
                          isSelected
                            ? 'border-navy bg-navy text-white'
                            : 'border-border group-hover:border-navy/40'
                        }`}>
                          {isSelected && <CheckCircle2 className="h-3.5 w-3.5" />}
                        </div>
                        <span className={`text-sm leading-relaxed ${isSelected ? 'text-navy font-medium' : 'text-foreground'}`}>
                          {opt.label}
                        </span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="mt-6 flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBack}
                disabled={currentQ === 0}
                className="text-muted-foreground"
              >
                Back
              </Button>
              <button
                onClick={handleReset}
                className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors"
              >
                Start over
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Result state
  return (
    <section id="diagnostic">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Result header */}
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center h-16 w-16 rounded-2xl ${result.bg} mb-4`}>
                <Gauge className={`h-8 w-8 ${result.colour}`} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
                Your result: {result.level}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Score: {totalScore} out of 16
              </p>
            </div>

            {/* Score breakdown bar */}
            <div className="mb-8">
              <div className="h-2 bg-border/30 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    totalScore <= 4 ? 'bg-green-dark' : totalScore <= 10 ? 'bg-gold-accent' : 'bg-destructive'
                  }`}
                  style={{ width: `${(totalScore / 16) * 100}%` }}
                />
              </div>
              <div className="flex justify-between mt-1.5 text-[10px] text-muted-foreground/50">
                <span>Lower risk</span>
                <span>Moderate risk</span>
                <span>High risk</span>
              </div>
            </div>

            {/* Summary */}
            <div className={`rounded-xl border-2 ${result.border} ${result.bg} p-6 mb-6`}>
              <p className="text-foreground leading-relaxed">
                {result.summary}
              </p>
            </div>

            {/* Recommendation */}
            <div className="rounded-xl border border-border/50 bg-background p-6 mb-8">
              <p className="text-sm font-medium text-navy mb-2">Recommendation</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {result.recommendation}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {(totalScore > 4) && (
                <Button
                  size="lg"
                  className="h-12 px-8 text-base bg-navy hover:bg-navy-light text-white shadow-md hover:shadow-lg transition-all duration-200"
                  asChild
                >
                  <a href="#book">
                    Book a Critical Hire Review
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base border-navy/15 text-navy hover:bg-navy/5 hover:border-navy/30 transition-all duration-200"
                onClick={handleReset}
              >
                Retake the Diagnostic
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─────────── WHAT IT IS NOT ─────────── */
function NotSection() {
  const notItems = [
    {
      isNot: 'Not recruitment',
      desc: 'We do not replace your recruiter or run the candidate search.',
      icon: <Search className="h-5 w-5" />,
    },
    {
      isNot: 'Not HR replacement',
      desc: 'We support internal decision-makers with independent judgement at the final stage.',
      icon: <Users className="h-5 w-5" />,
    },
    {
      isNot: 'Not generic psychometric testing',
      desc: 'Psychological testing is optional and only used where it adds useful evidence.',
      icon: <Microscope className="h-5 w-5" />,
    },
  ]

  return (
    <section className="bg-section-alt">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
            What Critical Hire is not
          </h2>
          <p className="mt-1 text-muted-foreground font-medium">Clear boundaries.</p>
        </FadeIn>

        <StaggerContainer className="mt-10 grid md:grid-cols-3 gap-5">
          {notItems.map((d) => (
            <StaggerItem key={d.isNot}>
              <div className="rounded-xl border border-border/50 bg-background p-6 hover:border-destructive/15 hover:shadow-sm transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <XCircle className="h-5 w-5 text-destructive/40" />
                  <h3 className="font-semibold text-foreground text-sm">{d.isNot}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="mt-8 rounded-xl bg-navy p-6 md:p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy-light to-navy opacity-50" />
            <div className="relative">
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/40 mb-2">
                It is
              </p>
              <p className="text-lg md:text-xl font-semibold text-white">
                Final-stage selection support
              </p>
              <p className="text-sm text-white/60 mt-2 max-w-md mx-auto leading-relaxed">
                For businesses that already have candidates and want the decision tested before making the offer.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────── FAQ ─────────── */
function FAQSection() {
  const faqs = [
    {
      q: 'Is Critical Hire for us if we already have candidates?',
      a: 'Yes. That is exactly when Critical Hire is most useful. It is designed for businesses that already have a shortlist or preferred candidate and want independent selection judgement before making the offer.',
    },
    {
      q: 'Is this recruitment?',
      a: 'No. Recruitment helps you find candidates. Critical Hire helps you test the final decision. It is used after candidates have been identified, when the business is close to making an appointment.',
    },
    {
      q: 'Do you replace our HR team?',
      a: 'No. Critical Hire supports HR, hiring managers, founders, MDs, and leadership teams by adding independent final-stage judgement. It strengthens the decision process without taking ownership away from the client.',
    },
    {
      q: 'Can you interview the candidates?',
      a: 'Yes, where appropriate. Critical Hire may include attendance at client interviews, independent candidate questioning, or candidate interviews conducted on your behalf. This is agreed at the start of the engagement.',
    },
    {
      q: 'What if we only have one preferred candidate?',
      a: 'That can still be a good use of Critical Hire. A single-candidate review can test whether the decision is properly evidenced, what remains unclear, and what risk the business would be accepting by making the offer.',
    },
    {
      q: 'Is psychological testing included?',
      a: 'Psychological testing is optional. Where appropriate, registered psychological testing can be provided through specialist partner Talent Praxis Group. It is used as an additional source of evidence, not as a standalone decision tool.',
    },
    {
      q: 'How quickly can this be done?',
      a: 'Most reviews can be completed within 3\u20135 working days, depending on the number of candidates, interview availability, scope, and whether optional psychological testing is included.',
    },
    {
      q: 'How much does it cost?',
      a: 'Critical Hire is provided on a fixed-fee basis, agreed before engagement. The fee depends on scope, number of candidates, level of interview involvement, and whether optional psychological testing is required.',
    },
    {
      q: 'Will you tell us whether to hire the candidate?',
      a: 'We will give you a clear, independent view of the evidence, fit, risks, concerns, and decision considerations. The final hiring decision remains with you. The purpose is to help you make that decision with more confidence and less reliance on instinct.',
    },
  ]

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
            Frequently asked questions
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-10 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-border/60"
                >
                  <AccordionTrigger className="text-left text-sm md:text-base font-medium text-navy hover:no-underline hover:text-navy-light transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────── FINAL CTA ─────────── */
function FinalCTASection() {
  return (
    <section id="book" className="bg-section-alt">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-bold tracking-tight text-navy leading-snug">
              You have candidates. Now test the decision.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              If the role is too important to get wrong, do not rely on interview
              confidence alone. Critical Hire gives you independent final-stage
              selection support before you commit.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-navy hover:bg-navy-light text-white h-12 px-8 text-base shadow-md hover:shadow-lg transition-all duration-200"
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
                className="h-12 px-8 text-base border-navy/15 text-navy hover:bg-navy/5 hover:border-navy/30 transition-all duration-200"
                asChild
              >
                <a href="#diagnostic">Take the Hiring Risk Diagnostic</a>
              </Button>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs text-muted-foreground/60 justify-center">
              <span>Fixed fee agreed before engagement</span>
              <span className="hidden sm:inline text-muted-foreground/30">&bull;</span>
              <span>Typical review timeframe: 3&ndash;5 working days</span>
            </div>
          </div>
        </FadeIn>
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
            <p className="text-xs text-white/40 max-w-sm leading-relaxed">
              By Optitude 360 &mdash; applying Executive Search Psychology to
              business-critical hiring decisions.
            </p>
          </div>

          <div className="flex flex-col gap-3">
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
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/40">
              <a href="mailto:simon.childs@optitude360.com" className="hover:text-white/70 transition-colors">
                simon.childs@optitude360.com
              </a>
              <a href="tel:02071837192" className="hover:text-white/70 transition-colors">
                020 7183 7192
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-white/10" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/40">
            <a href="/critical-hire/privacy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </a>
            <a href="/critical-hire/terms" className="hover:text-white/70 transition-colors">
              Terms of Engagement
            </a>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <p className="text-xs text-white/30 leading-relaxed">
            Optitude 360 and Optitude OCC are trading names of Optitude Business
            Solutions Ltd, registered in England and Wales under company number
            12557209. Registered office: 124&ndash;128 City Road, London,
            England, EC1V 2NX. VAT number: 353967755.
          </p>
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Optitude Business Solutions Ltd.
            All rights reserved.
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
        <AvoidSection />
        <WhoSection />
        <HowSection />
        <IncludedSection />
        <ReceiveSection />
        <AttitudinalSection />
        <PsychologicalSection />
        <WhoConductsSection />
        <CommercialSection />
        <PromiseSection />
        <DiagnosticSection />
        <NotSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
