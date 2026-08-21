import { describe, expect, it } from "vitest";
import { projects } from "./projects";
import { skills } from "./skills";
import { translations } from "./translations";

const getKeys = (value: unknown): string[] => {
  if (!value || typeof value !== "object") return [];

  return Object.entries(value as Record<string, unknown>).flatMap(
    ([key, child]) => {
      const childKeys = getKeys(child);
      return childKeys.length > 0
        ? childKeys.map((childKey) => `${key}.${childKey}`)
        : [key];
    },
  );
};

describe("portfolio data", () => {
  it("keeps English and Spanish translation keys in sync", () => {
    expect(getKeys(translations.en)).toEqual(getKeys(translations.es));
  });

  it("keeps every project complete", () => {
    projects.forEach((project) => {
      expect(project.title).toBeTruthy();
      expect(project.descriptionKey).toBeTruthy();
      expect(project.image).toBeTruthy();
      expect(project.imageAlt).toBeTruthy();
      expect(project.githubUrl).toMatch(/^https:\/\//);
      expect(project.technologies.length).toBeGreaterThan(0);
    });
  });

  it("keeps every skill labeled and backed by a local icon", () => {
    skills.forEach((skill) => {
      expect(skill.name).toBeTruthy();
      expect(skill.label).toBeTruthy();
      expect(skill.icon).toMatch(/^(data:image\/svg\+xml|.*\.svg$)/);
    });
  });
});
