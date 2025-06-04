import React from 'react';
import profileImg from '../assets/alexDRfish.jpg';
import heroBg from '../assets/HenrysFork.jpg';

const HeroSection: React.FC = () => (
  <section
  id="hero"
  style={{
    position: 'relative',
    minHeight: '50vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '4rem 0 2rem 0',
    boxSizing: 'border-box'
  }}
>
  {/* Background image with overlay */}
  <div
    style={{
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(25, 118, 210, 0.5)), url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 0
    }}
  />
  {/* Content */}
  <div
    style={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      zIndex: 1,
      maxWidth: 1200,
      width: '100%',
      margin: '0 auto',
      background: 'rgba(0,0,0,0.35)',
      borderRadius: 24,
      padding: '2rem',
      boxShadow: '0 4px 24px #0002'
    }}
    >
      {/* Profile Image */}
      <img
        src={profileImg}
        alt="Alex Curtis"
        style={{
          width: 140,
          height: 140,
          borderRadius: '50%',
          border: '5px solid #111',
          objectFit: 'cover',
          marginRight: '2rem',
          background: '#fff',
          objectPosition: 'top'
        }}
      />
      {/* Hero Text */}
      <div style={{ flex: 1, color: '#fff', textAlign: 'left' }}>
        <h1 style={{ fontSize: '2.5rem', margin: '0.5rem 0' }}>Alex Curtis</h1>
        <h2 style={{ fontWeight: 400, fontSize: '1.5rem', margin: '0.5rem 0' }}>
          Data Analytics Engineer | Business Intelligence Professional | U.S. Army Veteran
        </h2>
        <p style={{ maxWidth: 600, margin: '1.5rem 0 0 0', fontSize: '1.1rem' }}>
          I build scalable BI solutions, automate data pipelines, and deliver insights that drive executive decisions.
          With 14 years of military leadership and a passion for analytics, I help organizations modernize, innovate, and succeed.
        </p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          <a
            href="#contact"
            style={{
              background: '#fff',
              color: '#1976d2',
              padding: '0.75rem 1.5rem',
              borderRadius: '24px',
              textDecoration: 'none',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Contact Me
          </a>
          <a
            href="https://linkedin.com/in/alex-curtis-0b674115a"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'rgba(255,255,255,0.2)',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '24px',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
    {/* Responsive styles */}
    <style>
      {`
        @media (max-width: 700px) {
          #hero > div[style*="relative"] {
            flex-direction: column !important;
            align-items: center !important;
            padding: 1rem !important;
          }
          #hero img {
            margin-right: 0 !important;
            margin-bottom: 1.5rem !important;
          }
          #hero div[style*="text-align: left"] {
            text-align: center !important;
          }
        }
      `}
    </style>
  </section>
);

export default HeroSection;