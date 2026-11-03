
type Skill = {
  name: string
  category: string
  level: string
}

const skills: Skill[] = [
  { name: 'Java', category: 'Backend Development', level: 'Proficient' },
  { name: 'C#', category: 'Backend Development', level: 'Proficient' },
  { name: 'JavaScript', category: 'Frontend Development', level: 'Proficient' },
  { name: 'Vue.js', category: 'Frontend Development', level: 'Proficient' },
  { name: 'React', category: 'Frontend Development', level: 'Developing' },
  { name: 'TypeScript', category: 'Frontend Development', level: 'Developing' },
  { name: 'HTML5', category: 'Frontend Development', level: 'Proficient' },
  { name: 'CSS3', category: 'Frontend Development', level: 'Proficient' },
  { name: 'Node.js', category: 'Backend Development', level: 'Working knowledge' },
  { name: 'Express.js', category: 'Backend Development', level: 'Proficient' },
  { name: 'ASP.NET Core', category: 'Backend Development', level: 'Working knowledge' },
  { name: 'PostgreSQL', category: 'Databases', level: 'Proficient' },
  { name: 'SQL', category: 'Databases', level: 'Proficient' },
  { name: 'Git & GitHub', category: 'Tools', level: 'Proficient' },
]

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-heading">
        <p className="section-label">WHAT I WORK WITH</p>
        <h2>Technical Skills</h2>
        <p className="skills-intro">
          Technologies and tools I use to build, test and
          improve software applications.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.name}>
            <h3>{skill.name}</h3>
            <p>{skill.category}</p>
            <span>{skill.level}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
