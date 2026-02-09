import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rwanda National Association of Deaf Women (RNADW)",
  description: "Empowering deaf women and girls through advocacy, education, and community building since 2005. Organization of People with Disabilities (OPD) fully registered with Rwanda Governance Board (RGB).",
  keywords: ["RNADW", "deaf women", "Rwanda", "advocacy", "education", "empowerment", "disability rights"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
