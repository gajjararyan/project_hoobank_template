import React from "react";
import ContactCard from "./contactcard";
import Footer from "../../Footer";
import styles from "../../../style";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="">
          <section className="w-full sm:w-11/12 flex flex-col justify-center items-center pt-4 mx-auto my-[120px] text-slate-300 select-none relative">
            <div className="flex justify-center items-center flex-col gap-y-16">
              <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-manrope font-black leading-snug text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">
                Contact Us
              </div>
              <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[550px] font-poppins text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl  text-slate-300 opacity-80">
                Are you looking for IT staffing and software development
                solutions that are flexible, innovative, and high-quality?
                Connect with Stark Technologies to transform your staffing and
                software needs.
              </div>
            </div>
          </section>

          <section className=" flex px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-6 rounded-full">
            <ContactCard />
            
          </section>
        </div>
      </div>

      {/* Footer */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
