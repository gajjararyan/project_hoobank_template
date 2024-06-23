import styles from "../style";
import { discount, robot } from "../assets";
import roboai from "../assets/roboai.png";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins pt-12 lg:pt-0 font-semibold ss:text-[57px] text-[47px] text-white ss:leading-[100.8px] leading-[75px]">
            Think Different <br className="sm:block hidden" />{" "}
            <span className="text-gradient">To Deliver Different</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        {/* <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
         Deliver Different
        </h1> */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Empowering People and Businesses to Thrive in the IT World Pioneering
          Excellence in IT Consulting & Services.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={roboai}
          alt="Robo-ai"
          className="w-[100%] h-[100%] relative z-[4]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
