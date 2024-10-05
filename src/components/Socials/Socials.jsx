import React from "react";

export default function Socials() {
  const socials = [
    {
      icon: <i class="fa-brands fa-instagram"></i>,
      link: "#",
    },
    {
      icon: <i class="fa-brands fa-linkedin-in"></i>,
      link: "/rent",
    },
    {
      icon: <i class="fa-brands fa-github"></i>,
      link: "/rent",
    },
    {
      icon: <i class="fa-brands fa-x-twitter"></i>,
      link: "https://x.com/ferraziii",
    },
  ];
  return (
    <div className="lg:flex justify-around px-8 pb-6 pt-2 sm:px-10">
      <h1 className="text-xs sm:text-base xxl:text-xl text-center">
        Developer by{" "}
        <a
          href="https://www.ferrazi.netlify.app"
          className="font-bold text-primaryColor underline">
          Dolapo Oyesola
        </a>
        &nbsp; Designed by{" "}
        <a
          href="https://www.figma.com/@illiyinstudio"
          className="font-bold text-primaryColor underline">
          Illiyin Studio
        </a>
      </h1>

      <div className="flex gap-4 xxl:gap-10 w-max mt-2 lg:mt-0 mx-auto lg:mx-0">
        {socials.map((social) => {
          return (
            <a href={social.link} target="_blank" className="opacity-[50%]">
              <div className="text-lg xxl:text-2xl">{social.icon}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
