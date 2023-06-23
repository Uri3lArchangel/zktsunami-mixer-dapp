'use client'
import React, { CSSProperties, Fragment, useEffect } from "react";
import landing from "@/styles/landingpage.module.css";
import Section1 from "@/components/landing/sections/Section1";
import Section2 from "@/components/landing/sections/Section2";
import Section3 from "@/components/landing/sections/Section3";


var options = {
  root: null, // Use viewport as the root
  threshold: 0.5 // Trigger event when 50% of the element is visible
};


const Page = () => {
 
  useEffect(() => {
    let element = (document.getElementById('2') as HTMLDivElement)
    var observer = new IntersectionObserver(callback, options);
    function callback(entries:any, observer:any) {
      entries.forEach(function(entry:any) {
        if (entry.isIntersecting) {
          console.log('th')
          let sliders = (document.querySelectorAll(".sliders") as NodeListOf<HTMLDivElement>)
          for(let i=0;i<sliders.length;i++){
            sliders[i].style.animationPlayState ="running"
          }
          } else {
          
        }
      });
    }
    observer.observe(element);

  
  },[])

  return (
    <div className={landing.pageContainer}>
     <Section1 />
      <Section2 />
      <Section3 />

    </div>
  );
};

export default Page;
