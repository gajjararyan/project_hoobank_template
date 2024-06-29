import React from 'react'
import { motion } from 'framer-motion';
import Footer from "../../Footer";
import styles from "../../../style";
import cuteboy from "../../../assets/cute-boy-space-bg.png";

const services = [
  {
    title: "Requirements Gathering and Analysis",
    description: "We work closely with our clients to understand their business needs and requirements. We then develop a detailed plan for how to meet those needs and requirements."
  },
  {
    title: "System Design and Architecture",
    description: "We design software systems that are scalable, secure, and easy to maintain. We also consider your users' needs and make sure the system is easy to use and navigate."
  },
  {
    title: "Software Development",
    description: "We use the latest technologies and best practices to develop high-quality software that meets your specific needs. We also test the software thoroughly to ensure it is bug-free and meets all your requirements."
  },
  {
    title: "Testing and Deployment",
    description: "We test the software thoroughly to ensure it meets all your requirements and is free of bugs. We then deploy the software to your production environment."
  },
  {
    title: "Maintenance and Support",
    description: "We provide ongoing maintenance and support for the software to ensure that it continues to meet your needs and is up to date with the latest security patches."
  }
];

const Software = () => {
  return (
    <div>
      <div className="flex flex-col justify-center font-poppins items-center mx-auto py-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="shadow-lg rounded-3xl p-6 w-full max-w-5xl ">
        <h1 className="text-4xl font-manrope font-black mb-6 text-center text-[#33bbcf] animate-ping-short animate-ping-scale animate-ping-fast">
              Your Trusted Partner for Custom Software Development
        </h1>


          <p className="text-lg font-playwrite text-white mb-4 sm:mr-4 text-center py-7">
            At Stark Technologies, we believe software development goes beyond coding. 
            We specialize in creating customized solutions that empower businesses to 
            achieve their goals. Our experienced team delivers innovative software 
            solutions tailored to businesses of all sizes. With a deep understanding 
            of cutting-edge technologies, we ensure our clients stay ahead by 
            continually evolving and learning.
          </p>

          <h2 className="text-3xl font-mono mb-4 text-[#9DDE8B] py-9">We offer a wide range of software development services, including:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-[#282a35] p-6 rounded-xl shadow-lg hover:shadow-2xl shadow-[#686D76] transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-bold mb-2 text-[#FDDE55]">{service.title}</h3>
                <p className="text-[#3094a7]">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 flex items-center justify-center space-x-4 pt-12">
            <motion.img
              src={cuteboy}
              alt="CuteBoySpaceImage"
              className="w-40 h-47 object-cover"
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <a href="." className="inline-block shadow-md shadow-[#FF4191] bg-pink-400 text-white py-3 px-6 rounded-full mt-4 hover:bg-white hover:text-black transition duration-300">
              Sign up for our newsletter today!
            </a>
          </div>
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
}

export default Software;