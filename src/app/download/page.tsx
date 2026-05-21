import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Download Static Files",
  description: "Download the Critical Hire static site files for self-hosted deployment.",
  robots: { index: false, follow: true },
}

export default function DownloadPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: '#f8f9fa'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '48px',
        maxWidth: '480px',
        width: '90%',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        textAlign: 'center'
      }}>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '12px',
          background: '#1e293b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
          fontSize: '24px'
        }}>
          📦
        </div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>
          Critical Hire — Static Files
        </h1>
        <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '32px', lineHeight: '1.5' }}>
          Download the static site files. Upload and extract in your hosting directory.
        </p>
        <a
          href="/critical-hire-static.zip"
          download="critical-hire-static.zip"
          style={{
            display: 'block',
            width: '100%',
            padding: '14px 24px',
            background: '#1e293b',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            textDecoration: 'none',
            textAlign: 'center',
            marginBottom: '16px'
          }}
        >
          Download critical-hire-static.zip
        </a>
        <p style={{ fontSize: '12px', color: '#94a3b8' }}>
          <a href="/" style={{ color: '#1e293b', textDecoration: 'underline' }}>&larr; Back to Critical Hire</a>
        </p>
      </div>
    </div>
  )
}
