import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";

const arimoSans = Arimo({
  variable: "--font-arimo-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sfs.com.ar"),

  title: {
    default: "Grupo SFS | Software Médico para el sector salud",
    template: "%s | Grupo SFS",
  },

  description:
    "Grupo SFS desarrolla software médico de vanguardia para instituciones de salud. HIS integral, IA clínica aplicada a procesos reales y soluciones administrativas para aseguradoras y financiadoras.",

  keywords: [
    "software médico",
    "HeathCare",
    "SFS HealthCare",
    "HealthCare AI",
    "SFS HealthCare AI",
    "HealthTrack",
    "SFS HealthTrack",
    "SAPma",
    "SFS SAPma",
    "HIS Argentina",
    "sistema hospitalario",
    "inteligencia artificial en salud",
    "IA clínica",
    "software para clínicas",
    "software para hospitales",
    "gestión hospitalaria",
    "historia clínica electrónica",
    "SAPma aseguradoras",
    "salud digital Argentina",
    "tecnología médica",
  ],

  authors: [{ name: "Grupo SFS", url: "https://www.sfs.com.ar" }],

  creator: "Grupo SFS",
  publisher: "Grupo SFS",

  category: "Health Technology",

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.sfs.com.ar",
    title:
      "Grupo SFS | Software Médico para el sector salud",
    description:
      "Soluciones digitales para hospitales, clínicas y financiadoras. HIS integral, IA clínica supervisada y sistemas administrativos especializados.",
    siteName: "Grupo SFS",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Grupo SFS - Software Médico e IA Clínica",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Grupo SFS | Software Médico para el sector salud",
    description:
      "Tecnología médica de vanguardia para instituciones de salud.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.sfs.com.ar",
  },

  other: {
    "theme-color": "#5B96BA",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arimoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
