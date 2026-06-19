import React, { useState } from 'react'
import styles from './ContactForm.module.css'

type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

const ContactForm: React.FC = () => {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(fields)
      })

      if (response.ok) {
        setStatus('sent')
        setFields({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className={styles.contactMe}>
      <form onSubmit={handleSubmit}>
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

        <button
          className={styles.buttonMessage}
          type="submit"
          disabled={status === 'sending'}
        >
          {status === 'idle' && 'Send Message'}
          {status === 'sending' && 'Sending...'}
          {status === 'sent' && 'Message sent'}
          {status === 'error' && 'Try again'}
        </button>

        {status === 'sent' && <p>Message sent successfully.</p>}
        {status === 'error' && <p>Something went wrong. Please try again.</p>}
      </form>
    </div>
  )
}

export default ContactForm
