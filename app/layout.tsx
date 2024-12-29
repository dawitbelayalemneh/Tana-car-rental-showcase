import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Tana Car Rental",
  description: "Discover what you can find in Bahir Dar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
