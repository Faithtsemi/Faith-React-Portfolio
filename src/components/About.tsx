
function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-heading">
        <p className="section-label">GET TO KNOW ME</p>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>Building solutions through technology.</h3>

          <p>
            I am a Computer Science graduate with a passion
            for software development and creating practical
            digital solutions.
          </p>

          <p>
            I have professional experience as a Junior Java
            Developer at Zaio Technology and as a Data Capture
            Specialist at Fixxr. These experiences helped me
            develop my technical, analytical and problem-solving
            skills.
          </p>

          <p>
            I enjoy learning new technologies, exploring
            different approaches to solving problems and
            developing applications that make everyday tasks
            easier.
          </p>
        </div>

        <div className="about-details">
          <div className="detail-card">
            <span>Education</span>
            <h4>BSc Mathematical Science</h4>
            <p>Computer Science</p>
          </div>

          <div className="detail-card">
            <span>Experience</span>
            <h4>Software Development</h4>
            <p>Junior Java Developer</p>
          </div>

          <div className="detail-card">
            <span>Location</span>
            <h4>South Africa</h4>
            <p>Open to opportunities</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
