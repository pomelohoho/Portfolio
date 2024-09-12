import React from 'react';
import './Timeline.scss';

const Timeline = () => {
  const events = [
    {
      title: "Software Engineer Intern",
      company: "Game Design Lab @ Grinnell College",
      duration: "Jan 2022 - Aug 2024",
      tags: ["C#", "Unity", "PHP", "Database", "MySQL", "Statistical Pipelines", "R", "cPanel", "Real-time Data Visualization"],
    },
    {
      title: "Software Engineer Intern",
      company: "Viettel Software",
      duration: "May 2023 - Aug 2023",
      tags: [".NET Core", "RESTful APIs", "Microservices", "Angular", "Docker", "AWS (EC2, S3)"]},
    {
      title: "Software Engineer Intern",
      company: "National Center for Supercomputing Applications, UIUC",
      duration: "Sep 2022 - Dec 2022",
      tags: ["Python", "Flask", "React.js", "RESTful APIs", "JWT", "Auth0", "SciTokens", "API", "Docker", "Linux", "CI/CD Pipelines", "Jenkins"],
    },
  ];

  return (
    <section className="timeline-section">
      <h2>Experience</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{event.title}</h3>
              <p>{event.company}</p>
              <p>{event.duration}</p>
              <div className="tags">
                {event.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
