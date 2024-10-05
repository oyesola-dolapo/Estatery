import React from "react";

export default function Footer() {
  const footerItems = [
    {
      title: "SELL A HOME",
      items: [
        {
          title: "Request an offer",
        },
        {
          title: "Pricing",
        },
        {
          title: "Reviews",
        },
        {
          title: "Stories",
        },
      ],
    },
    {
      title: "BUY A HOME",
      items: [
        {
          title: "Buy",
        },
        {
          title: "Finance",
        },
      ],
    },
    {
      title: "TERMS & PRIVACY",
      items: [
        {
          title: "Trust and safety",
        },
        {
          title: "Terms of service",
        },
        {
          title: "Privacy Policy",
        },
      ],
    },
    {
      title: "ABOUT",
      items: [
        {
          title: "Company",
        },
        {
          title: "How it works",
        },
        {
          title: "Contract",
        },
        {
          title: "Investors",
        },
      ],
    },
    {
      title: "BUY, RENT & SELL",
      items: [
        {
          title: "Buy & Sell properties",
        },
        {
          title: "Rent home",
        },
        {
          title: "Builder trade-up",
        },
        {
          title: "Investors",
        },
      ],
    },
    {
      title: "RESOURCES",
      items: [
        {
          title: "Blog",
        },
        {
          title: "Guides",
        },
        {
          title: "FAQ",
        },
        {
          title: "Help center",
        },
      ],
    },
  ];
  return (
    <footer className="bg-white px-8 py-4 pb-6 sm:px-20 lg:px-24 xxl:py-16 xxl:px-36 lg:flex lg:items-start justify-center lg:gap-14">
      <div className="logo flex items-center gap-1 lg:mt-4">
        <img src="./assets/icons/logo.png" className="h-6" alt="" />
        <p className="font-bold">Estatery</p>
      </div>

      <div className="flex flex-wrap justify-between gap-4 mt-4">
        {footerItems.map((item) => {
          return (
            <div className="basis-[40%] sm:basis-[30%] lg:basis-[25%]">
              <h2 className="text-sm font-bold tracking-wide mb-2">
                {item.title}
              </h2>
              <ul className="flex flex-col text-sm gap-2 font-extralight">
                {item.items.map((subItem) => {
                  return (
                    <li>
                      <a href="#">{subItem.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
