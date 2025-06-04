import React from 'react';

const Navbar: React.FC = () => (
  <nav style={{
    background: '#222',
    color: '#fff',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }}>
    <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
      Alex Curtis
    </div>
    <ul style={{
      listStyle: 'none',
      display: 'flex',
      gap: '1.5rem',
      margin: 0,
      padding: 0
    }}>
      <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
      <li><a href="#projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</a></li>
      <li><a href="#skills" style={{ color: '#fff', textDecoration: 'none' }}>Skills</a></li>
      <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;