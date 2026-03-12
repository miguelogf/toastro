// src/data/changelog.ts

export type ChangeType = "feat" | "fix" | "perf" | "break" | "docs" | "chore";

export interface Change {
  type: ChangeType;
  text: string;
}

export interface Release {
  version: string;
  date: string;          // ISO 8601 — "2025-01-15"
  title: string;
  description?: string;  // párrafo opcional debajo del título
  changes: Change[];
  status?: "current" | "past"; // se calcula automático si lo omites
}

export const changelog: Release[] = [
  {
    version: "0.1.0",
    date: "2026-03-09",
    title: "First Slice 🍞",
    description: "The very first public release of toastro. A minimal, zero-dependency toast library built specifically for Astro.",
    changes: [
      { type: "feat", text: "Toaster component — drop-in once, works everywhere" },
      { type: "feat", text: "8 visual variants: solid, soft, subtle, outline, ghost, surface, glass, gradient" },
      { type: "feat", text: "5 semantic types: success, error, warning, info, default" },
      { type: "feat", text: "7 configurable positions" },
      { type: "feat", text: "Global window.showToast() API — no imports needed" },
      { type: "feat", text: "Custom SVG icon support, or pass null to hide" },
      { type: "feat", text: "Custom colors and gradient backgrounds" },
      { type: "feat", text: "Configurable duration per toast" },
      { type: "feat", text: "CSS variable theming — inherits your design system" },
      { type: "docs", text: "Full documentation site with live examples" },
    ],
  },
  
];
