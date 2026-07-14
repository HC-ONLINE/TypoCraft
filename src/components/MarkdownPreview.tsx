import { useMemo } from "react";
import { marked } from "marked";
import type { Theme } from "./TypoCraft";

interface Props {
  markdown: string;
  theme: Theme;
}

export default function MarkdownPreview({ markdown, theme }: Props) {
  const html = useMemo(() => {
    marked.setOptions({ breaks: true });
    return marked.parse(markdown) as string;
  }, [markdown]);

  if (theme === "manuscript") {
    return (
      <section
        className="w-full md:w-[45%] h-full flex flex-col overflow-hidden px-6 py-10"
        aria-label="Manuscript preview"
      >
        {/* Page wrapper with dotted parchment background */}
        <div
          className="flex-1 overflow-y-auto custom-scroll workspace-bg relative"
          style={{
            backgroundImage:
              "radial-gradient(#e5dcc5 1px, transparent 1px), url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E\")",
            backgroundSize: "20px 20px",
            backgroundColor: "#fcf5e5",
          }}
        >
          {/* Page shadow decoration */}
          <div
            className="absolute inset-y-0 right-0 w-4 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, rgba(0,0,0,0.06), transparent)",
            }}
            aria-hidden="true"
          />

          {/* Top margin ornament */}
          <div className="flex justify-center pt-10 pb-4">
            <div className="flex items-center gap-3">
              <div
                className="h-px w-16"
                style={{ backgroundColor: "#a43a3a", opacity: 0.3 }}
              />
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "14px", color: "#a43a3a", opacity: 0.4 }}
                aria-hidden="true"
              >
                auto_awesome
              </span>
              <div
                className="h-px w-16"
                style={{ backgroundColor: "#a43a3a", opacity: 0.3 }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="pb-6">
            <div
              className="prose-manuscript"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>

          {/* Footer folio */}
          <div className="flex justify-center pb-10">
            <div className="flex flex-col items-center gap-2">
              <span
                style={{
                  fontFamily: "Crimson Pro, serif",
                  fontStyle: "italic",
                  fontSize: "0.8rem",
                  color: "#a43a3a",
                  opacity: 0.6,
                }}
              >
                Folio I
              </span>
              <div
                className="h-px w-8"
                style={{ backgroundColor: "#a43a3a", opacity: 0.2 }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (theme === "modernist") {
    return (
      <section
        className="w-full md:w-[55%] h-full flex flex-col overflow-hidden bg-[#f0f2f4] px-6 py-10"
        aria-label="Modernist preview"
      >
        <div className="flex-1 overflow-y-auto custom-scroll flex justify-center">
          {/* Floating A4 page */}
          <div
            className="w-full max-w-2xl bg-white min-h-225 rounded-sm relative"
            style={{
              boxShadow: "0 24px 64px -12px rgba(25,28,29,0.12)",
              padding: "4rem 4rem 5rem",
            }}
          >
            {/* Top label */}
            <div
              className="font-mono text-[10px] uppercase tracking-[0.25em] mb-4"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                color: "#006c49",
              }}
            >
              Preview · Modernist
            </div>

            <div
              className="prose-modernist"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            {/* Footer */}
            <div
              className="absolute bottom-6 left-10 right-10 flex items-center justify-between border-t pt-4"
              style={{ borderColor: "#e1e3e4" }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#191c1d" }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "12px", color: "#4edea3" }}
                    aria-hidden="true"
                  >
                    architecture
                  </span>
                </div>
                <span
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#545f73",
                  }}
                >
                  TypoCraft
                </span>
              </div>
              <span
                className="text-[10px] italic"
                style={{
                  fontFamily: "Crimson Pro, serif",
                  color: "#545f73",
                }}
              >
                Page 01
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Deep Night
  return (
    <section
      className="w-full md:w-[55%] h-full flex flex-col overflow-hidden px-6 py-10"
      style={{ backgroundColor: "#0d1117" }}
      aria-label="Deep Night preview"
    >
      <div className="flex-1 overflow-y-auto custom-scroll custom-scroll-dark">
        {/* Browser chrome mockup */}
        <div
          className="rounded-lg overflow-hidden border mb-0"
          style={{ borderColor: "#30363d" }}
        >
          {/* Browser title bar */}
          <div
            className="flex items-center px-4 gap-2 h-9 border-b"
            style={{ backgroundColor: "#161b22", borderColor: "#30363d" }}
          >
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: "rgba(239,68,68,0.5)" }}
              aria-hidden="true"
            />
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: "rgba(234,179,8,0.5)" }}
              aria-hidden="true"
            />
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: "rgba(34,197,94,0.5)" }}
              aria-hidden="true"
            />
            <div
              className="ml-3 flex-1 max-w-xs h-5 rounded-full flex items-center px-3"
              style={{
                backgroundColor: "#0d1117",
                border: "1px solid #30363d",
              }}
            >
              <span
                className="font-mono text-[9px]"
                style={{ color: "#8b949e" }}
              >
                preview.typocraft.dev/deep-night
              </span>
            </div>
          </div>

          {/* Preview content */}
          <div
            className="p-8 md:p-12"
            style={{ backgroundColor: "#0d1117" }}
          >
            <div
              className="prose-deepnight"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>

          {/* Status bar */}
          <div
            className="flex items-center justify-between px-6 py-2 border-t"
            style={{ backgroundColor: "#161b22", borderColor: "#30363d" }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: "#10b981",
                  boxShadow: "0 0 6px rgba(16,185,129,0.6)",
                }}
                aria-hidden="true"
              />
              <span
                className="font-mono text-[10px] uppercase tracking-widest"
                style={{
                  color: "#8b949e",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                Live Render
              </span>
            </div>
            <span
              className="font-mono text-[9px]"
              style={{ color: "#6272a4" }}
            >
              Deep Night · v1.0.0
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
