import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Lato } from "next/font/google"

const fontLato = Lato({
  subsets: ['latin'],
  weight: ['400', '700']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fontLato.className} flex min-h-screen flex-col`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}