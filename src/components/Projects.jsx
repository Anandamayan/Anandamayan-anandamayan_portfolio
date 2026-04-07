import "./projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">

      <h2 className="projects-title">PROJECTS</h2>
      <p className="projects-subtitle">
        A showcase of the projects I have worked on
      </p>

      {/* ✅ ADD THIS CONTAINER */}
      <div className="projects-container">

        {/* Movie Hunt */}
        <div className="project-card">
          {/* <img src="/images/movie-hunt.png" alt="Movie Hunt" /> */}
          <h3>Movie Hunt</h3>
          <p>
            A movie search application built using React.js and OMDB API.
          </p>

          <div className="project-skills">
            <span>React JS</span>
            <span>API</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>
        </div>

        {/* Full Stack Todo */}
        <div className="project-card">
          {/* <img src="../assets/images/MyPhoto.jpeg" alt="Todo App" /> */}
          <h3>Full Stack Todo App</h3>
          <p>
            A full-stack task management application using MERN stack.
          </p>

          <div className="project-skills">
            <span>MongoDB</span>
            <span>Express.js</span>
            <span>React JS</span>
            <span>Node.js</span>
            <span>JWT</span>
          </div>
        </div>

      </div>
    </section>
  );
}