import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "8bit-framework | Frontend studio for new businesses",
  description:
    "8bit-framework is Arjun C's frontend startup building fast, polished websites and product interfaces for new businesses.",
  metadataBase: new URL("https://8bit-framework.dev"),
  openGraph: {
    title: "8bit-framework | Frontend studio for new businesses",
    description:
      "Launch-ready frontend design, development, and animation for founders and young brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth antialiased"
    >
      <body className="min-h-full flex flex-col bg-[var(--paper)] text-[var(--ink)]">{children}</body>
    </html>
  );
}
