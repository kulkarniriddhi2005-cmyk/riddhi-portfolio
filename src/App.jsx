import React from 'react';
import './App.css';

const Navbar = () => (
  <nav className="navbar glass-panel">
    <div className="container nav-container">
      <div className="logo text-gradient">Riddhi Kulkarni</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
);

const Hero = () => (
  <section id="about" className="hero-section container animate-fade-in">
    <div className="hero-content">
      <h2 className="greeting">Hi there, I'm</h2>
      <h1 className="name text-gradient">Riddhi Kulkarni</h1>
      <h3 className="role">Final-Year Computer Science & Engineering (AI & ML) Student</h3>
      <p className="bio">
        Passionate about Artificial Intelligence, Machine Learning, and software development. I enjoy building AI-powered applications, exploring modern AI technologies, and strengthening my problem-solving skills through Data Structures and Algorithms.
      </p>
      <div className="hero-actions">
        <a href="#projects" className="btn btn-primary">View My Work</a>
        <a href="#contact" className="btn btn-secondary">Get In Touch</a>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="section container">
    <h2 className="section-title">Experience & Education</h2>
    <div className="timeline">
      <div className="timeline-item glass-panel animate-fade-in delay-100">
        <h3>Project Experience</h3>
        <h4>Software & AI Development</h4>
        <ul className="skill-list" style={{ marginTop: '0.5rem' }}>
          <li>Built and deployed web applications using modern technologies.</li>
          <li>Integrated AI APIs to develop intelligent SaaS solutions.</li>
          <li>Developed responsive and user-friendly applications with database integration.</li>
          <li>Continuously improving problem-solving skills through Data Structures and Algorithms.</li>
        </ul>
      </div>
      <div className="timeline-item glass-panel animate-fade-in delay-200">
        <h3>Bachelor of Engineering (B.E.)</h3>
        <h4>Computer Science & Engineering (AI & ML) • Expected 2027</h4>
        <p>Focusing on Artificial Intelligence, Machine Learning, and core computer science fundamentals.</p>
      </div>
    </div>
  </section>
);

const Projects = () => {
  const projects = [
    {
      title: "QuickAI – AI SaaS Platform",
      desc: "An AI-powered SaaS platform utilizing Gemini API integration to provide intelligent content generation and AI-driven utilities through a modern web interface.",
      tech: ["JavaScript", "React.js", "Node.js", "MongoDB", "Gemini API"],
      link: "https://quickai-frontend-igv6.onrender.com/"
    },
    {
      title: "Fashion E-Commerce Website",
      desc: "A complete fashion e-commerce platform featuring product browsing, shopping cart functionality, user authentication, order management, and responsive design.",
      tech: ["HTML", "CSS", "JavaScript", "MySQL"],
      link: "https://fashionbyrid.freedev.app/home.php"
    }
  ];

  return (
    <section id="projects" className="section container">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((item, index) => (
          <div key={index} className={`project-card glass-panel animate-fade-in delay-${(index + 1) * 100}`}>
            <div className="project-info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="project-tags">
                {item.tech.map(tech => <span key={tech} className="tag">{tech}</span>)}
              </div>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Live Demo →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Skills = () => (
  <section id="skills" className="section container">
    <h2 className="section-title">Skills & Technologies</h2>
    <div className="skills-container glass-panel animate-fade-in delay-100">
      <div className="skill-category">
        <h3>Programming & Tools</h3>
        <ul className="skill-list">
          <li>Python, JavaScript</li>
          <li>Git, GitHub</li>
          <li>MongoDB, MySQL, Vector DB (Qdrant), Graph DB (Neo4j)</li>
        </ul>
      </div>
      <div className="skill-category">
        <h3>AI & Machine Learning</h3>
        <ul className="skill-list">
          <li>Artificial Intelligence Fundamentals</li>
          <li>Machine Learning Fundamentals</li>
          <li>Generative AI Concepts</li>
          <li>Retrieval-Augmented Generation (RAG)</li>
        </ul>
      </div>
      <div className="skill-category">
        <h3>Core Concepts</h3>
        <ul className="skill-list">
          <li>Data Structures & Algorithms (DSA)</li>
          <li>Object-Oriented Programming (OOP)</li>
          <li>Database Management Systems (DBMS)</li>
        </ul>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section container text-center">
    <h2 className="section-title">Get In Touch</h2>
    <div className="glass-panel contact-grid animate-fade-in delay-200">
      <p className="contact-text">
        I'm currently open to new opportunities and collaborations. Whether you have a question or just want to connect, feel free to reach out!
      </p>
      <div className="social-links">
        <a href="mailto:kulkarniriddhi2005@gmail.com">Email Me</a>
        <a href="https://www.linkedin.com/in/riddhi-kulkarni-68865b2a1/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/kulkarniriddhi2005-cmyk" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <p className="contact-text mt-lg" style={{ fontSize: '0.9rem' }}>
        Phone: +91 7385072350
      </p>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Riddhi Kulkarni. Built with React & Vite.</p>
      </footer>
    </div>
  );
}
