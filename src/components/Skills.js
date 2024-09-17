import React from 'react';
import './Skills.scss';


const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {/* Front End Skills */}
        <div className="skills-card">
          <img src="https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/gh-pages/frontend.png?raw=true" alt="Front End Icon" className="skills-icon" />
          <h3>Front End</h3>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Angular</li>
            <li>PHP</li>
          </ul>
        </div>

        {/* Back End Skills */}
        <div className="skills-card">
          <img src="https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/gh-pages/backend.png?raw=true" alt="Back End Icon" className="skills-icon" />
          <h3>Back End</h3>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>Node.js</li>
            <li>Flask</li>
            <li>SQL</li>
            <li>MySQL</li>
            <li>C/C++</li>
            <li>C#</li>
            <li>Spring Boot</li>
            <li>RESTful APIs</li>
          </ul>
        </div>

        {/* Other Tools Skills */}
        <div className="skills-card">
          <img src= "https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/gh-pages/tools.png?raw=true" alt="Other Tools Icon" className="skills-icon" />
          <h3>Other Tools</h3>
          <ul>
            <li>Git</li>
            <li>AWS</li>
            <li>Linux</li>
            <li>Docker</li>
            <li>Airflow</li>
            <li>Figma</li>
            <li>Pandas</li>
            <li>SAS</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
