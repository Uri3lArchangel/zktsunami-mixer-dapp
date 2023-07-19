'use client'
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import logo from "../../../public/img33acdae0f/logo.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chains, myCustomButtonTheme, wagmiConfig } from "@/FE/functions/walletConnection";
import { CustomAvatar } from "../landing/sections/RainbowkitAvatar";




const Header_Footer = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <Fragment>
       
    <WagmiConfig config={wagmiConfig} >
      <RainbowKitProvider avatar={CustomAvatar} chains={chains} theme={myCustomButtonTheme}>
      <header>
        <div className={"top-0 h-12 bg-primary-light fixed w-full z-10 flex justify-around items-center"}>
         <Link href="/"> 
         <Image
            className=" h-full w-14  cursor-pointer lg:left-36 lg:mx-0 lg:right-0"
            src={logo}
            alt="Anon Chain"
          />
          </Link>
        <div>
        <ConnectButton />
        </div>
        </div>

      </header>
      <Fragment>{children}</Fragment>
      </RainbowKitProvider>
    </WagmiConfig>

    </Fragment>
  );
};

export default Header_Footer;
