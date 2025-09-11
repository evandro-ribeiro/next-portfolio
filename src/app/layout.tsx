import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Portfolio | Evandro Machado",
  description: "Criação de sites personalizados para você!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta
          name="google-site-verification"
          content="51ZNu0LtCqNKyB6kkJqBsScHQev5AOTAnRQ9Vfbarj0"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
