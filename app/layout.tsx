import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({ variable: "--font-space", subsets: ["latin"] });
const plex = IBM_Plex_Mono({ variable: "--font-plex", weight: ["400", "500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Escudo Digital — El operador de internet que protege por defecto",
  description:
    "Operador de internet (fibra + móvil) con protección integrada en la conexión. Escudo Menores y Escudo Adultos: seguros por defecto, sin instalar nada.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${space.variable} ${plex.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
