import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const useMode = () => {
  const { themes, theme, setTheme, forcedTheme, systemTheme, resolvedTheme } =
    useTheme();
  const [lightMode, setLightMode] = useState(true);
  const [hydrationError, setHydrationError] = useState(false);

  useEffect(() => {
    if (theme === "light") {
      setLightMode(true);
    } else if (theme === "dark") {
      setLightMode(false);
    }
  }, [theme]);

  // fix hydration error on next-themes
  useEffect(() => {
    setHydrationError(true);
  }, []);

  return {
    lightMode,
    themes,
    theme,
    setTheme,
    forcedTheme,
    systemTheme,
    resolvedTheme,
    hydrationError,
  };
};
export default useMode;
