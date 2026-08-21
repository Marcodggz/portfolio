import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LanguageProvider } from "../../../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

describe("LanguageSwitcher", () => {
  it("updates its accessible labels when the language changes", () => {
    render(
      <LanguageProvider>
        <LanguageSwitcher />
      </LanguageProvider>,
    );

    fireEvent.click(screen.getByRole("button", { name: /ES/ }));

    expect(screen.getByRole("group", { name: "Selector de idioma" })).toBeVisible();
    expect(screen.getByRole("button", { name: /Cambiar a inglés/ })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });
});
