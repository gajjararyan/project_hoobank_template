import { useState } from "react";
import logofinal from "../assets/logofinal.png";
import { close, menu, logo } from "../assets";
import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar relative ">
      <div>
      <a href="https://project-stark-technologies.vercel.app/">
        <img
          src={logofinal}
          alt="Stark Technologies"
          className="w-[265px] h-[102px] absolute z-10 cursor-pointer "
        />
        </a>
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 absolute top-16 right-1 z-10">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <NavLink to={`/${nav.id}`}>{nav.title}</NavLink>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <NavLink to={`/${nav.id}`}>{nav.title}</NavLink>
                {/* <a href={`${nav.id}`}>{nav.title}</a> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
