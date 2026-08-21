import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import App from "./App";
import { LanguageProvider } from "./context/LanguageContext";

const renderApp = (path: string) => {
  vi.stubGlobal("scrollTo", vi.fn());

  return render(
    <LanguageProvider>
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    </LanguageProvider>,
  );
};

describe("App routing", () => {
  it("sets the home title and moves focus to main on navigation", () => {
    renderApp("/");

    expect(document.title).toBe("Marco Dominguez — Portfolio");
    expect(document.getElementById("main-content")).toHaveFocus();
  });

  it("sets the not-found title for unknown routes", () => {
    renderApp("/unknown-route");

    expect(document.title).toBe("Marco Dominguez — Page not found");
    expect(screen.getByRole("heading", { name: "Page not found" })).toBeVisible();
  });
});
