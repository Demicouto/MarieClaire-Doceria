import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marie Claire | Loja de Chocolates Finos",
  description: "Sabor e tradicao em cada detalhe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
