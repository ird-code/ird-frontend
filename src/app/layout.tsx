import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Institute for Rural Development",
  description: "IRD is empowering and guiding the local leadership and communities to build the foundation for sustainable rural development rooted in Nepal’s ethos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
