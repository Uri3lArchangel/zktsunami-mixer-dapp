import React, { CSSProperties, Fragment, useEffect } from "react";
import landing from "@/styles/landingpage.module.css";
import Section1 from "@/components/landing/sections/Section1";
import Section2 from "@/components/landing/sections/Section2";
import Section3 from "@/components/landing/sections/Section3";




const Page = () => {
 


  return (
    <div className={landing.pageContainer}>
     <Section1 />
      <Section2 />
      <Section3 />

    </div>
  );
};

export default Page;
