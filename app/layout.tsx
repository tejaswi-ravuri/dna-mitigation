import type { Metadata } from "next";
import { Saira_Extra_Condensed } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Footer from "@/components/Footer";

const headingFont = Saira_Extra_Condensed({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "DNA Mitigation | Strategic Sentencing Advocacy",
  description:
    "Early § 3553(a) Mitigation shapes the PSR. Expert legal strategies before sentencing.",
  generator: "v0.app",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-hXTZnWMfRUxDigNh7SknGK7cy9Yzek.jpeg",
    apple:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-hXTZnWMfRUxDigNh7SknGK7cy9Yzek.jpeg",
  },
  openGraph: {
    title: "DNA Mitigation | Strategic Sentencing Advocacy",
    description:
      "Early § 3553(a) Mitigation shapes the PSR. Expert legal strategies before sentencing.",
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
      suppressHydrationWarning
      className={`${headingFont.variable} dark`}
    >
      <head>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'dark';
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-body bg-background text-foreground antialiased transition-colors duration-150">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
      <Footer />
    </html>
  );
}
