import React from "react";
import Footer_Top from "./Footer_Top";
import Footer_Logo from "./Footer_Logo";
import Footer_Middle from "./Footer_Middle";
import Footer_Right from "./Footer_Right";

const Footer = () => {
  return (
    <section className="bg-zinc-800">
      <Footer_Top />
      <hr className="border-[1px] border-zinc-600" />
      <div className="flex w-full">
      <Footer_Logo />
      <Footer_Middle/>
      <Footer_Right/>

      </div>
    </section>
  );
};

export default Footer;
