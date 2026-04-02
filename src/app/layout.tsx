import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Upper Echelon Management | Advanced Metabolic Launch Architecture",
  description:
    "UEM helps biotechs de-risk U.S. launches for GLP-1, dual and triple agonists, and modern obesity therapies. Principal-led launch architecture, retention engine design, and talent sourcing.",
  keywords: [
    "biopharma consulting",
    "GLP-1 launch",
    "metabolic therapy",
    "obesity drug launch",
    "retention architecture",
    "pharma talent recruiting",
    "biotech commercial strategy",
  ],
  openGraph: {
    title: "Upper Echelon Management | Advanced Metabolic Launch Architecture",
    description:
      "Elite launch architecture for advanced metabolic and obesity therapies. Principal-led. No handoffs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
