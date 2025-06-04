import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Superior from '../assets/Superior1.jpg';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    if (!formRef.current) return;

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('Message sent! Thank you.');
          formRef.current?.reset();
        },
        () => {
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        width: '100%',
        padding: '4rem 0',
        minHeight: 400,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Background overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(25, 118, 210, 0.5)), url(${Superior})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          zIndex: 0
        }}
      />
      {/* Contact form content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 500,
          width: '100%',
          margin: '0 auto',
          background: 'rgba(255,255,255,0.92)',
          borderRadius: 16,
          boxShadow: '0 4px 24px #0002',
          padding: '2rem'
        }}
      >
        <h2 style={{ textAlign: 'center', marginTop: 0 }}>Contact Me</h2>
        <form ref={formRef} onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto' }}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            style={{ width: '100%', padding: '0.75rem', margin: '0.5rem 0', borderRadius: 8, border: '1px solid #ccc' }}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            style={{ width: '100%', padding: '0.75rem', margin: '0.5rem 0', borderRadius: 8, border: '1px solid #ccc' }}
          />
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            style={{ width: '100%', padding: '0.75rem', margin: '0.5rem 0', borderRadius: 8, border: '1px solid #ccc' }}
          />
          <button
            type="submit"
            style={{
              background: '#1976d2',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '24px',
              border: 'none',
              fontWeight: 600,
              marginTop: '1rem',
              cursor: 'pointer'
            }}
          >
            Send Message
          </button>
          <div style={{ marginTop: '1rem', color: '#1976d2' }}>{status}</div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;