import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { StyledEngineProvider } from "@mui/material/styles";
import "./globals.css";
import { LanguageProvider } from "@/app/LanguageContext";
import ThemeContextProvider from "./theme";

export const metadata = {
  title: "Prototype",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledEngineProvider injectFirst>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeContextProvider>
              <LanguageProvider>
                <main>{children}</main>
              </LanguageProvider>
            </ThemeContextProvider>
          </AppRouterCacheProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
