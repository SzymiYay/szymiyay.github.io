import styles from './Contact.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Kontakt</h2>
      <p>
        Chcesz się ze mną skontaktować? Napisz na:{' '}
        <a href="mailto:szymoon09@gmail.com">szymoon09@gmail.com</a>
      </p>
    </section>
  )
}

export default Contact
