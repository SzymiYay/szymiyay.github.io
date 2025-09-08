import styles from './Hero.module.css'

export default function Hero() {
  return (
    <>
      <section id="hero" className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.name}>Szymon Frączek</h1>
          <p className={styles.subtitle}>Fullstack Developer</p>
          <div className={styles.buttons}>
            <a href="/cv.pdf" className={styles.btn}>
              Pobierz CV
            </a>
            <a
              href="https://github.com/szymiyay"
              target="_blank"
              rel="noreferer"
              className={`${styles.btn} ${styles.btnSecondary}`}
            >
              GitHub
            </a>
            <a
              href="https://szymiyay.github.io/finance"
              target="_blank"
              rel="noreferer"
              className={`${styles.btn} ${styles.btnSecondary}`}
            >
              Finance
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
