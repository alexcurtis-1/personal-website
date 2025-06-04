import React from 'react';
import me1 from '../assets/IP_smokeysunset.jpg';
import me2 from '../assets/BigBrownBoat.jpg';
import me3 from '../assets/Drums.png';
import me4 from '../assets/GD_Fire.jpg';

const AboutSection: React.FC = () => (
  <section 
    id="about" 
    style={{ 
      padding: '2rem 0',
      margin: '0 auto',
      maxWidth: 1200,
      boxSizing: 'border-box'
    }}>
    <div style={{
      display: 'flex',
      gap: '2rem',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
      {/* Left images */}
      <div style={{ flex: 1, minWidth: 140, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', gap: '1rem' }}>
        <img
          src={me1}
          alt="Alex outdoors"
          style={{
            width: 140,
            height: 180,
            borderRadius: 12,
            objectFit: 'cover',
            boxShadow: '0 2px 12px #0002',
            zIndex: 2,
            position: 'relative'
          }}
        />
        <img
          src={me3}
          alt="Alex outdoors 2"
          style={{
            width: 120,
            height: 150,
            borderRadius: 12,
            objectFit: 'cover',
            boxShadow: '0 2px 12px #0002',
            position: 'relative'
          }}
        />
      </div>
      {/* Text content with title */}
      <div style={{ flex: 2, minWidth: 260 }}>
        <h2 style={{ textAlign: 'center', marginTop: 0 }}>About Me</h2>
        <p>
          I’m Alex Curtis, a veteran data and analytics professional with over a decade of experience building scalable BI solutions, automating enterprise data pipelines, and delivering insights that drive executive decisions. My career spans critical modernization and standardization projects, cross-functional analytics transformations, and leadership roles in finance, logistics, ITSM, HR, safety, military, and operational risk management environments.
        </p>
        <p>
          I combine deep technical expertise in Python, SQL, Power BI, and cloud platforms with leadership sharpened through 14 years as a U.S. Army Officer. I’m known for leading high-impact projects, mentoring teams, and delivering solutions that empower organizations to make data-driven decisions.
        </p>
        <p>
          Outside of work, I’m an avid musician, skier, and fly fishing angler. I thrive on solving complex problems, building high-quality BI solutions, and making a positive impact wherever I go.
        </p>
      </div>
      {/* Right images */}
      <div style={{ flex: 1, minWidth: 140, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', gap: '1rem' }}>
        <img
          src={me2}
          alt="Alex at work"
          style={{
            width: 140,
            height: 180,
            borderRadius: 12,
            objectFit: 'cover',
            boxShadow: '0 2px 12px #0002',
            zIndex: 2,
            position: 'relative'
          }}
        />
        <img
          src={me4}
          alt="Alex at work 2"
          style={{
            width: 120,
            height: 150,
            borderRadius: 12,
            objectFit: 'cover',
            boxShadow: '0 2px 12px #0002',
            position: 'relative'
          }}
        />
      </div>
    </div>
  </section>
);

export default AboutSection;