import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import ThemeProviderWrapper from "../src/components/ThemeProviderWrapper";

export const metadata: Metadata = {
  title: "Joaquín Suárez — Portfolio Web",
  description:
    "Portfolio de Joaquín Suárez, Frontend Developer especializado en React, Next.js y Tailwind CSS. Transformando ideas en experiencias digitales modernas.",
  generator: "Next.js",
  keywords: [
    "Joaquín Suárez",
    "Desarrollador Web",
    "Frontend Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Portfolio",
    "Programador Argentina",
  ],
  authors: [{ name: "Joaquín Suárez", url: "https://joaquinsuarez.com" }],
  creator: "Joaquín Suárez",
  publisher: "Joaquín Suárez",
  metadataBase: new URL("https://joaquinsuarez.com"),

  openGraph: {
    title: "Joaquín Suárez — Frontend Developer",
    description:
      "Descubrí los proyectos y experiencia de Joaquín Suárez, técnico universitario en programación especializado en desarrollo web con React y Tailwind.",
    url: "https://joaquinsuarez.com",
    siteName: "Joaquín Suárez Portfolio",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Imagen para compartir (1200x630)
        width: 1200,
        height: 630,
        alt: "Joaquín Suárez Portfolio Web",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Joaquín Suárez — Frontend Developer",
    description:
      "Portfolio personal de Joaquín Suárez, desarrollador web especializado en React, Next.js y Tailwind CSS.",
    creator: "@joaquinsuarez",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/icon.png?v=3", // Tu único favicon cuadrado (ideal 512x512)
    apple: "/icon.png?v=3",
    shortcut: "/icon.png?v=3",
  },

  //themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
      </head>
      <body suppressHydrationWarning>
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
