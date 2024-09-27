import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { ReactLenis } from "@/helpers/lenisScroll";

// Font files can be colocated inside of `app`
const whiteList = localFont({
  src: "./fonts/Whitelist.woff2",
  display: "swap",
  variable: "--white-list",
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`${inter.className} ${whiteList.variable}  antialiased`}>{children}</body>
      </ReactLenis>
    </html>
  );
}
