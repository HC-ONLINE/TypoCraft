"use client";

import { useState, useCallback } from "react";
import ThemeNav from "./ThemeNav";
import MarkdownEditor from "./MarkdownEditor";
import MarkdownPreview from "./MarkdownPreview";

export type Theme = "manuscript" | "modernist" | "deepnight";

const DEFAULT_MARKDOWN = `# The Alchemist's Study

The light filtered through the **stained glass** like liquid emeralds. Every surface was cluttered with the debris of curiosity: brass astrolabes, crumbling vellum, and jars of iridescent salts that whispered when the wind rattled the casement.

He didn't look up when the door creaked. The *manuscript* demanded more than just his attention — it demanded his very soul.

> "Is it finished?" she asked, her voice a fragile bridge across the silence of the room. He didn't answer. He simply reached for the quill.

## Core Principles

The nib scratched against the surface, a rhythmic pulse that matched the ticking of the clockwork heart on the mantle. This was the work of a lifetime, or perhaps several.

- **Intentional Asymmetry** — breaking the grid to guide the eye
- **Typographic Hierarchy** — from headline to footnote
- **Atmospheric Depth** — every layer tells a story

### A Note on Craft

The ink was still wet, reflecting the candlelight in tiny, trembling pools of black. He had spent years perfecting the formula.

\`\`\`typescript
interface ThemeConfig {
  name: "Manuscript" | "Modernist" | "Deep Night";
  primary: string;
  fontFamily: string;
}

function applyTheme(config: ThemeConfig) {
  // Transform the entire visual identity
  return document.body.setAttribute("data-theme", config.name);
}
\`\`\`

This was the work of a lifetime, or perhaps **several lifetimes**. The craft of words made *visible*.

---

*TypoCraft — where Markdown becomes art.*
`;

const THEME_CLASSES: Record<Theme, string> = {
  manuscript: "theme-manuscript",
  modernist: "theme-modernist",
  deepnight: "theme-deepnight",
};

const THEME_BG: Record<Theme, string> = {
  manuscript: "#fcf5e5",
  modernist: "#f0f2f4",
  deepnight: "#0d1117",
};

export default function TypoCraft() {
  const [theme, setTheme] = useState<Theme>("modernist");
  const [markdown, setMarkdown] = useState(DEFAULT_MARKDOWN);

  const handleMarkdownChange = useCallback((v: string) => {
    setMarkdown(v);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col ${THEME_CLASSES[theme]}`}
      style={{ backgroundColor: THEME_BG[theme] }}
    >
      <ThemeNav theme={theme} onThemeChange={setTheme} />

      {/* Main workspace — full viewport split pane */}
      <main
        className="flex flex-col md:flex-row flex-1 pt-18 overflow-hidden h-dvh"
      >
        {/* Editor pane */}
        <MarkdownEditor
          value={markdown}
          onChange={handleMarkdownChange}
          theme={theme}
        />

        {/* Preview pane */}
        <MarkdownPreview markdown={markdown} theme={theme} />
      </main>

    </div>
  );
}
