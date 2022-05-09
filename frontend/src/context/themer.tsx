import { createContext, ReactNode, useEffect, useState } from 'react';
import { Theme } from 'src/constant/Theme';

export const ThemeContext = createContext({
  themeName: Theme.Light,
  toggleTheme: (): void => undefined,
});

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeName, setThemeName] = useState<Theme>(Theme.Light);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', Theme.Light);
  }, []);

  const toggleTheme = () => {
    setThemeName(themeName === Theme.Light ? Theme.Dark : Theme.Light);
    document.documentElement.setAttribute(
      'data-theme',
      themeName === Theme.Light ? Theme.Dark : Theme.Light,
    );
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
