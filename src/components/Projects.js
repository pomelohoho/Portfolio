import React, { useEffect, useRef, useState } from 'react';
import './Projects.scss';

const Projects = () => {
  const projectTitleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger fly-in for title
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectTitle = projectTitleRef.current;
    if (projectTitle) {
      observer.observe(projectTitle);
    }

    return () => {
      if (projectTitle) {
        observer.unobserve(projectTitle);
      }
    };
  }, []);

  const cases = [
    {
      title: "Statistics Games Site",
      description: "C#, Unity, PHP, Database, MySQL, R, cPanel, Data Visualization, Statistical Modeling",
      image: "https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/gh-pages/stat2games.png?raw=true",
      link: "https://www.stat2games.sites.grinnell.edu/",
    },
    {
      title: "TODO-List Application",
      description: "MySQL, Java, Angular, CRUD, Typescript, Spring Boot, REST-api, SCSS",
      image: "https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/master/public/TAskKeeper.png?raw=true",
      link: "https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio",
    },
    {
      title: "API ETL with Airflow on AWS",
      description: "ETL Pipeline, Python, API, Airflow, AWS-S3, AWS-EC2",
      image: "https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/gh-pages/wot.png?raw=true",
      link: "https://github.com/pomelohoho/Web-Trust-ETL-with-Airflow-on-AWS",
    },
    {
      title: "Networked Pong",
      description: "C, Socket Programming, Client-Server Communication, Network and Distributed Systems, File Systems",
      image: "https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/gh-pages/networked-pong.jpg?raw=true",
      link: "https://github.com/pomelohoho/Networked-Pong",
    },
    {
      title: "SciAuth Fellowship",
      description: "Python, Flask, React.js, RESTful APIs, JWT, Auth0, SciTokens, API, Docker, Linux, CI/CD Pipelines, Jenkins",
      image: "https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/gh-pages/sciauth.png?raw=true",
      link: "https://github.com/SciAuth/rest-demo",
    },
    {
      title: "IMEDiate - Grinnell Hackathon First Prize",
      description: "UX/UI Design, Prototyping, Figma, User Flow Design, Interactive Mockups, Pitch Presentation",
      image: "https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/gh-pages/imediate.jpeg?raw=true",
      link: "https://www.canva.com/design/DAFvU6SXLho/rlzRhemMEV9snViv5ucfPg/edit?utm_content=DAFvU6SXLho&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      title: "Budget Bite - Grinnell Hackathon First Prize",
      description: "UX/UI Design, Prototyping, Figma, User Flow Design, Interactive Mockups, Pitch Presentation",
      image: "https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/gh-pages/budgetbite.jpg?raw=true",
      link: "https://www.canva.com/design/DAFgMtCkUAA/uwlAA_wHbE3Z6aWMAQS5xA/edit?utm_content=DAFgMtCkUAA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      title: "SheGOtiATE - Grinnell Hackathon",
      description: "UX/UI Design, Prototyping, Figma, User Flow Design, Interactive Mockups, Pitch Presentation",
      image: "https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/gh-pages/sgsa.jpeg?raw=true",
      link: "https://cloud.protopie.io/p/147ad942ee95b603789aa076",
    },
    {
      title: "Covid Mortality Rate Model",
      description: "R, Statistical Modeling",
      image: "https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/gh-pages/covid.png?raw=true",
      link: "https://github.com/pomelohoho/Covid-County-Project",
    },
  ];

  return (
    <section className="selected-cases">
      <div className={`selected-header ${isVisible ? 'fly-in' : ''}`} ref={projectTitleRef}>
        <h2>Projects</h2>
      </div>
      <div className="cases-grid">
        {cases.map((caseItem, index) => (
          <a
            href={caseItem.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="case-link"
          >
            <div className="case-card">
              <img
                src={caseItem.image}
                alt={caseItem.title}
                className="case-image"
              />
              <div className="case-info">
                <h3>{caseItem.title}</h3>
                <p>{caseItem.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
