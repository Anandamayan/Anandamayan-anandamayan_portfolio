import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">SKILLS</h2>
      <p className="skills-subtitle">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>

      <div className="skills-container">
        
        {/* Frontend */}
        <div className="skill-card">
          <h3>Frontend</h3>
          <div className="skill-list">
            <span>HTML</span>
            <span>CSS</span>
            <span>SASS</span>
            <span>JavaScript</span>
            <span>React JS</span>
            <span>Redux</span>
            {/* <span>Next JS</span> */}
            <span>Tailwind CSS</span>
            {/* <span>Material UI</span> */}
            <span>Bootstrap</span>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <h3>Backend</h3>
          <div className="skill-list">
            {/* <span>Springboot</span> */}
            <span>Node JS</span>
            <span>Express JS</span>
            <span>MySQL</span>
            <span>MongoDB</span>
            {/* <span>Firebase</span> */}
            {/* <span>PostgreSQL</span> */}
          </div>
        </div>

        {/* Languages */}
        <div className="skill-card">
          <h3>Languages</h3>
          <div className="skill-list">
            {/* <span>C</span> */}
            {/* <span>C++</span> */}
            <span>Java</span>
            <span>Python</span>
            {/* <span>C#</span> */}
            <span>JavaScript</span>
            <span>TypeScript</span>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <h3>Tools</h3>
          <div className="skill-list">
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
            <span>Postman</span>
            <span>Compass</span>
            <span>Vercel</span>
            <span>Netlify</span>
            {/* <span>Figma</span> */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;