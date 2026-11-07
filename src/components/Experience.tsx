
type ExperienceItem = {
  role: string
  company: string
  period: string
  description: string
}

const softwareExperience: ExperienceItem[] = [
  {
    role: 'Software Development Trainee',
    company: 'Zaio Technology',
    period: 'September 2023 – September 2024',
    description:
      'Completed practical software development training involving Java, programming fundamentals, hands-on projects and technical problem-solving.',
  },
  {
    role: 'Personal Software Development Projects',
    company: 'Independent Projects',
    period: 'Ongoing',
    description:
      'Designed and developed web applications using Vue.js, React, JavaScript, C#, ASP.NET Core and PostgreSQL. Worked on frontend and backend functionality, REST API integration, database management, testing and debugging.',
  },
]

const professionalExperience: ExperienceItem[] = [
  {
    role: 'Data Capture Specialist',
    company: 'Fixxr',
    period: 'March 2024 – October 2024',
    description:
      'Gained professional experience in data capture, maintaining accuracy, attention to detail and handling information.',
  },
]

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-heading">
        <p className="section-label">MY PROFESSIONAL JOURNEY</p>
        <h2>Experience & Education</h2>
      </div>

      <div className="experience-layout">
        <div className="experience-column">
          <h3>Software Development Experience</h3>

          <div className="timeline">
            {softwareExperience.map((item) => (
              <article className="timeline-item" key={item.role}>
                <span className="timeline-dot"></span>

                <p className="timeline-period">{item.period}</p>

                <h4>{item.role}</h4>

                <h5>{item.company}</h5>

                <p className="timeline-description">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <h3>Professional Work Experience</h3>

          <div className="timeline">
            {professionalExperience.map((item) => (
              <article className="timeline-item" key={item.company}>
                <span className="timeline-dot"></span>

                <p className="timeline-period">{item.period}</p>

                <h4>{item.role}</h4>

                <h5>{item.company}</h5>

                <p className="timeline-description">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="education-column">
          <h3>Education</h3>

          <article className="education-card">
            <span className="education-label">UNIVERSITY EDUCATION</span>

            <h4>BSc Mathematical Science</h4>

            <p className="education-field">Computer Science</p>

            <p className="education-institution">
              University of Limpopo
            </p>

            <span className="education-period">2018 – 2022</span>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience
