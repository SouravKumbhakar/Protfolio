import { Asset, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Particles from "@/components/magicui/particles";


const JetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800"],
  variable: "--font-JetbrainsMono",
 });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetbrainsMono.variable}>
        <Header />
        <Particles className="fixed top-0 z-[-1] w-full h-full"/>
        {children}
      </body>
    </html>
  );
}
