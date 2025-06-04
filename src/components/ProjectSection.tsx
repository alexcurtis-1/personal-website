import React from 'react';
import report1 from '../assets/PBIAPI_ViewsPage.png';
import report2 from '../assets/SD_BodyMap.jpg';
import dashboard1 from '../assets/SD_SummaryPage.png';
import dashboard2 from '../assets/CensusETLProject.png';

const projects = [
  {
    title: "Incident Response Exercise – Zions Bancorporation",
    description: `Designed and managed a realistic, inject-driven incident response exercise for C-level leadership, featuring custom video injects and live scenario adaptation. The exercise was praised as innovative and engaging by executives, and it significantly improved the organization's crisis response readiness.`,
    technologies: ["Scenario Design", "Project Management", "Stakeholder Engagement"]
  },
  {
    title: "Enterprise Risk Data Migration – Zions Bancorporation",
    description: `Led the migration of seven affiliate banks' business continuity and disaster recovery processes to a unified Salesforce-based platform (Fusion Risk Management). Overcame organizational resistance, standardized policies, and delivered insightful reporting, reducing technical debt and process redundancy across the enterprise.`,
    technologies: ["Salesforce", "Fusion Risk Management", "Process Standardization", "Tableau"]
  },
  {
    title: "ITSM Automation & Reporting",
    description: `Automated weekly metrics and KPI reporting for IT Change, Release, and Incident Management using Python ETL scripts. Eliminated manual reporting, improved data accuracy, and enabled timely insights for leadership—well before Power BI was available at the organization.`,
    technologies: ["Python", "ETL", "Crystal Reports", "BMC Remedy", "Process Automation"]
  },
  {
    title: "ServiceNow ITSM Migration",
    description: `Coordinated the migration from BMC Remedy to ServiceNow, including data migration, module rollout, and staff training. Managed a high-visibility project under federal oversight, ensuring compliance and successful adoption across all technical teams.`,
    technologies: ["ServiceNow", "BMC Remedy", "Data Migration", "Training"]
  },
  {
    title: "ArcGIS Enterprise Deployment & Analytics",
    description: `Deployed ArcGIS Enterprise for the first time at Zions Bancorporation, building geodatabases and delivering geospatial analytics on customer deposits and lending. Enabled data-driven decisions by integrating census data and visualizing regional income and poverty levels.`,
    technologies: ["ArcGIS Enterprise", "Geospatial Analytics", "Data Integration"]
  },
  {
    title: "Power BI Modernization – FHI",
    description: `Modernized FHI's Power BI environment by consolidating data pipelines, automating ETL, and building interactive dashboards. Developed a Power BI REST API usage dashboard to monitor adoption and prioritize enhancements, driving a dramatic increase in user engagement.`,
    technologies: ["Power BI", "Python", "REST API", "ETL", "Dashboard Design"]
  },
  {
    title: "Safety Dashboard – FHI",
    description: `Delivered an executive-level safety dashboard by integrating insurance, Workday, and custom data sources. Designed custom visuals for incident, cost, and location analytics, providing actionable insights to leadership.`,
    technologies: ["Power BI", "Python", "Workday", "Data Visualization"]
  },
  {
    title: "Special Operations Training Exercise Design",
    description: `Led the intelligence writing effort for three unconventional warfare exercises, developing scenario storylines, characters, and detailed injects to train Army Special Operations Forces. Enhanced unit readiness and mission focus through realistic, high-impact training.`,
    technologies: ["Scenario Development", "Intelligence Analysis", "Leadership", "Training"]
  },
  {
    title: "Personal Technical Projects",
    description: `Developed a variety of analytics and automation projects, including a Python-based ETL for Census data, a retro gaming console from a Raspberry Pi, and a smart home hub. These projects demonstrate my passion for learning and applying technology to solve real-world problems.`,
    technologies: ["Python", "Raspberry Pi", "APIs", "Automation"]
  }
];

const portfolioImages = [
  { src: report1, alt: 'Portfolio screenshot 1' },
  { src: report2, alt: 'Portfolio screenshot 2' },
  { src: dashboard1, alt: 'Portfolio screenshot 3' },
  { src: dashboard2, alt: 'Portfolio screenshot 4' }
];

const ProjectSection: React.FC = () => (
  <section id="projects" style={{ padding: '2rem 0', width: '100%' }}>
    <div
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 1rem'
      }}
    >
      <h2 style={{ textAlign: 'center', marginTop: 0 }}>Highlighted Projects</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          justifyItems: 'center'
        }}
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            style={{
              background: '#f5f5f5',
              padding: '1.5rem',
              borderRadius: '12px',
              textAlign: 'left',
              border: '2px solid #111',
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              maxWidth: 350,
              minWidth: 260,
              minHeight: 260,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3 style={{ marginTop: 0 }}>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.98rem' }}>
              <strong>Technologies & Skills:</strong> {project.technologies.join(', ')}
            </p>
          </div>
        ))}
      </div>
      {/* Portfolio images row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '3rem',
          flexWrap: 'wrap'
        }}
      >
        {portfolioImages.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            style={{
              width: 320,
              height: 220,
              borderRadius: 12,
              objectFit: 'cover',
              boxShadow: '0 2px 12px #0002'
            }}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectSection;