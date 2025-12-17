import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KEMET // DEPLOY",
  description: "The algorithm is dead. Curate your reality.",
  icons: {
    icon: "/Kemet.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="selection:bg-green-500 selection:text-black">
        <div className="noise"></div>
        <div className="scanlines"></div>
        {children}
      </body>
    </html>
  );
}


