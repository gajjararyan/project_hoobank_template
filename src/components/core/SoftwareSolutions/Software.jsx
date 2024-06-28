import React from 'react'

const Software = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Trusted Partner for Custom Software Development</h1>
      <p className="mb-4">
        At Stark Technologies, we believe that software development should be more than just writing code. It should be about creating custom solutions that help businesses achieve their goals. That's why we take a holistic approach to software development, considering all aspects of your business, from your customers to your employees to your bottom line.
      </p>
      <p className="mb-4">
        Our team of experienced and talented software developers has a proven track record of success in delivering innovative and effective software solutions to businesses of all sizes. We have a deep understanding of the latest technologies and trends, and we are constantly learning and growing to ensure that our clients are always ahead of the curve.
      </p>
      <h2 className="text-2xl font-semibold mb-4">We offer a wide range of software development services, including:</h2>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">
          <strong>Requirements gathering and analysis:</strong> We work closely with our clients to understand their business needs and requirements. We then develop a detailed plan for how to meet those needs and requirements.
        </li>
        <li className="mb-2">
          <strong>System design and architecture:</strong> We design software systems that are scalable, secure, and easy to maintain. We also consider your users' needs and make sure the system is easy to use and navigate.
        </li>
        <li className="mb-2">
          <strong>Software development:</strong> We use the latest technologies and best practices to develop high-quality software that meets your specific needs. We also test the software thoroughly to ensure it is bug-free and meets all your requirements.
        </li>
        <li className="mb-2">
          <strong>Testing and deployment:</strong> We test the software thoroughly to ensure it meets all your requirements and is free of bugs. We then deploy the software to your production environment.
        </li>
        <li className="mb-2">
          <strong>Maintenance and support:</strong> We provide ongoing maintenance and support for the software to ensure that it continues to meet your needs and is up to date with the latest security patches.
        </li>
      </ul>
      <div className="text-center">
        <a href="https://starktechinc.com" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
          Sign up for our newsletter today!
        </a>
      </div>
    </div>
  </div>
  );
}

export default Software;