import React from "react";
import Products from "./Products";
import Footer from "../../Footer";
import styles from "../../../style";

const OurServices = () => {
  return (
    <div className="">
      {/* Section 1 */}
      <section className="w-11/12 flex flex-col justify-center items-center pt-4 mx-auto my-[120px]  text-slate-300  select-none relative">
        <div className="flex justify-center items-center flex-col gap-y-16">
          <div className="text-4xl font-bold tracking-widest text-center">
            Gateway to a Full-Time IT Career in the USA
          </div>
          <div className="md:w-[500px] text-center text-lg font-semibold text-slate-300 opacity-80">
            For international students seeking to kickstart their IT careers in
            the United States, Stark Technologies is your dedicated partner. We
            offer a comprehensive suite of services to support your journey
          </div>

          <button
            className="bg-gradient-to-r from-cyan-300 to-teal-500 rounded-full px-8 py-4
           text-slate-900 font-bold hover:from-cyan-400 hover:to-teal-600 transition-all duration-300 ease-in-out hover:scale-95 select-none  "
          >
            Consult Now
          </button>
        </div>
      </section>
      {/* Section 2 */}
      <section className="flex flex-col items-center justify-center gap-y-5 w-11/12 mx-auto border rounded-lg shadow-[0_0_20px_0] shadow-[#67f0fc]  ">
        <div className="text-4xl uppercase font-bold mt-12 text-slate-300 select-none">
          Our Services
        </div>
        <div className="w-[150px]  rounded-full bg-teal-400 h-[2px]"></div>
        <Products />
      </section>
      {/* Section 3 */}
      <section className="w-11/12 flex items-center justify-center mx-auto text-slate-300 my-16">
        <div className="text-center tracking-wide leading-10 md:mx-[70px] border p-6 border-cyan-500 rounded-lg text-2xl font-semibold font-sans">
          Stark Technologies is your dedicated partner, committed to unlocking
          your full potential and helping you thrive in the world of IT. Connect
          with us today to embark on a journey to a brighter and more successful
          future.
        </div>
      </section>
      {/* Section 4 */}
      <section className="w-11/12 flex items-center justify-center mx-auto  my-10">
        <div className="my-20 flex flex-col gap-y-10">
          <div className="text-xl text-slate-300   uppercase text-center font-serif font-semibold tracking-wider">
            Join Our Team
          </div>
          <div className="w-[50px] h-[2px] bg-cyan-400 rounded-full mx-auto mt-[-15px] "></div>
          <div className="border border-slate-300 rounded-full text-xl font-semibold hover:bg-slate-300 hover:text-slate-700 text-slate-300 px-7 py-4 text-center cursor-pointer transition-all duration-500 select-none">
            Explore Stark Technologies Careers
          </div>
        </div>
      </section>
      <div className="w-full h-[1px] bg-dimWhite"></div>
      {/* Footer */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
