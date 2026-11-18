import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LZ Precious Vision Health Care | Salt River",
  description:
    "View clinic services, opening hours, and appointment availability in Salt River.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-ZA" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="site-body">
        <div className="site-shell">
          <header className="site-header">
            <Link className="site-brand" href="/">
              LZ Precious Vision
              <span>Health Care</span>
            </Link>

            <nav className="site-nav" aria-label="Main navigation">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/availability">Availability</Link>
              <Link href="/contact">Contact</Link>
            </nav>

            <Link className="site-book-button" href="/availability">
              Book now
            </Link>
          </header>

          <div className="site-content">{children}</div>

          <footer className="site-footer">
            <div>
              <strong>LZ Precious Vision Health Care INC</strong>
              <p>Open daily, 9:00 a.m.–5:00 p.m.</p>
            </div>

            <div>
              <strong>Visit or call</strong>
              <p>426 Albert Road, Salt River, Addison House, Unit 2, 7925</p>
              <p>
                <a href="tel:+27218913810">021 891 3810</a>
                {" · "}
                <a href="tel:+27784409957">078 440 9957</a>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
