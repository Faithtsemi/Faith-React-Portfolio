
const contactDetails = [
  {
    label: 'Email',
    value: 'tsemimasesi8@gmail.com',
    link: 'https://mail.google.com/mail/?view=cm&fs=1&to=tsemimasesi8@gmail.com',
  },
  {
    label: 'Phone',
    value: '+27 676 570 031',
    link: 'tel:+27676570031',
  },
  {
    label: 'LinkedIn',
    value: 'View my LinkedIn profile',
    link: 'https://www.linkedin.com/in/faith-tsemi',
  },
  {
    label: 'GitHub',
    value: 'Explore my GitHub projects',
    link: 'https://github.com/Faithtsemi',
  },
]

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-heading">
        <p className="section-label">LET'S CONNECT</p>
        <h2>Get In Touch</h2>
        <p>
          I'm open to software development opportunities and collaborations.
          Feel free to reach out.
        </p>
      </div>

      <div className="contact-grid">
        {contactDetails.map((detail) => (
          <a
            className="contact-card"
            href={detail.link}
            key={detail.label}
            target={
              detail.label === 'LinkedIn' || detail.label === 'GitHub'
                ? '_blank'
                : undefined
            }
            rel={
              detail.label === 'LinkedIn' || detail.label === 'GitHub'
                ? 'noreferrer'
                : undefined
            }
          >
            <span>{detail.label}</span>
            <h3>{detail.value}</h3>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
