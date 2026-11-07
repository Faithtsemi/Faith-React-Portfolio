
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
            for software development and building practical,
            user-focused digital solutions.
          </p>

          <p>
            I have developed my software development skills
            through practical training and projects with Zaio
            Technology, alongside professional experience as
            a Data Capture Specialist at Fixxr. These
            experiences strengthened my technical, analytical
            and problem-solving skills.
          </p>

          <p>
            I enjoy learning new technologies, solving
            problems and developing applications that make
            everyday tasks easier.
          </p>
        </div>

        <div className="about-details">
          <div className="detail-card">
            <span>Education</span>
            <h4>BSc Mathematical Science</h4>
            <p>Computer Science</p>
            <p>University of Limpopo | 2018–2022</p>
          </div>

          <div className="detail-card">
            <span>Experience</span>
            <h4>Software Development</h4>
            <p>Practical Training – Zaio Technology</p>
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
