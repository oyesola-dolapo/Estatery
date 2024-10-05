import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Socials from "../Socials/Socials";

export default function Layout() {
  const [visible, setVisible] = useState(false);

  const visibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", visibility);

    return () => {
      window.removeEventListener("scroll", visibility);
    };
  }, []);

  const top = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <ScrollToTop />
      <Nav />
      <main>
        <Outlet />
      </main>
      {visible && (
        <div
          onClick={top}
          className="toTop bg-white shadow fixed bottom-[5rem] right-[1rem] cursor-pointer bg-webColor w-[3rem] h-[3rem] flex justify-center items-center rounded-full">
          <i className="fa-solid fa-arrow-up text-primaryColor text-[1.5rem]"></i>
        </div>
      )}
      <Footer />
      <Socials />
    </div>
  );
}
