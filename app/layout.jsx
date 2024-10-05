import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetBrainsMono'
})

export const metadata = {
  title: 'Dev. Hitesh',
  description: 'Hitesh Solanki, Web Developer at W3nuts with expertise in WordPress, Laravel, and Core PHP. Creating dynamic and user-friendly websites since 2017.',
  icons: {
    apple: '/apple-touch-icon.png', // Optional: Path to apple touch icon
    shortcut: '/favicon-32x32.png', // Optional: Path to a shortcut icon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
