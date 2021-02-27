import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface ThemeContextData {
  theme: string;
  switchTheme: () => void;
}

interface CowntdownProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: CowntdownProviderProps) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(Cookies.set("theme", String(theme)));
  }, []);

  function switchTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(Cookies.set("theme", String(newTheme)));
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
