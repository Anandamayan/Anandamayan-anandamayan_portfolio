import "./contact.css";
import github from "../public/images/github.png";
import linkedin from "../public/images/linkedin.png";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">CONTACT</h2>
      <p className="contact-subtitle">
        I’d love to hear from you—reach out for any opportunities or questions!
      </p>

      <div className="contact-container">
        <div className="contact-card">
          <h3>Connect With Me 🚀</h3>

          <form>
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Your Name" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" rows="4"></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="contact-footer">
        <div className="footer-links">
          <a href="#hero">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/Anandamayan" target="_blank">
            <img src={github} alt="GitHub" />
          </a>

          <a href="https://www.linkedin.com/in/ananda-mayan/" target="_blank">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>

        <p>© 2026 anand. All rights reserved.</p>
      </div>
    </section>
  );
}
