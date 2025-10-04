import { useEffect, useState } from "react";
import { ThemeProviderContext } from "@/context/ThemeContext";

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  );

  // Theme apply & localStorage update
  useEffect(() => {
    const root = document.documentElement;

    const isSystemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const appliedTheme =
      theme === "system" ? (isSystemDark ? "dark" : "light") : theme;

    root.classList.remove("light", "dark");
    root.classList.add(appliedTheme);

    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  const value = { theme, setTheme };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
