import React from 'react'
import styles from './ContactForm.module.css'

const ContactForm: React.FC = () => {
  return (
    <div className={styles.contactMe}>
      <form action={import.meta.env.VITE_FORMSPREE_ENDPOINT} method="POST">
        <h2>Contact with me</h2>
        <p>You can also get in touch with me through this form below.</p>

        <div className={styles.innerWrapper}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </label>
        </div>

        <div className={styles.innerWrapper}>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="_replyto"
              placeholder="email@example.com"
              required
            />
          </label>
        </div>

        <div className={styles.innerWrapper}>
          <label htmlFor="message">
            Message
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message here"
              minLength={10}
              required
            />
          </label>
        </div>

        <button className={styles.buttonMessage} type="submit">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactForm
