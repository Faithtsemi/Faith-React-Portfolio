
type Project = {
  title: string
  description: string
  technologies: string[]
  features: string[]
  category: string
  link?: string
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
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-top">
              <span className="project-category">
                {project.category}
              </span>
              <span className="project-icon">01</span>
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
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
