import React from "react";

export default function Socials() {
  const socials = [
    {
      icon: <i class="fa-brands fa-instagram"></i>,
      link: "https://www.instagram.com/dolapoyesola/",
    },
    {
      icon: <i class="fa-brands fa-linkedin-in"></i>,
      link: "https://www.linkedin.com/in/oyesola-pedro-778642173/",
    },
    {
      icon: <i class="fa-brands fa-github"></i>,
      link: "https://github.com/oyesola-dolapo",
    },
    {
      icon: <i class="fa-brands fa-x-twitter"></i>,
      link: "https://x.com/ferraziii",
    },
    {
      icon: <i class="fa-brands fa-whatsapp"></i>,
      link: "https://wa.me/2349067219868",
    },
  ];
  return (
    <div className="lg:flex justify-around px-8 pb-6 pt-2 sm:px-10">
      <h1 className="text-xs sm:text-base xxl:text-xl text-center">
        Developed by{" "}
        <a
          href="https://ferrazi.netlify.app/"
          target="_blank"
          className="font-bold text-primaryColor underline">
          Dolapo Oyesola
        </a>
        &nbsp; Designed by{" "}
        <a
          href="https://www.figma.com/@illiyinstudio"
          target="_blank"

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
