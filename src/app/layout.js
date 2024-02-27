import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { StyledEngineProvider } from "@mui/material/styles";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import ThemeContextProvider from "./theme";
export const metadata = {
  title: "Prototype",
  viewport: "width=720px,initial-scale=1",
  formatDetection: "telephone=no,email=no,address=no",
  charset: "UTF-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SpeedInsights />
        <StyledEngineProvider injectFirst>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeContextProvider>
              <main>{children}</main>
            </ThemeContextProvider>
          </AppRouterCacheProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
