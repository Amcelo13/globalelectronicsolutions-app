import ProgressBar from "@/providers/progress-bar";
import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/homepage-components/navbar";
import DialogQuoate from "./_components/dialog-quote";
import Footer from "./_components/footer";
const poppins = Poppins({
  subsets: ['latin'], weight: ['400']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
         <ProgressBar>
        <Navbar/>
        {children}
        <Footer/>
         </ProgressBar>
        </body>
        <DialogQuoate triggerTxtBg positionFixed triggerTxt= 'Request a Quote' title= 'Request a Quote'/>
    </html>
  );
}
