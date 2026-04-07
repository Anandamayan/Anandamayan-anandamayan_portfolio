import { useEffect, useState } from "react";

import myImage from "../assets/images/MyPhoto.jpeg";

export default function Hero() {
  const texts = ["Fullstack Developer", "Front End Developer"];
  const [typed, setTyped] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;

    const typing = setInterval(() => {
      setTyped(texts[index].slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === texts[index].length) {
        clearInterval(typing);

        setTimeout(() => {
          setTyped("");
          setIndex((prev) => (prev + 1) % texts.length);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(typing);
  }, [index]);

  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Hi, I am <br />
          <span>Anandamayan</span>
        </h1>

        <h2>
          I am a <span className="highlight">{typed}</span>
        </h2>

        <p>
          I build scalable web applications using MERN stack and modern
          technologies.
        </p>

        <a href="/src/public/ANANDA_MAYAN _SUNDARESAN Resume.pdf" download>
          <button className="btn">Download CV</button>
        </a>
      </div>

      <div className="hero-right">
        <img src={myImage} alt="profile" />
      </div>
    </section>
  );
}
