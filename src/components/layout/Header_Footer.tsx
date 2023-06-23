import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import logo from "../../../public/img33acdae0f/logo.png";

const Header_Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <header>
        <div className={"top-0 h-12 bg-primary-light fixed w-full z-10"}>
         <Link href="/"> 
         <Image
            className="left-0 right-0 mx-auto absolute h-full w-14  cursor-pointer lg:left-36 lg:mx-0 lg:right-0"
            src={logo}
            alt="Anon Chain"
          />
          </Link>
        </div>
      </header>
      <Fragment>{children}</Fragment>
    </Fragment>
  );
};

export default Header_Footer;
