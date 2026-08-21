import { describe, expect, it } from "vitest";
import { validateContactForm } from "./validation";

describe("validateContactForm", () => {
  it("returns all required-field errors for an empty form", () => {
    expect(validateContactForm({ name: "", email: "", message: "" })).toEqual({
      name: "nameRequired",
      email: "emailRequired",
      message: "messageRequired",
    });
  });

  it("rejects invalid lengths and email addresses", () => {
    expect(
      validateContactForm({ name: "A", email: "invalid", message: "Too short" }),
    ).toEqual({
      name: "nameMinLength",
      email: "emailInvalid",
      message: "messageMinLength",
    });
  });

  it("accepts valid contact details", () => {
    expect(
      validateContactForm({
        name: "Marco Dominguez",
        email: "marco@example.com",
        message: "I would like to discuss a project.",
      }),
    ).toEqual({});
  });

  it("rejects values above the maximum lengths", () => {
    expect(
      validateContactForm({
        name: "N".repeat(101),
        email: "marco@example.com",
        message: "M".repeat(501),
      }),
    ).toEqual({
      name: "nameMaxLength",
      message: "messageMaxLength",
    });
  });

  it("accepts values at the inclusive boundaries", () => {
    expect(
      validateContactForm({
        name: "Ma",
        email: "m@example.com",
        message: "1234567890",
      }),
    ).toEqual({});

    expect(
      validateContactForm({
        name: "N".repeat(100),
        email: "m@example.com",
        message: "M".repeat(500),
      }),
    ).toEqual({});
  });
});
