import React from 'react';

const technicalSkills = [
  "Python", "SQL", "DAX", "M/Power Query", "PowerShell", "TypeScript", "RESTful APIs", "Data Modeling", "SOAP APIs"
];

const librariesFrameworks = [
  "pandas", "numpy", "selenium", "matplotlib", "seaborn", "sqlalchemy", "pyodbc", "pyspark", "flask", "react.js"
];

const platforms = [
  "Microsoft Fabric", "SQL Server", "Snowflake", "OneLake", "ServiceNow", "SAP Business Objects", "Freshservice", "Salesforce", "Workday", "GoTo Connect", "BMC Remedy", "QlikView", "ArcGIS Enterprise"
];

const tools = [
  "Azure DevOps", "Git", "Power Automate", "VS Code", "SSMS", "Fabric Data Factory", "Fabric PySpark Notebooks", "Fusion Risk Management", "Crystal Reports", "ArcGIS Pro", "Power BI Desktop", "Power BI Rest API", "SSIS", "SSRS", "Fabric", "Excel"
];

const specialties = [
  "Power BI Migration", "ETL Development", "Business Intelligence", "Data Governance", "API Integration", "Business Process Automation"
];

const softSkills = [
  "Project Management", "Professional Communication", "Leadership & Mentoring", "Operational Planning", "Training & Teaching", "Problem Solving", "Collaboration"
];

const skillCategories = [
  { title: "Technical Languages & Tools", skills: technicalSkills },
  { title: "Libraries & Frameworks", skills: librariesFrameworks },
  { title: "Platforms", skills: platforms },
  { title: "Tools", skills: tools },
  { title: "Specialties", skills: specialties },
  { title: "Soft Skills", skills: softSkills }
];

const SkillsSection: React.FC = () => (
  <section id="skills" style={{ padding: '2rem 0' }}>
    <h2
      style={{
        maxWidth: 1200,
        margin: '0 auto 2rem auto',
        paddingLeft: '2rem',
        fontSize: '2rem'
      }}
    >
      Skills
    </h2>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '2rem',
        justifyItems: 'center',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 2rem'
      }}
    >
      {skillCategories.map((cat) => (
        <div
          key={cat.title}
          style={{
            background: '#e3f2fd',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '2px solid #1976d2',
            boxShadow: '0 4px 16px rgba(25, 118, 210, 0.10)',
            maxWidth: 320,
            minWidth: 220,
            minHeight: 180,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start'
          }}
        >
          <h3 style={{ marginTop: 0, color: '#1976d2' }}>{cat.title}</h3>
          <ul style={{ paddingLeft: '1.2em', margin: 0 }}>
            {cat.skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;