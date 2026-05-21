import { FileCheck } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Terms of Engagement",
  description: "Terms of Engagement for Critical Hire by Optitude 360. Understand the scope, fees, timeframe, confidentiality, and responsibilities for our final-stage selection support service.",
  alternates: {
    canonical: "https://criticalhire.co.uk/terms",
  },
  openGraph: {
    title: "Terms of Engagement | Critical Hire by Optitude 360",
    description: "Terms of Engagement for Critical Hire by Optitude 360. Scope, fees, confidentiality, and responsibilities.",
    url: "https://criticalhire.co.uk/terms",
    images: [{ url: "/og-image.png", width: 1344, height: 768, alt: "Critical Hire — Terms of Engagement" }],
  },
}

function BreadcrumbSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://criticalhire.co.uk',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Terms of Engagement',
              item: 'https://criticalhire.co.uk/terms',
            },
          ],
        }),
      }}
    />
  )
}

export default function TermsOfEngagement() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema />
      <div className="border-b border-border bg-navy-dark">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <div className="flex items-center gap-3 mb-4">
            <FileCheck className="h-6 w-6 text-gold-accent" />
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Terms of Engagement
            </h1>
          </div>
          <p className="text-white/50 text-sm">
            Critical Hire by Optitude 360 &mdash; Last updated: May 2025
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <article className="prose prose-slate max-w-none space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-navy mb-3">1. The service</h2>
            <p>
              Critical Hire is a final-stage selection support service provided by{' '}
              <strong className="text-foreground">Optitude Business Solutions Ltd</strong> (company number 12557209),
              trading as Optitude 360.
            </p>
            <p>
              The service provides experienced, independent selection judgement before you make an offer
              for a consequential hire. It does not replace your own decision-making, your HR function,
              or your legal obligations as an employer.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mb-3">2. Scope and engagement</h2>
            <p>
              Each Critical Hire engagement is scoped individually based on the role, the risk,
              the candidates, and the support required. The scope, fee, and timeframe are agreed
              in writing before the engagement begins.
            </p>
            <p>
              No work begins until both parties have confirmed the scope and terms in writing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mb-3">3. Fees and payment</h2>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Fees are fixed and agreed before the engagement begins</li>
              <li>Optional psychological testing through Talent Praxis Group is quoted separately where appropriate</li>
              <li>Invoices are payable within 30 days of issue</li>
              <li>All fees are exclusive of VAT, which is added at the prevailing rate</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mb-3">4. Timeframe</h2>
            <p>
              Most reviews are completed within 3&ndash;5 working days from the start of the engagement,
              depending on scope, candidate availability, interview scheduling, and whether optional
              psychological testing is included.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mb-3">5. Decision Clarity Promise</h2>
            <p>
              If the review does not give you a sharper understanding of the role, the evidence,
              the candidate risk, and the questions still worth resolving before offer, we will
              complete an additional review session at no extra cost.
            </p>
            <p>
              This promise applies to the quality and clarity of the review process and Decision Brief.
              It does not guarantee any specific appointment outcome.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mb-3">6. Your responsibilities</h2>
            <p>As the client, you are responsible for:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Providing accurate and complete information about the role, the business context, and the candidates</li>
              <li>Making candidates available for interviews or assessment at agreed times</li>
              <li>Making the final hiring decision &mdash; Critical Hire provides evidence and judgement support, not the decision itself</li>
              <li>Complying with all applicable employment law and regulations</li>
              <li>Obtaining candidate consent where required for any assessment or testing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mb-3">7. Confidentiality</h2>
            <p>
              All information shared during a Critical Hire engagement is treated as confidential.
              We will not disclose any client or candidate information to third parties without
              your prior written consent, except where required by law.
            </p>
            <p>
              If psychological testing is conducted through Talent Praxis Group, they will handle
              testing data in accordance with their own confidentiality and data protection obligations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mb-3">8. Limitation of liability</h2>
            <p>
              Critical Hire provides experienced selection judgement and evidence-based analysis
              to support your hiring decision. We do not guarantee the outcome of any appointment.
            </p>
            <p>
              Optitude Business Solutions Ltd&rsquo;s total liability under any engagement shall not
              exceed the fee paid for that engagement. We are not liable for indirect, consequential,
              or special damages arising from the appointment or non-appointment of any candidate.
            </p>
            <p>
              Nothing in these terms excludes liability for death or personal injury caused by negligence,
              fraud, or any other liability that cannot be excluded by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mb-3">9. Psychological testing</h2>
            <p>
              Where optional registered psychological testing is provided, it is delivered by{' '}
              <strong className="text-foreground">Talent Praxis Group</strong> as a separate specialist
              provider. Talent Praxis Group is responsible for the selection, administration, and
              interpretation of psychological tests and the data generated.
            </p>
            <p>
              Psychological testing is an additional source of evidence. It is not a standalone
              decision tool and does not replace experienced selection judgement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mb-3">10. Cancellation</h2>
            <p>
              Either party may cancel an engagement by providing written notice. If cancellation
              occurs after work has begun, the client is liable for fees proportionate to the work
              completed up to the date of cancellation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mb-3">11. Governing law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of England and Wales.
              Any disputes arising under these terms shall be subject to the exclusive jurisdiction
              of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mb-3">12. Contact</h2>
            <div className="mt-3 rounded-lg border border-border/50 bg-muted/30 p-4 text-sm">
              <p><strong className="text-foreground">Optitude Business Solutions Ltd</strong></p>
              <p>124&ndash;128 City Road, London, England, EC1V 2NX</p>
              <p>Company number: 12557209 | VAT number: 353967755</p>
              <p>
                Email:{' '}
                <a href="mailto:simon.childs@optitude360.com" className="text-navy underline hover:text-navy/70">
                  simon.childs@optitude360.com
                </a>
              </p>
              <p>Phone: 020 7183 7192</p>
            </div>
          </section>
        </article>

        <div className="mt-12 pt-6 border-t border-border">
          <Link
            href="/"
            className="text-sm text-navy hover:text-navy/70 underline"
          >
            &larr; Back to Critical Hire
          </Link>
        </div>
      </div>
    </div>
  )
}
