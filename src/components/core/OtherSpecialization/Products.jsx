import React from "react";

const Products = () => {
  const services = [
    {
      id: 1,
      title: "Direct Hire Placements (Full-time Roles)",
      description:
        "Unleash your potential by securing a permanent position with a leading technology company in the USA. We specialize in Direct Hire staffing and partner with organizations of all sizes, including Fortune 500/1000 companies, ensuring you find your ideal IT job.",
    },
    {
      id: 2,
      title: "Contract to Hire Services (C to H roles)",
      description:
        "Secure your pathway to long-term employment with our contract-to-hire positions. These offer both employees and employers a temporary trial period to ensure the right fit for both parties. Stark Technologies facilitates smooth transitions to full-time positions, allowing you to explore your potential with confidence.",
    },
    {
      id: 3,
      title: "Contract Staffing (Corp to Corp)",
      description:
        "Explore rewarding, fast-paced careers in information technology. IT contract jobs offer invaluable experience and flexibility, while businesses can efficiently scale their teams. We collaborate with business clients to connect you with the best-fit candidates for IT contract jobs, fostering partnerships that may lead to exciting collaborations in the future.",
    },
    {
      id: 4,
      title: "Resume Preparation & Job Placement Assistance",
      description:
        "Elevate your resume with our expert writers. We optimize it for ATS, emphasize your key achievements, and ensure its concise and error-free Additionally, supercharge your job search with our resume marketing personalized applications, job prioritization, and networking to land your dream role.",
    },
    {
      id: 5,
      title: "Additional Services",
      description:
        "Stark Technologies offers an extensive range of services to meet the diverse needs of international students looking to build their careers in the US. Our additional services include career counseling, visa guidance, networking events, onboarding assistance, and profile marketing. Our commitment is unwavering, as we strive to help international students achieve their career goals.",
    },
    {
      id: 6,
      title: "Interview Training and Technical Assistance",
      description:
        "Enhance your interview skills with our training and technical assistance services. Learn how to express yourself effectively, answer behavioral and technical questions, and stand out from the competition. Our mock interviews provide valuable practice and feedback. We also offer guidance on dress code, communication, and other critical aspects of the interview process. ",
    },
  ];

  return (
    <div className="w-11/12 my-16">
      <div className="flex flex-row   items-center justify-center flex-wrap p-3 gap-12 ">
        {services.map((service) => (
          <div
            key={service.id}
            className="w-full md:w-1/2 lg:w-[30%] p-4 border border-slate-300 hover:border-slate-900 rounded-md hover:text-slate-700 text-slate-300 hover:bg-slate-300 cursor-pointer  transition-all 
            hover:translate-y-[-20px]
            duration-[600ms]   
            lg:h-[301.6px]
            "
          >
            <div className="text-2xl font-bold text-center  my-3 mb-6 sm:w-[300px] mx-auto ">
              {service.title}
            </div>
            <div className="text-center text-lg  opacity-80">
              {service.description.slice(0, 200)}
              {"..."}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
