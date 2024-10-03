import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const navLinks = [
    {
      title: "Rent",
      link: "/rent",
    },
    {
      title: "Buy",
      link: "/rent",
    },
    {
      title: "Sell",
      link: "/rent",
    },
    {
      title: "Manage properties",
      link: "/rent",
    },
    {
      title: "Resources",
      link: "/rent",
    },
  ];

  return (
    <div className="lg:px-10 xxl:px-16 lg:py-6 px-4 py-4 bg-purpleShade-50 flex justify-between z-99 backdrop-filter backdrop-blur-sm shadow-md">
      <div className="flex items-center gap-14">
        <div className="logo flex items-center gap-1">
          <img src="./assets/icons/logo.png" className="h-6" alt="" />
          <p className="font-medium">Estatery</p>
        </div>
        <ul className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => {
            return (
              <li>
                <Link to={link.link} className="text-sm tracking-wide">
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="hidden lg:flex">
        <Link
          to=""
          className="border-[1px] border-opacity-10 border-black border-solid rounded-md px-4 py-2 font-medium text-sm">
          Login
        </Link>
        <Link
          to=""
          className="ml-4 rounded-md px-4 py-2 font-medium text-sm text-white bg-primaryColor">
          Sign up
        </Link>
      </div>
      <div className="lg:hidden">
        <img src="./assets/icons/menu.png" alt="" />
      </div>
    </div>
  );
}
