'use client'

import { ShieldCheck } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-navy-dark">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="h-6 w-6 text-gold-accent" />
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Privacy Policy
            </h1>
          </div>
          <p className="text-white/50 text-sm">
            Critical Hire by Optitude 360 &mdash; Last updated: May 2025
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-navy mb-3">1. Who we are</h2>
            <p>
              Critical Hire is a service provided by <strong className="text-foreground">Optitude Business Solutions Ltd</strong>,
              registered in England and Wales under company number <strong className="text-foreground">12557209</strong>.
              Our registered office is at 124&ndash;128 City Road, London, England, EC1V 2NX.
              VAT number: 353967755.
            </p>
            <p>
              Optitude 360 and Optitude OCC are trading names of Optitude Business Solutions Ltd.
            </p>
            <p>
              For data protection queries, contact us at:{' '}
              <a href="mailto:simon.childs@optitude360.com" className="text-navy underline hover:text-navy/70">
                simon.childs@optitude360.com
              </a>{' '}
              or call <strong className="text-foreground">020 7183 7192</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mb-3">2. What personal data we collect</h2>
            <p>We may collect the following personal data when you enquire about or engage the Critical Hire service:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Your name, job title, and organisation</li>
              <li>Contact details (email address, phone number)</li>
              <li>Information about the role you are hiring for</li>
              <li>Information about candidates under consideration</li>
              <li>Business context relevant to the hiring decision</li>
              <li>Any documents you share with us as part of the review</li>
            </ul>
            <p className="mt-2">
              If you use our optional psychological testing service through specialist partner{' '}
              <strong className="text-foreground">Talent Praxis Group</strong>, additional personal data
              (psychological test results) will be collected. Talent Praxis Group acts as a separate
              data controller for the testing data they generate.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mb-3">3. How we use your personal data</h2>
            <p>We use personal data to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Respond to your enquiry and assess whether Critical Hire is suitable for your situation</li>
              <li>Scope, plan, and deliver the Critical Hire review</li>
              <li>Communicate with you about the review process</li>
              <li>Produce the Critical Hire Decision Brief</li>
              <li>Fulfil our contractual obligations to you</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-2">
              We do not use your personal data for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mb-3">4. Legal basis for processing</h2>
            <p>We process personal data under the following legal bases (UK GDPR):</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong className="text-foreground">Contractual necessity</strong> (Article 6(1)(b)) &mdash; to deliver the Critical Hire service you have engaged us to provide</li>
              <li><strong className="text-foreground">Legitimate interests</strong> (Article 6(1)(f)) &mdash; to respond to enquiries and manage our business relationships</li>
              <li><strong className="text-foreground">Legal obligation</strong> (Article 6(1)(c)) &mdash; where we are required to retain data for legal or regulatory reasons</li>
            </ul>
            <p className="mt-2">
              Where we process special category data (e.g. psychological test results via Talent Praxis Group),
              we do so only with your explicit consent (Article 9(2)(a)) and Article 9(2)(g) for substantial public interest.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mb-3">5. Who we share data with</h2>
            <p>We do not sell or rent your personal data. We may share data with:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong className="text-foreground">Talent Praxis Group</strong> &mdash; only if you engage optional psychological testing. They act as a separate data controller for testing data</li>
              <li><strong className="text-foreground">Professional advisers</strong> &mdash; such as our accountant or lawyer, where necessary for legal compliance</li>
              <li><strong className="text-foreground">Legal authorities</strong> &mdash; if required by law or regulation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mb-3">6. International transfers</h2>
            <p>
              Your data is stored and processed within the United Kingdom. We do not transfer personal data outside the UK.
              If this changes, we will update this policy and ensure appropriate safeguards are in place.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mb-3">7. How long we keep your data</h2>
            <p>We retain personal data only for as long as necessary:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong className="text-foreground">Enquiries that do not proceed</strong> &mdash; deleted within 12 months</li>
              <li><strong className="text-foreground">Completed engagements</strong> &mdash; retained for 6 years from the end of the engagement, in line with the Limitation Act 1980 and professional best practice</li>
              <li><strong className="text-foreground">Psychological testing data</strong> &mdash; retained by Talent Praxis Group in accordance with their own data retention policy and professional requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mb-3">8. Your rights under UK GDPR</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong className="text-foreground">Access</strong> &mdash; request a copy of the personal data we hold about you</li>
              <li><strong className="text-foreground">Rectification</strong> &mdash; ask us to correct inaccurate data</li>
              <li><strong className="text-foreground">Erasure</strong> &mdash; request deletion of your data, subject to legal retention requirements</li>
              <li><strong className="text-foreground">Restriction</strong> &mdash; ask us to limit how we process your data</li>
              <li><strong className="text-foreground">Data portability</strong> &mdash; receive your data in a structured, machine-readable format</li>
              <li><strong className="text-foreground">Object</strong> &mdash; object to processing based on legitimate interests</li>
              <li><strong className="text-foreground">Withdraw consent</strong> &mdash; where processing is based on consent, withdraw it at any time</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:simon.childs@optitude360.com" className="text-navy underline hover:text-navy/70">
                simon.childs@optitude360.com
              </a>.
            </p>
            <p className="mt-2">
              If you are unhappy with how we handle your data, you have the right to complain to the{' '}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-navy underline hover:text-navy/70">
                Information Commissioner&apos;s Office (ICO)
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mb-3">9. Cookies and website tracking</h2>
            <p>
              This website does not currently set any cookies or use any tracking technologies (analytics, pixels, or similar).
            </p>
            <p className="mt-2">
              If we introduce cookies in future (for example, by adding a calendar booking tool or website analytics),
              we will update this policy and provide a cookie consent mechanism before any cookies are set.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mb-3">10. Data security</h2>
            <p>
              We take appropriate technical and organisational measures to protect your personal data against
              unauthorised access, loss, or destruction. This includes secure storage of documents,
              encrypted communications where appropriate, and access limited to authorised personnel only.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mb-3">11. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The current version will always be available
              on this page with the date of the last update. We encourage you to review it periodically.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy mb-3">12. Contact</h2>
            <p>
              For any questions about this Privacy Policy or how we handle personal data:
            </p>
            <div className="mt-3 rounded-lg border border-border/50 bg-muted/30 p-4 text-sm">
              <p><strong className="text-foreground">Optitude Business Solutions Ltd</strong></p>
              <p>124&ndash;128 City Road, London, England, EC1V 2NX</p>
              <p>Company number: 12557209</p>
              <p>
                Email:{' '}
                <a href="mailto:simon.childs@optitude360.com" className="text-navy underline hover:text-navy/70">
                  simon.childs@optitude360.com
                </a>
              </p>
              <p>Phone: 020 7183 7192</p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <Link
            href="/critical-hire"
            className="text-sm text-navy hover:text-navy/70 underline"
          >
            &larr; Back to Critical Hire
          </Link>
        </div>
      </div>
    </div>
  )
}
