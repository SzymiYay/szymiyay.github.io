import './App.module.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Copyrights from './components/Copyrights/Copyrights'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import styles from './App.module.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <div className={styles.divider}></div>
      <Skills />
      <div className={styles.divider}></div>
      <Projects />
      <div className={styles.divider}></div>
      <Contact />
      <div className={styles.divider}></div>
      <Copyrights />
    </>
  )
}

export default App
