import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import { useEffect, useRef } from 'react'
import '../styles/main.css'

function BusCursor() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let x = -100, y = -100
    let targetX = -100, targetY = -100
    let rafId

    const onMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const animate = () => {
      x += (targetX - x) * 0.14
      y += (targetY - y) * 0.14
      el.style.left = `${x}px`
      el.style.top = `${y}px`
      rafId = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(animate)
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        fontSize: '18px',
        transform: 'translate(-50%, -50%)',
        userSelect: 'none',
        lineHeight: 1,
        top: 0,
        left: 0,
      }}
    >
      🚌
    </div>
  )
}

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      {/* SVG filter definitions used across the site */}
      <svg
        style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
        aria-hidden="true"
      >
        <defs>
          <filter id="hand-drawn" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.035"
              numOctaves="4"
              seed="5"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="3"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <filter id="watercolor-splash" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015"
              numOctaves="5"
              seed="8"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" />
          </filter>
        </defs>
      </svg>
      <BusCursor />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
