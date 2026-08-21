import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { LanguageProvider } from "../../../context/LanguageContext";
import ContactForm from "./ContactForm";

const renderForm = () =>
  render(
    <LanguageProvider>
      <ContactForm />
    </LanguageProvider>,
  );

const fillValidForm = () => {
  fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Marco" } });
  fireEvent.change(screen.getByLabelText("Email"), { target: { value: "marco@example.com" } });
  fireEvent.change(screen.getByLabelText("Message"), {
    target: { value: "I would like to discuss a project." },
  });
};

const submitValidForm = () => {
  fillValidForm();
  fireEvent.submit(screen.getByRole("button", { name: "Send Message" }));
};

describe("ContactForm", () => {
  it("focuses the first invalid field after submit", () => {
    renderForm();

    fireEvent.submit(screen.getByRole("button", { name: "Send Message" }));

    expect(screen.getByLabelText("Name")).toHaveFocus();
    expect(screen.getByText("Name is required.")).toBeVisible();
  });

  it("shows the success state after a successful submission", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);
    renderForm();

    submitValidForm();

    expect(await screen.findByText("Message sent successfully.")).toBeVisible();
    expect(fetchMock).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({
          name: "Marco",
          email: "marco@example.com",
          message: "I would like to discuss a project.",
        }),
      }),
    );
  });

  it("shows the error state when the request fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));
    renderForm();

    submitValidForm();

    expect(await screen.findByText("Something went wrong. Please try again.")).toBeVisible();
  });

  it("shows the error state when the request cannot reach the service", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("Network error")));
    renderForm();

    submitValidForm();

    expect(await screen.findByText("Something went wrong. Please try again.")).toBeVisible();
  });

  it("disables the submit button while the request is pending", () => {
    let resolveRequest: (response: Response) => void = () => undefined;
    const pendingRequest = new Promise<Response>((resolve) => {
      resolveRequest = resolve;
    });
    vi.stubGlobal("fetch", vi.fn().mockReturnValue(pendingRequest));
    renderForm();

    submitValidForm();

    expect(screen.getByRole("button", { name: "Sending..." })).toBeDisabled();
    resolveRequest({ ok: true } as Response);
  });

  it("clears a field error when the user edits that field", () => {
    renderForm();

    fireEvent.submit(screen.getByRole("button", { name: "Send Message" }));
    expect(screen.getByText("Name is required.")).toBeVisible();

    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "M" } });

    expect(screen.queryByText("Name is required.")).not.toBeInTheDocument();
  });

  it("allows retrying after a failed request", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce({ ok: false })
      .mockResolvedValueOnce({ ok: true });
    vi.stubGlobal("fetch", fetchMock);
    renderForm();

    submitValidForm();
    await screen.findByText("Something went wrong. Please try again.");

    fireEvent.click(screen.getByRole("button", { name: "Try again" }));

    expect(await screen.findByText("Message sent successfully.")).toBeVisible();
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it("connects invalid fields to their error messages", () => {
    renderForm();

    fireEvent.submit(screen.getByRole("button", { name: "Send Message" }));

    expect(screen.getByLabelText("Name")).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByLabelText("Name")).toHaveAttribute("aria-describedby", "name-error");
    expect(screen.getByLabelText("Email")).toHaveAttribute("aria-describedby", "email-error");
    expect(screen.getByLabelText("Message")).toHaveAttribute("aria-describedby", "message-error");
  });
});
