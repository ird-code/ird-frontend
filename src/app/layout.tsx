import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300","400","500", "600", "700"], 
});

export const metadata: Metadata = {
  title: "Institute for Rural Development",
  description:
    "IRD is empowering and guiding the local leadership and communities to build the foundation for sustainable rural development rooted in Nepal’s ethos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
