import { Roboto_Slab, Cairo } from "next/font/google"; // تأكد من الحروف
import "./globals.css";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-slab",
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-cairo",
});

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={`${robotoSlab.variable} ${cairo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
