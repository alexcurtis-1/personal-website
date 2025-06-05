import React from 'react';

const services = [
  {
    icon: "📊",
    title: "Data Analytics & Reporting",
    bullets: [
      "Build dashboards in Power BI, Tableau, or Excel",
      "Set up real-time KPI monitoring",
      "Visual storytelling with business impact"
    ]
  },
  {
    icon: "🧱",
    title: "Data Engineering & Automation",
    bullets: [
      "ETL/ELT pipeline design (SQL, Python, Azure Data Factory)",
      "Data cleaning, transformation, warehousing",
      "API integrations for HR/payroll or operations"
    ]
  },
  {
    icon: "🧠",
    title: "BI Strategy & Consulting",
    bullets: [
      "Reporting audits & dashboard modernization",
      "Business intelligence roadmap design",
      "Team enablement (documentation, training, self-service models)"
    ]
  }
];

const pricing = [
  "Hourly rate",
  "Project-based pricing",
  "Retainer (e.g., monthly support hours)"
];

const ServicesSection: React.FC = () => (
  <section id="services" style={{ padding: '2rem 0', background: '#f7fbff' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '0.5rem' }}>
        Services I Offer
      </h2>
      <p style={{ textAlign: 'center', marginBottom: '2.5rem', color: '#1976d2', fontWeight: 500 }}>
        Get results-driven, contractor-level help with your analytics needs — fast.
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        justifyItems: 'center'
      }}>
        {services.map((service) => (
          <div
            key={service.title}
            style={{
              background: '#e3f2fd',
              border: '2px solid #1976d2',
              borderRadius: 12,
              boxShadow: '0 4px 16px rgba(25, 118, 210, 0.08)',
              padding: '1.5rem',
              minHeight: 200,
              maxWidth: 340,
              color: '#111',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
          >
            <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{service.icon}</span>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#1976d2' }}>{service.title}</h3>
            <ul style={{ paddingLeft: '1.2em', margin: 0 }}>
              {service.bullets.map((b, i) => (
                <li key={i} style={{ marginBottom: 6 }}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
        <h4 style={{ color: '#1976d2', marginBottom: '0.5rem' }}>💵 Pricing / Engagement Options</h4>
        <ul style={{ display: 'inline-block', textAlign: 'left', margin: 0, paddingLeft: '1.2em', color: '#111' }}>
          {pricing.map((option, i) => (
            <li key={i}>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ServicesSection;