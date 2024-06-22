import React from "react";
import aiboy from "../../../assets/aiboy.jpg";

const ContactCard = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#141721] rounded-lg overflow-hidden shadow-md text-white">
      <div className="p-8 flex-1">
        <h2 className="text-3xl font-bold mb-4">Let's connect 🤝</h2>
        <p className="text-lg mb-8"> 
          Let's achieve success together with Stark Technologies.
        </p>
        <form className="space-y-4">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2">
            <input
              type="text"
              placeholder="First Name"
              className="w-full sm:w-1/2 p-3 rounded border border-gray-700 bg-[#22242e]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full sm:w-1/2 p-3 rounded border border-gray-700 bg-[#22242e]"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded border border-gray-700 bg-[#22242e]"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 rounded border border-gray-700 bg-[#22242e]"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 rounded border border-gray-700 bg-[#22242e] h-17"
          />
          <button
            type="submit"
            className="bg-purple-700 text-white py-3 px-6 rounded-full border-2 border-transparent hover:bg-purple-900 transition duration-300 w-full sm:w-auto"
          >
            Send to Stark 🚀
          </button>
        </form>
      </div>
      <div className="flex-1 bg-cover bg-center">
      <div className="p-8 flex flex-col justify-end items-center h-full bg-[#141721] bg-opacity-50">
          <div className="">
            <img
              src={aiboy}
              className=" h-[370px] object-contain rounded-2xl"
              alt="img"
            ></img>
          </div>
        <div className="p-8 flex flex-col justify-end h-full bg-[#141721] bg-opacity-50">
          <div className="italic text-sm text-gray-500 text-right mb-4">
            “Unlocking growth with Stark Technologies illuminated our path to success, transforming our business with innovative IT solutions.”
            <br />
            <strong>Stark Technologies</strong>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ContactCard;
