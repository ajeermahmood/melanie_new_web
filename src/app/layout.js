"use client";
import ScrollToTop from "@/components/common/ScrollTop";
import Aos from "aos";
import "aos/dist/aos.css";
import { DM_Sans, Roboto } from "next/font/google";
import { useEffect } from "react";
import "../../public/scss/main.scss";

if (typeof window !== "undefined") {
  import("bootstrap");
}

// DM_Sans font
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--body-font-family",
});

// Poppins font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100","300", "400", "500", "700", "900"],
  variable: "--title-font-family",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <html lang="en">
      <body
        className={`body  ${roboto.className} ${dmSans.className}`}
        cz-shortcut-listen="false"
      >
        <div className="wrapper ovh">{children}</div>

        <ScrollToTop />
      </body>
    </html>
  );
}
