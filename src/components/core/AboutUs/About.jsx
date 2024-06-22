import React from "react";
import HighlightText from "../../common/HighlightText";
import Quote from "../../common/Quote";
import Footer from "../../Footer";
import styles from "../../../style";
import Stats from "../../Stats";
import BannerImage1 from "../../../../src/assets/aboutus1.webp";
import BannerImage2 from "../../../../src/assets/aboutus2.webp";
import BannerImage3 from "../../../../src/assets/aboutus3.webp";
import OurTeam from "../../../../src/assets/OurTeam.png";

const About = () => {
  return (
    <div>
      {/* Section 1 */}
      <section className=" bg-[#22242e] ">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Empowering Innovation, Delivering a Excellent Service, Creating a
            <HighlightText text={"Sustainable Solutions"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-gray-300 lg:w-[95%]">
              Stark Technologies, a distinguished global professional services
              company headquartered in the United States. Stark Technologies is
              a guiding light for international students looking to land IT jobs
              in the USA.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img src={BannerImage3} alt="Banner Img3" />
            <img src={BannerImage2} alt="Banner Img2" />
            <img src={BannerImage1} alt="Banner Img1" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="border-b border-gray-400">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-gray-300">
          <div className="h-[100px]"> </div>
          <Quote />
        </div>
      </section>

      {/* Section 3  */}
      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 ">
          {/* foudning story wala div */}
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between ">
            {/* founding story left box */}
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Team
              </h1>

              <p className="text-base font-medium text-gray-300 lg:w-[95%]">
                Our team is made up of experienced professionals dedicated to
                providing exceptional service. We work closely with our clients
                to understand their needs and provide tailored solutions that
                exceed their expectations.
              </p>

              <p className="text-base font-medium text-gray-300 lg:w-[95%]">
                At Stark Technologies, our team is the heart of our success.
                Comprised of experienced professionals, we are dedicated to
                delivering exceptional IT consulting, staffing, and software
                development solutions. Our team works closely with clients to
                understand their unique needs and provide tailored solutions
                that exceed expectations.
              </p>
            </div>
            {/* Our Team right box */}
            <div>
              <img
                className="shadow-[0_0_20px_0] shadow-[#FC6767]  "
                src={OurTeam}
                alt="Ourteam Img"
              />
            </div>
          </div>

          {/* vision and mission wala parent div */}
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            {/* left box */}
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-gray-300 lg:w-[95%]">
                At Stark Technologies, our team is the heart of our success.
                Comprised of experienced professionals, we are dedicated to
                delivering exceptional IT consulting, staffing, and software
                development solutions. Our team works closely with clients to
                understand their unique needs and provide tailored solutions
                that exceed expectations.
              </p>
            </div>

            {/* right box */}
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-gray-300 lg:w-[95%]">
                At Stark Technologies, our mission is to craft perfect solutions
                with quality at competitive costs, maintaining our status as a
                leading Software Development Company. We prioritize customer
                satisfaction, fostering friendly interactions and building
                long-lasting relationships with existing clients while welcoming
                new ones. Our commitment to innovation ensures our programs
                remain updated and aligned with fresh ideas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div
        className={` bg-[#22242e]  flex justify-center items-center  ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Stats />
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

export default About;
