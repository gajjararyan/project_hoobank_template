import React from "react";
import ContactCard from "./contactcard";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto ">
    
    <div className="">
      <section className="w-11/12 flex flex-col justify-center items-center pt-4 mx-auto my-[120px]  text-slate-300  select-none relative">
        <div className="flex justify-center items-center flex-col gap-y-16">

          <div className="text-7xl font-manrope font-black leading-snug text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">
            Contact Us
          </div>
          <div className="w-[550px] font-poppins text-center text-lg font-semibold text-slate-300 opacity-80">
          Are you looking for IT staffing and software development solutions that are flexible, 
          innovative, and high-quality? Connect with Stark Technologies to transform your 
          staffing and software needs.
          </div>
          </div>
          </section>

         <section className="px-20 pb-6 rounded-full">
          <ContactCard  />
         </section>
         
 
          </div>
      
    
    </div>
  );
};

export default Contact;
