import TabApp from "@/components/landing/antd/Tabs";
import React from "react";

function page() {
 
  return (
    <div>
      <TabApp contractAddr={process.env.CONTRACT} />
      <footer className=" mt-10 bg-primary-dark text-white py-4 text-center text-sm lg:mt-40">
        @copyrights reserved
      </footer>
    </div>
  );
}

export default page;
