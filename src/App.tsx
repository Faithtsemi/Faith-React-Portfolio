import About from './components/About'
import './App.css'
import Skills from './components/Skills'
import Projects from './components/Projects'
function App() {
  return (
    <>
      <header className="navbar">
        <a href="#home" className="logo">
          FT<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-content">
            <p className="intro-label">HELLO, I'M</p>

            <h1>
              Faith Tsemi<span>.</span>
            </h1>

            <h2>Software Developer</h2>

            <p className="hero-description">
              I build practical, user-focused digital solutions
              using modern web technologies. I enjoy solving
              problems and turning ideas into functional
              applications.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Projects
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Faithtsemi"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/faith-tsemi"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-decoration">
            <div className="initials-card">
              FT
              <span>Software Developer</span>
            </div>
          </div>
        </section>

        
        <About />
      

        <Skills />
          
    

        <Projects />
        
      

        <section id="contact" className="placeholder-section">
          <h2>Contact Me</h2>
        </section>
      </main>
    </>
  )
}

export default App
