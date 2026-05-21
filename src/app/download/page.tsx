'use client'

import { useEffect, useState } from 'react'

export default function DownloadPage() {
  const [loading, setLoading] = useState(false)

  const handleDownload = async () => {
    setLoading(true)
    try {
      const response = await fetch('/critical-hire/critical-hire-static.zip')
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'critical-hire-static.zip'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (e) {
      alert('Download failed. Please try the direct link below.')
    }
    setLoading(false)
  }

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
          Download the static site files (496KB zip). Upload and extract in your Plesk /critical-hire/ directory.
        </p>
        <button
          onClick={handleDownload}
          disabled={loading}
          style={{
            width: '100%',
            padding: '14px 24px',
            background: '#1e293b',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: loading ? 'wait' : 'pointer',
            opacity: loading ? 0.7 : 1,
            marginBottom: '16px'
          }}
        >
          {loading ? 'Downloading...' : 'Download critical-hire-static.zip'}
        </button>
        <p style={{ fontSize: '12px', color: '#94a3b8' }}>
          or <a href="/critical-hire/critical-hire-static.zip" style={{ color: '#1e293b', textDecoration: 'underline' }}>click here for direct download</a>
        </p>
      </div>
    </div>
  )
}
