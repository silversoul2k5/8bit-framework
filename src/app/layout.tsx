import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "8bit-framework | Creative Frontend Development",
  description: "Building high-performance, visually stunning frontend experiences with smooth animations and modern UI/UX design.",
  metadataBase: new URL("https://8bit-framework.dev"),
  openGraph: {
    title: "8bit-framework | Creative Frontend Development",
    description: "Building high-performance, visually stunning frontend experiences",
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
      <body className="min-h-full flex flex-col bg-black text-white">{children}</body>
    </html>
  );
}
