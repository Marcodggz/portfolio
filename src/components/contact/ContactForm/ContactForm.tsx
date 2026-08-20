import React, { useState } from "react";
import { useLanguage } from "../../../context/useLanguage";
import { translations } from "../../../data/translations";
import styles from "./ContactForm.module.css";

type FormStatus = "idle" | "sending" | "sent" | "error";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const ContactForm: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!fields.name.trim()) {
      newErrors.name = t.nameRequired;
    } else if (fields.name.trim().length < 2) {
      newErrors.name = t.nameMinLength;
    } else if (fields.name.trim().length > 100) {
      newErrors.name = t.nameMaxLength;
    }

    if (!fields.email.trim()) {
      newErrors.email = t.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      newErrors.email = t.emailInvalid;
    }

    if (!fields.message.trim()) {
      newErrors.message = t.messageRequired;
    } else if (fields.message.trim().length < 10) {
      newErrors.message = t.messageMinLength;
    } else if (fields.message.trim().length > 500) {
      newErrors.message = t.messageMaxLength;
    }

    return newErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(fields),
      });

      if (response.ok) {
        setStatus("sent");
        setFields({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleFieldChange = (field: keyof typeof fields, value: string) => {
    setFields((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (status === "sent" || status === "error") {
      setStatus("idle");
    }
  };

  return (
    <div className={styles.contactMe}>
      <form onSubmit={handleSubmit} noValidate>
        <h2>{t.formHeading}</h2>
        <p>{t.formSubtitle}</p>

        <div className={styles.innerWrapper}>
          <label htmlFor="name">
            {t.nameLabel}
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              placeholder={t.namePlaceholder}
              value={fields.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFieldChange("name", e.target.value)
              }
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
          </label>
          {errors.name && (
            <span id="name-error" role="alert" className={styles.errorText}>
              {errors.name}
            </span>
          )}
        </div>

        <div className={styles.innerWrapper}>
          <label htmlFor="email">
            {t.emailLabel}
            <input
              type="email"
              id="email"
              name="_replyto"
              autoComplete="email"
              placeholder={t.emailPlaceholder}
              value={fields.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFieldChange("email", e.target.value)
              }
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
          </label>
          {errors.email && (
            <span id="email-error" role="alert" className={styles.errorText}>
              {errors.email}
            </span>
          )}
        </div>

        <div className={styles.innerWrapper}>
          <label htmlFor="message">
            {t.messageLabel}
            <textarea
              id="message"
              name="message"
              placeholder={t.messagePlaceholder}
              value={fields.message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                handleFieldChange("message", e.target.value)
              }
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
          </label>
          {errors.message && (
            <span id="message-error" role="alert" className={styles.errorText}>
              {errors.message}
            </span>
          )}
        </div>

        <button
          className={styles.buttonMessage}
          type="submit"
          disabled={status === "sending"}
        >
          {status === "idle" && t.sendButton}
          {status === "sending" && t.sendingButton}
          {status === "sent" && t.sentButton}
          {status === "error" && t.errorButton}
        </button>

        {/* aria-live region always present so screen readers announce status changes */}
        <p
          aria-live="polite"
          aria-atomic="true"
          className={styles.statusMessage}
        >
          {status === "sent" && t.successMessage}
          {status === "error" && t.errorMessage}
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
