import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="exp-title">EXPERIENCE</h2>
      <p className="exp-subtitle">
        A collection of my work experience and the roles I have taken in various organizations
      </p>

      <div className="timeline">

        {/* Job 1 */}
        <div className="timeline-item right">
          <div className="exp-card">
            <h3>Product Developer</h3>
            <h4>Digylax Pvt Ltd</h4>
            <span>Dec 2025 – Feb 2026</span>

            <p>
              Developed scalable backend services using Node.js and Express.js,
              handling 20+ APIs. Designed REST APIs for CRM & HRMS systems with validation
              and error handling. Integrated third-party APIs (GST, PAN).
            </p>

            <div className="skills">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>React.js</span>
              <span>Redux Toolkit</span>
              <span>MongoDB</span>
              <span>REST API</span>
            </div>
          </div>
        </div>

        {/* Job 2 */}
        <div className="timeline-item left">
          <div className="exp-card">
            <h3>Associate Software Developer</h3>
            <h4>Mitrahsoft Solutions Pvt Ltd</h4>
            <span>Feb 2023 – Jul 2025</span>

            <p>
              Developed reusable React components and integrated REST APIs using Node.js.
              Managed state using Redux Toolkit and improved UI responsiveness.
              Worked on dashboards with complex data visualization.
            </p>

            <div className="skills">
              <span>React.js</span>
              <span>Redux Toolkit</span>
              <span>Node.js</span>
              <span>JavaScript</span>
              <span>REST API</span>
            </div>
          </div>
        </div>

        {/* Job 3 */}
        <div className="timeline-item right">
          <div className="exp-card">
            <h3>Trainee Software Developer</h3>
            <h4>Everforce</h4>
            <span>Dec 2021 – Aug 2022</span>

            <p>
              Built SPA applications using React.js, ensured responsive UI,
              integrated backend APIs, and handled asynchronous data flow.
            </p>

            <div className="skills">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>API Integration</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;