import "./globals.css";
import React from "react";

export const metadata = {
  title: "Chaithanya — Portfolio",
  description: "Full stack developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-purple-50 via-white to-pink-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
