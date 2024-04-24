import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online tour",
  description: "Online tour app"
};

export default function RootLayout(
  {
    children
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <main className="container">
          {children}
        </main>
        <Footer />
      </ThemeProvider>
    </AppRouterCacheProvider>
    </body>
    </html>
  );
}
