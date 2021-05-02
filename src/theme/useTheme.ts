import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from '../utils/localStorage';

export const useTheme = (): any => {
  const themes = getFromLS('all-themes');
  const [theme, setTheme] = useState(themes.data.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: any) => {
    setToLS('theme', mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = getFromLS('theme');
    if (localTheme) setTheme(localTheme);
    else setTheme(themes.data.light);
    setThemeLoaded(true);
  }, [themes.data.light]);

  return { theme, themeLoaded, setMode };
};
