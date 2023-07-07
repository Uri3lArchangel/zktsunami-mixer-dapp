import "./globals.css";
import Pixel from "next/font/local";
import Header_Footer_Layout from '@/components/layout/Header_Footer'
import { Metadata } from "next";
import logo from '../../public/img33acdae0f/logo.png'

const pixel = Pixel({
  src: [
    {
      path: "../../public/fonts/PixelOperatorSC.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/PixelOperator-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--pixel",
});

export const metadata:Metadata = {
  title: "Zk-Tsunami | mixer dapp",
 
  description:
    "ZK-Tsunami mixer dapp powered by the suter shield protocol ease of interface, maximum privacy, anonymity, security, decentralization and processing ",
    keywords:"Anonymity, Mixer, zk-snark, zk-tsunami, dapp, blockchain, privacy",
    
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
   <head>
    <link rel="icon" href="/img33acdae0f/logo.ico" />
   </head>
      <body className={`${pixel.className}`}>
   
        <Header_Footer_Layout>
        <main>{children}</main>
        </Header_Footer_Layout>
    

      </body>
    </html>
  );
}