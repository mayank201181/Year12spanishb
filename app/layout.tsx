import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/lib/store";
import { AppGate } from "@/components/AppGate";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { SUBJECT } from "@/lib/subject";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });

export const metadata: Metadata = {
  title: { default: SUBJECT.fullName, template: `%s · ${SUBJECT.shortTitle}` },
  description: `Vanishree's ${SUBJECT.fullName} revision hub — AoPS discovery lessons, IB mark-scheme traps, interactive explorables, procedural skill drills, mock papers and IA guide.`,
  applicationName: SUBJECT.shortTitle,
  appleWebApp: { capable: true, statusBarStyle: "default", title: SUBJECT.shortTitle },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: SUBJECT.themeColorLight },
    { media: "(prefers-color-scheme: dark)", color: SUBJECT.themeColorDark },
  ],
  width: "device-width",
  initialScale: 1,
};

// Apply a saved theme before paint (no flash).
const themeScript = `try{var t=localStorage.getItem("${SUBJECT.storageKey}.theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={nunito.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen antialiased">
        <ErrorBoundary>
          <StoreProvider>
            <AppGate>{children}</AppGate>
          </StoreProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
