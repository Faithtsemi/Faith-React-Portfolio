import { useState } from 'react'
import About from './components/About'
import './App.css'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import profilePhoto from './assets/profile-photo.jpg'
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
   return (
   <>   
  <header className="navbar">
   <a href="#home" className="logo">
    FT<span>.</span>
   </a>

   <button
    className="menu-toggle"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle navigation menu"
    aria-expanded={menuOpen}
   >
    {menuOpen ? '✕' : '☰'}
   </button>

   <nav className={menuOpen ? 'nav-links active' : 'nav-links'}>
    <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
    <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
    <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
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
        <img
        src={profilePhoto}
        alt="Faith Tsemi - Software Developer"
        className="hero-photo"
        />
      </div>
    </section>

     
    <About />
      
    <Skills />
          
    <Projects />
        
    <Experience />

    <Contact />
        
      
</main>
      
<footer className="footer">
  <p>© {new Date().getFullYear()} Faith Tsemi. All rights reserved.</p>

  <div className="footer-links">
    <a href="https://github.com/Faithtsemi" target="_blank" rel="noreferrer">
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
</footer>

  </>
  )
}

export default App
