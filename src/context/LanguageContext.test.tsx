import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useLanguage } from "./useLanguage";
import { LanguageProvider } from "./LanguageContext";

const LanguageProbe = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <>
      <span>{language}</span>
      <button type="button" onClick={() => setLanguage("es")}>
        Set Spanish
      </button>
    </>
  );
};

describe("LanguageProvider", () => {
  it("uses the saved language on initial render", () => {
    localStorage.setItem("portfolio-language", "es");

    render(
      <LanguageProvider>
        <LanguageProbe />
      </LanguageProvider>,
    );

    expect(screen.getByText("es")).toBeVisible();
    expect(document.documentElement.lang).toBe("es");
  });

  it("falls back to English for an invalid saved language", () => {
    localStorage.setItem("portfolio-language", "fr");

    render(
      <LanguageProvider>
        <LanguageProbe />
      </LanguageProvider>,
    );

    expect(screen.getByText("en")).toBeVisible();
  });

  it("persists the selected language and updates document lang", () => {
    render(
      <LanguageProvider>
        <LanguageProbe />
      </LanguageProvider>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Set Spanish" }));

    expect(screen.getByText("es")).toBeVisible();
    expect(localStorage.getItem("portfolio-language")).toBe("es");
    expect(document.documentElement.lang).toBe("es");
  });
});
