import { ThemeProvider } from "next-themes";

/**
 * Providers Component
 *
 * A wrapper component that gathers and manages all the providers for the application.
 * This example includes the `ThemeProvider` for managing light and dark themes.
 *
 * @property {React.ReactNode} children - The child components wrapped by the Providers.
 *
 * Features:
 * - Manages theme preferences (e.g., "light" or "dark").
 * - Disables automatic system-based theme switching (`enableSystem=false`).
 * - Allows customization of theme options through the `themes` prop.
 *
 * @returns {JSX.Element} - A component that provides context to its children.
 */

const Providers = ({ children }) => {
  return (
    // ThemeProvider: Handles theme settings for the application
    <ThemeProvider themes={["light", "dark"]} enableSystem={false}>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
