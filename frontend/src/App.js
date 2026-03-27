import { useState } from "react";
import profile from "./profile.jpg";

function App() {

  // ✅ State & functions (MUST be here)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://13.51.234.214:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    alert("Message sent!");
  };

  return (
    <div className="container">

      {/* Navbar */}
      <nav className="navbar">
        <h2> Jorka  Sandeep kumar latest</h2>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <img src={profile} alt="profile" className="profile-img" />
        <h1>DevOps Engineer</h1>
        <p>
          I build scalable infrastructure, automate deployments, and monitor systems using modern DevOps tools.
        </p>
      </section>

      {/* Skills */}
      <section>
        <h2>Skills</h2>
        <div className="skills">
          <span>Docker</span>
          <span>Kubernetes</span>
          <span>AWS</span>
          <span>Jenkins</span>
          <span>Terraform</span>
          <span>Linux</span>
          <span>Git</span>
          <span>Prometheus</span>
          <span>Grafana</span>
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2>Experience</h2>

        <div className="project-card">
          <h3>DevOps & Platform Engineer Intern</h3>
          <p><b>Duration:</b> Jul 2025 – Oct 2025</p>

          <ul>
            <li>Designed and managed CI/CD pipelines using GitHub Actions.</li>
            <li>Implemented monitoring dashboards and Slack alerts.</li>
            <li>Built serverless apps using Firebase & Google Cloud Functions.</li>
            <li>Automated database management using Supabase.</li>
            <li>Optimized CI/CD pipelines for deployments.</li>
          </ul>
        </div>

      </section>

      {/* Projects */}
      <section id="projects">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>CI/CD Pipeline</h3>
          <p>Automated build and deployment using Jenkins, Docker, and AWS EC2.</p>
        </div>

        <div className="project-card">
          <h3>Nginx Reverse Proxy</h3>
          <p>Configured routing and traffic management using Nginx.</p>
        </div>

        <div className="project-card">
          <h3>Kubernetes Deployment</h3>
          <p>Deployed app with auto-scaling using HPA.</p>
        </div>

      </section>

      {/* Contact */}
      <section id="contact">
        <h2>Contact</h2>

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" onChange={handleChange} required />
          <input name="email" placeholder="Email" onChange={handleChange} required />
          <textarea name="message" placeholder="Message" onChange={handleChange} required />
          <button type="submit">Send</button>
        </form>

      </section>

    </div>
  );
}

export default App;