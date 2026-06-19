import React, { useState } from 'react'
import styles from './ContactForm.module.css'

const ContactForm: React.FC = () => {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    message: ''
  })

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
              value={fields.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFields(prev => ({ ...prev, name: e.target.value }))
              }
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
              value={fields.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFields(prev => ({ ...prev, email: e.target.value }))
              }
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
              value={fields.message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setFields(prev => ({ ...prev, message: e.target.value }))
              }
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
