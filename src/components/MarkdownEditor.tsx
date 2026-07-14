import type { Theme } from "./TypoCraft";

interface Props {
  value: string;
  onChange: (v: string) => void;
  theme: Theme;
}

export default function MarkdownEditor({ value, onChange, theme }: Props) {
  const isDark = theme === "deepnight";

  const lineCount = value.split("\n").length;

  return (
    <section
      className="w-full md:w-[45%] shrink-0 flex flex-col relative min-w-0 overflow-hidden px-6 py-10"
      style={{ minHeight: 0 }}
      aria-label="Markdown editor"
    >
      {/* Editor header */}
      <div
        className={`flex items-center justify-between px-5 py-3 border-b shrink-0 ${isDark
          ? "bg-[#161b22] border-[#30363d]"
          : theme === "manuscript"
            ? "bg-[#1a1208] border-[#2a1f0a]"
            : "bg-[#111c2d] border-[#1e2d44]"
          }`}
      >
        <div className="flex items-center gap-3">
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "16px", color: "#4edea3" }}
            aria-hidden="true"
          >
            edit
          </span>
          <span
            className="font-mono text-[10px] uppercase tracking-widest"
            style={{
              color: isDark ? "#8b949e" : "#4edea3",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            markdown source
          </span>
        </div>
        <span
          className="font-mono text-[10px]"
          style={{
            color: isDark ? "#6272a4" : "#586377",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          {lineCount} lines
        </span>
      </div>

      {/* Editor body */}
      <div
        className="flex flex-1 min-h-0 min-w-0 overflow-hidden"
        style={{
          backgroundColor: isDark
            ? "#0d1117"
            : theme === "manuscript"
              ? "#1a1208"
              : "#111c2d",
        }}
      >
        {/* Line numbers */}
        <div
          className="shrink-0 overflow-y-hidden flex flex-col pt-4 pb-4 pl-3 pr-3 gap-0 select-none text-right"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "12px",
            lineHeight: "1.625rem",
            color: isDark ? "#30363d" : "#3c475a",
            borderRight: `1px solid ${isDark ? "#21262d" : "#1e2d44"}`,
            width: "40px",
          }}
          aria-hidden="true"
        >
          {Array.from({ length: Math.max(lineCount, 20) }, (_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>

        {/* Textarea — no horizontal scroll, wraps long lines */}
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          spellCheck={false}
          className="flex-1 min-w-0 resize-none p-4 focus:outline-none custom-scroll"
          aria-label="Write Markdown here"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "13px",
            lineHeight: "1.625rem",
            backgroundColor: "transparent",
            color:
              isDark
                ? "#f8f8f2"
                : theme === "manuscript"
                  ? "#e8d5a3"
                  : "#d8e3fb",
            caretColor: isDark ? "#50fa7b" : "#4edea3",
            tabSize: 2,
            overflowX: "hidden",
            overflowY: "auto",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
          }}
        />
      </div>

      {/* Editor footer */}
      <div
        className={`flex items-center justify-between px-5 py-2 shrink-0 border-t ${isDark
          ? "bg-[#161b22] border-[#30363d]"
          : theme === "manuscript"
            ? "bg-[#1a1208] border-[#2a1f0a]"
            : "bg-[#111c2d] border-[#1e2d44]"
          }`}
      >
        <span
          className="font-mono text-[10px] uppercase tracking-widest"
          style={{
            color: isDark ? "#6272a4" : "#3c475a",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          UTF-8 · Markdown
        </span>

        <span
          className="font-mono text-[10px]"
          style={{
            color: isDark ? "#6272a4" : "#3c475a",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          {value.length} chars
        </span>
      </div>
    </section>
  );
}
