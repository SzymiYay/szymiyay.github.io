import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [showDrawer, setShowDrawer] = useState(false)
  const [isMountedDrawer, setIsMountedDrawer] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  })

  const handleOpen = () => {
    setIsMountedDrawer(true)
  }

  const handleClose = () => {
    setShowDrawer(false)
    setTimeout(() => {
      setIsMountedDrawer(false)
    }, 300)
  }

  useEffect(() => {
    if (isMountedDrawer) {
      setTimeout(() => {
        setShowDrawer(true)
      }, 10)
    }
  }, [isMountedDrawer])

  return (
    <>
      <header
        className={`${styles.header} ${
          activeSection === 'hero' ? styles.transparent : styles.solid
        }`}
      >
        <nav className={styles.navbar}>
          <div className={styles.logo}>szymiyay</div>
          <div>
            <ul className={styles.links}>
              <li>
                <a
                  href="#about"
                  className={activeSection === 'about' ? styles.active : ''}
                  onClick={() => setActiveSection('about')}
                >
                  O mnie
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={activeSection === 'skills' ? styles.active : ''}
                  onClick={() => setActiveSection('skills')}
                >
                  Technologie
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={activeSection === 'projects' ? styles.active : ''}
                  onClick={() => setActiveSection('projects')}
                >
                  Projekty
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeSection === 'contact' ? styles.active : ''}
                  onClick={() => setActiveSection('contact')}
                >
                  Kontakt
                </a>
              </li>
            </ul>

            <button className={styles.hamburger} onClick={handleOpen}>
              ☰
            </button>
          </div>
        </nav>
      </header>

      {isMountedDrawer && (
        <div
          className={`${styles.overlay} ${showDrawer ? styles.show : ''}`}
          onClick={handleClose}
        >
          <div
            className={`${styles.drawer} ${
              showDrawer ? styles.open : styles.close
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.btnClose} onClick={handleClose}>
              X
            </button>
            <nav className={styles.drawerLinks}>
              <a
                href="#about"
                className={styles.drawerLink}
                onClick={handleClose}
              >
                <span>O mnie</span>
                <span>→</span>
              </a>
              <a
                href="#skills"
                className={styles.drawerLink}
                onClick={handleClose}
              >
                <span>Technologie</span>
                <span>→</span>
              </a>
              <a
                href="#projects"
                className={styles.drawerLink}
                onClick={handleClose}
              >
                <span>Projekty</span>
                <span>→</span>
              </a>
              <a
                href="#contact"
                className={styles.drawerLink}
                onClick={handleClose}
              >
                <span>Kontakt</span>
                <span>→</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
