import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Portfolio | IT Student & Aspiring Software Developer",
    template: "%s | Portfolio",
  },
  description:
    "Personal portfolio of an Information Technology student and aspiring software developer. Showcasing projects in web development, AI, IoT, and more.",
  keywords: [
    "portfolio",
    "IT student",
    "software developer",
    "web development",
    "React",
    "Next.js",
    "Philippines",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.vercel.app",
    siteName: "Portfolio",
    title: "Portfolio | IT Student & Aspiring Software Developer",
    description:
      "Personal portfolio showcasing projects in web development, AI, IoT, and more.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | IT Student & Aspiring Software Developer",
    description: "Personal portfolio showcasing web dev, AI, and IoT projects.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
