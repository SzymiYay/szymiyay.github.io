import styles from './Skills.module.css'

export default function Skills() {
  const skills = [
    'React',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Git',
    'Node.js'
  ]

  return (
    <>
      <section id="skills" className={styles.skills}>
        <h2>Technologie</h2>
        <ul className={styles.list}>
          {skills.map((skill) => (
            <li key={skill} className={styles.item}>
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
