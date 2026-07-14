import type { Theme } from "./TypoCraft";

interface Props {
  theme: Theme;
  onThemeChange: (t: Theme) => void;
}

const THEMES: { id: Theme; label: string }[] = [
  { id: "modernist", label: "Modernist" },
  { id: "manuscript", label: "Manuscript" },
  { id: "deepnight", label: "Deep Night" },
];

export default function ThemeNav({ theme, onThemeChange }: Props) {
  const isDark = theme === "deepnight";

  return (
    <nav
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl ${isDark ? "glass-nav-dark" : "glass-nav"
        } rounded-full px-6 py-3 flex items-center justify-between`}
      aria-label="TypoCraft navigation"
    >
      {/* Brand */}
      <div className="flex items-center gap-6">
        <span
          className={`font-headline font-bold text-base tracking-tight select-none ${isDark ? "text-[#f0f6fc]" : "text-on-surface"
            }`}
          style={{ fontFamily: "Epilogue, sans-serif" }}
        >
          TypoCraft
        </span>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        {/* Theme switcher */}
        <div
          className={`hidden md:flex items-center gap-1 rounded-full p-1 ${isDark ? "bg-[#161b22]" : "bg-white/50"
            }`}
        >
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => onThemeChange(t.id)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${theme === t.id
                ? isDark
                  ? "bg-[#10b981] text-[#0d1117] shadow-sm"
                  : "bg-primary text-white shadow-sm"
                : isDark
                  ? "text-[#8b949e] hover:text-[#f0f6fc]"
                  : "text-[#545f73] hover:text-on-surface"
                }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {t.label}
            </button>
          ))}
        </div>
        {/* Mobile theme switcher */}
        <div className="flex md:hidden items-center gap-1">
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => onThemeChange(t.id)}
              title={t.label}
              className={`w-7 h-7 rounded-full text-[10px] font-bold transition-all cursor-pointer ${theme === t.id
                ? "bg-primary text-white scale-110"
                : isDark
                  ? "bg-[#161b22] text-[#8b949e]"
                  : "bg-white/50 text-[#545f73]"
                }`}
            >
              {t.label[0]}
            </button>
          ))}
        </div>

        <div
          className={`h-4 w-px ${isDark ? "bg-[#30363d]" : "bg-outline-variant/60"}`}
        />

      </div>
    </nav>
  );
}
