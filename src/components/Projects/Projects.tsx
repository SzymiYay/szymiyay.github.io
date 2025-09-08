import styles from './Projects.module.css'

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'Moja osobista strona wizytówka z opisem projektów i doświadczenia.',
    tech: 'React, TypeScript, CSS Modules',
    link: 'https://github.com/twojgithub/portfolio'
  },
  {
    title: 'Todo App',
    description: 'Aplikacja do zarządzania zadaniami z lokalnym storage.',
    tech: 'React, TypeScript',
    link: 'https://github.com/twojgithub/todo-app'
  }
]

export default function Projects() {
  return (
    <>
      <section id="projects" className={styles.projects}>
        <h2>Projekty</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.title} className={styles.card}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className={styles.tech}>{project.tech}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                Zobacz na GitHub
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
