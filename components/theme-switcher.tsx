"use client";

import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDev = process.env.NODE_ENV === "development";

  return isDev ? (
    <button
      className="absolute bottom-8 left-8 text-sm text-muted-foreground/10"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "light" : "dark"}
    </button>
  ) : null;
};
