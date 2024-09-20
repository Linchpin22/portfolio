import React from "react";
import { footer, viewCode } from "../data/title";

function Footer() {
  return (
    <div className="py-10 flex flex-col w-full bg-[#09132e] text-[#c9e1ec] text-sm shadow-lg">
      <div className="lg:w-1/2 md:w-3/4 sm:w-11/12 w-10/12 text-2xl mx-auto font-semibold text-center p-2">
        {footer}
      </div>
    </div>
  );
}

export default Footer;
