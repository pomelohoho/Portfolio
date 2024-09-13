import React, { useState, useEffect } from 'react';
import './Intro.scss';

const Intro = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dynamically adjust transform to move text up and background fade effect
  const translateY = Math.min(scrollY / 3, 300); 
  const backgroundOpacity = Math.max(1 - scrollY / 500, 0); 

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div
          className="image-background"
          style={{
            backgroundImage: `url('https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/gh-pages/bg.jpg?raw=true')`, 
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed', 
            opacity: backgroundOpacity, 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1, 
          }}
        />
        <div className="hero-container" style={{ transform: `translateY(-${translateY}px)` }}>
          <div className="left-content">
            <p className="creative-text">Pom Dao</p>
            <h1 className="hero-title">
              FULL- <br /> STACK <br /> DEVELOPER
            </h1>
          </div>
          <div className="right-content">
            <p className="description">
              I AM POM, A DEVELOPER AND UX/UI DESIGNER BASED IN CLEVELAND, OHIO.
            </p>
            {/* Adding the portrait image between introduction and contact */}
            <div className="portrait-container">
              <img src="https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/gh-pages/portrait.png?raw=true" alt="Pom Portrait" className="portrait" />
            </div>
            <button className="contact-btn">CONTACT ME</button>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="about-container">
          {/* Add the circular memoji */}
          <div className="memoji-container">
            <img src="https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/gh-pages/memoji.jpg?raw=true" alt="Pom Memoji" className="memoji" />
          </div>
          <h2>
            Hi, I'm <span className="highlight">Pom</span>. Nice to meet you.
          </h2>
          <p>
            I am a Full Stack Developer with a passion for building beautiful and user-friendly websites. I have a strong understanding of both front-end and back-end development, and I am excited to put my skills to use in a professional setting. I am a quick learner and a team player, and I am confident that I can be a valuable asset to any web development team.
          </p>
        </div>
      </section>

    </>
  );
};

export default Intro;