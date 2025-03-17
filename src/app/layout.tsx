import type { Metadata } from 'next';
import { geistSans, geistMono } from '@/app/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: "SpaceXing",
  description: "Plataforma de reserva de voos na SpaceX de forma fácil e segura.",
  icons: {
    icon: [
      {
        media:"(prefers-color-scheme: light)",
        url: "/public/logo-light.png",
        href: "/public/logo-light.png",
      }, {
        media:"(prefers-color-scheme: dark)",
        url: "/public/logo-dark.png",
        href: "/public/logo-dark.png",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
