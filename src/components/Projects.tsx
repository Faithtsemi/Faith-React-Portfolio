
type Project = {
  title: string
  description: string
  technologies: string[]
  features: string[]
  category: string
  link?: string
  demoLink?: string
  liveLink?: string
}

const projects: Project[] = [
  {
    title: 'Task Management Application',
    description:
      'A full-stack task management application designed to help users organise tasks, track progress and manage deadlines.',
    technologies: [
      'Vue.js',
      'C#',
      'ASP.NET Core',
      'PostgreSQL',
      'REST API',
    ],
    features: [
      'Create, edit and delete tasks',
      'Track task completion',
      'Set and manage due dates',
      'Filter tasks by status and deadline',
    ],
    category: 'Full-Stack Development',
    link: 'https://github.com/Faithtsemi/todo-list-app',
     demoLink:'https://youtu.be/o7Ch4E-IF0o?si=FY8dPWZ-YL6K2DSg',
  },
  {
    title: 'Optometrist Website',
    description:
      'A responsive website designed to present optometry services and provide visitors with a convenient way to make enquiries.',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Web3Forms',
    ],
    features: [
      'Responsive website layout',
      'Service and information sections',
      'Interactive navigation',
      'Enquiry functionality',
    ],
    category: 'Frontend Development',
    link: 'https://github.com/Faithtsemi/My-project',
    demoLink:'https://youtu.be/fWu-p7E7teo?si=Ty2mSOUX4wr8O1oQ',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-heading">
        <p className="section-label">MY RECENT WORK</p>
        <h2>Featured Projects</h2>
        <p className="projects-intro">
          A selection of applications and websites I've
          developed while growing my software development skills.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-top">
              <span className="project-category">
                {project.category}
              </span>
              <span className="project-icon">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <h4>Key Features</h4>

            <ul className="project-features">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <div className="technology-list">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="project-links">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Watch Demo → 
                </a>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View on GitHub →
                </a>
              )}

              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
