export type ContactFields = {
  name: string;
  email: string;
  message: string;
};

export type ContactErrorKey =
  | "nameRequired"
  | "nameMinLength"
  | "nameMaxLength"
  | "emailRequired"
  | "emailInvalid"
  | "messageRequired"
  | "messageMinLength"
  | "messageMaxLength";

export type ContactErrors = Partial<Record<keyof ContactFields, ContactErrorKey>>;

export const validateContactForm = (fields: ContactFields): ContactErrors => {
  const errors: ContactErrors = {};

  if (!fields.name.trim()) {
    errors.name = "nameRequired";
  } else if (fields.name.trim().length < 2) {
    errors.name = "nameMinLength";
  } else if (fields.name.trim().length > 100) {
    errors.name = "nameMaxLength";
  }

  if (!fields.email.trim()) {
    errors.email = "emailRequired";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "emailInvalid";
  }

  if (!fields.message.trim()) {
    errors.message = "messageRequired";
  } else if (fields.message.trim().length < 10) {
    errors.message = "messageMinLength";
  } else if (fields.message.trim().length > 500) {
    errors.message = "messageMaxLength";
  }

  return errors;
};
