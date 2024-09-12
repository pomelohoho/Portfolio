import React from 'react';
import './Projects.scss';

const Projects = () => {
  const cases = [
    {
      title: "Statistics Games Site",
      description: "UX/UI Design, Development",
      image: "https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/b6d5857caf949549aba9579cb4a7e7099c404cf4/backend.png",
      link: "https://www.stat2games.sites.grinnell.edu/",
    },
    {
      title: "API ETL with Airflow on AWS",
      description: "UX/UI Design, Development",
      image: "https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/gh-pages/wot.png?raw=true",
      link: "https://github.com/pomelohoho/Web-Trust-ETL-with-Airflow-on-AWS",
    },
    {
      title: "Networked Pong",
      description: "UX/UI Design, Development",
      image: "https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/gh-pages/networked-pong.jpg?raw=true",
      link: "https://github.com/pomelohoho/Networked-Pong",
    },
    {
      title: "SciAuth Fellowship",
      description: "UX/UI Design, Development",
      image: "https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/gh-pages/sciauth.png?raw=true",
      link: "https://github.com/SciAuth/rest-demo",
    },
    {
      title: "IMEDiate - Grinnell Hackathon First Prize",
      description: "UX/UI Design, Development",
      image: "https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/gh-pages/imediate.jpeg?raw=true",
      link: "https://www.canva.com/design/DAFvU6SXLho/rlzRhemMEV9snViv5ucfPg/edit?utm_content=DAFvU6SXLho&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      title: "Budget Bite - Grinnell Hackathon First Prize",
      description: "UX/UI Design, Development",
      image: "https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/gh-pages/budgetbite.jpg?raw=true",
      link: "https://www.canva.com/design/DAFgMtCkUAA/uwlAA_wHbE3Z6aWMAQS5xA/edit?utm_content=DAFgMtCkUAA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      title: "SheGOtiATE - Grinnell Hackathon",
      description: "UX/UI Design, Development",
      image: "https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/gh-pages/sgsa.jpeg?raw=true",
      link: "https://cloud.protopie.io/p/147ad942ee95b603789aa076",
    },
    {
      title: "Covid Mortality Rate Model",
      description: "UX/UI Design, Development",
      image: "https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/gh-pages/covid.png?raw=true",
      link: "https://github.com/pomelohoho/Covid-County-Project",
    },
  ];

  return (
    <section className="selected-cases">
      <div className="selected-header">
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
