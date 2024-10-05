import React from "react";

export default function Home() {
  const make_it_easy = [
    {
      icon: "./assets/images/virtualHome.png",
      title: "Virtual home tour",
      subtitle:
        "You can communicate directly with landlords and we provide you with virtual tour before you buy or rent the property.",
      style: "bg-primaryColor bg-opacity-[50%]",
    },
    {
      icon: "./assets/icons/purpleHome.png",
      title: "Find the best deal",
      subtitle:
        "Browse thousands of properties, save your favorites and set up search alerts so you don’t miss the best home deal!",
      style: "bg-white text-black",
    },
    {
      icon: "./assets/icons/apply.png",
      title: "Get ready to apply",
      subtitle:
        "Find your dream house? You just need to do a little to no effort and you can start move in to your new dream home!",
      style: "bg-primaryColor",
    },
  ];

  return (
    <div>
      <div className="lg:flex lg:h-[95vh] bg-purpleShade-50">
        {/* LEFT SECTION WELCOME */}
        <div className="left-col flex flex-col justify-between lg:w-1/2 min-h-[80vh] lg:h-full px-4 pt-6 lg:pt-10 pb-6 sm:pb-12 sm:px-10 lg:pl-24 xxl:py-16 xxl:pr-30 xxl:pl-36 z-50 overflow-visible">
          <div>
            <h1 className="text-[42px] leading-[1] sm:leading-none sm:text-6xl text-center lg:text-left xxl:text-7xl font-semibold lg:tracking-wider">
              Buy, rent, or sell your property{" "}
              <br className="hidden xxl:block" /> easily
            </h1>
            <p className="hidden lg:block tracking-wider text-[18px] xxl:text-[24px] mt-6">
              A great platform to buy, sell, or even rent your <br /> properties
              without any commisions.
            </p>
            <p className="sm:tracking-wider mt-6 text-center text-xl font-light lg:hidden">
              A great platform to buy, sell, or <br className="sm:hidden" />{" "}
              even rent your properties without <br className="sm:hidden" /> any
              commisions.
            </p>
          </div>

          {/* BROWSE */}
          <div className="browse rounded-lg my-6 shadow-lg shadow-purpleShade-200">
            <div className="flex justify-between bg-white lg:w-[50%] rounded-tl-lg rounded-tr-lg">
              <div className="border-b-2 border-primaryColor text-primaryColor w-full py-4 sm:py-8 lg:py-4 sm:text-xl lg:text-base text-center font-medium">
                Rent
              </div>
              <div className="w-full py-4 sm:py-8 lg:py-4 sm:text-xl lg:text-base text-center border-b-2 border-purpleShade-200">
                Buy
              </div>
              <div className="w-full py-4 sm:py-8 lg:py-4 sm:text-xl lg:text-base text-center border-b-2 border-purpleShade-200">
                Sell
              </div>
            </div>
            {/* MOBILE VIEW */}
            <div className="flex py-4 px-4 sm:py-8 w-full bg-white lg:hidden rounded-bl-lg rounded-br-lg">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Search Location"
                  className="h-full w-full outline-none"
                />
              </div>
              <div className="rounded-lg bg-primaryColor px-4 py-3 cursor-pointer">
                <i className="fa-solid fa-magnifying-glass text-white sm:text-2xl"></i>
              </div>
            </div>

            {/* DESKTOP VIEW */}
            <div className="bg-white rounded-lg hidden lg:flex justify-between w-[140%] py-6">
              <div className="w-[25%] pl-8 border-r-2 border-black border-opacity-[20%] cursor-pointer">
                <p className="opacity-[50%]">Location</p>
                <h1 className="text-md font-medium mt-1">Lagos, Nigeria</h1>
              </div>
              <div className="w-[40%] pl-8 border-r-2 border-black border-opacity-[20%] cursor-pointer">
                <p className="opacity-[50%]">When</p>
                <h1 className="text-md font-medium mt-1">
                  Select Move-in date &nbsp; &nbsp;{" "}
                  <i class="fa-regular fa-calendar"></i>
                </h1>
              </div>
              <div className="w-[35%] flex justify-center items-center">
                <button className="px-8 py-4 text-white rounded-lg bg-primaryColor">
                  Browse Properties
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-10 justify-center lg:justify-start">
            <div>
              <img src="./assets/icons/renters.png" alt="" />
              <h1 className="text-1xl sm:text-2xl font-bold mt-4 text-primaryColor tracking-wider">
                50K+ Renters
              </h1>
              <p className="text-sm sm:text-[15px] sm:mt-2 tracking-wider">
                Believe in our services
              </p>
            </div>
            <div>
              <img src="./assets/icons/property.png" alt="" />
              <h1 className="text-1xl sm:text-2xl font-bold mt-4 text-primaryColor tracking-wider">
                10K+ Property
              </h1>
              <p className="hidden sm:block text-sm sm:text-[15px] sm:mt-2 tracking-wider">
                and house ready for occupancy
              </p>
              <p className="sm:hidden text-sm sm:text-[15px] sm:mt-2 tracking-wider">
                Ready for occupancy
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN HOME */}
        <div className="hidden lg:block right-col lg:w-1/2 h-full bg-[url('assets/images/mapBg.png')] bg-cover">
          <div className="bg-white w-max rounded-lg px-4 py-4 mt-12">
            <div className="flex gap-4 xxl:gap-5">
              <img
                src="assets/images/user.png"
                className="rounded-full w-[50px] h-[50px] xxl:w-[65px] xxl:h-[65px]"
                alt=""
              />
              <div>
                <h1 className="font-semibold xxl:text-lg">Dolapo Oyesola</h1>
                <p className="text-xs xxl:text-sm opacity-[50%]">Renter</p>
                <p className="flex items-center text-xs xxl:text-sm mt-1">
                  <span className="opacity-[50%]">Moved with</span>{" "}
                  <img
                    src="./assets/icons/logo.png"
                    className="h-4 ml-2"
                    alt=""
                  />{" "}
                  <span className="font-semibold">Estatery</span>
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-2 mx-1 pb-4 border-b-2 border-solid">
              <div className="bg-black rounded-full px-2 py-2 h-max w-max">
                <img src="./assets/icons/quote.png" className="h-2" alt="" />
              </div>
              <p className="text-[11px] xxl:text-sm font-md">
                I loved how smooth the move <br />
                was, and finally got the house <br />
                we wanted.
              </p>
            </div>
            <div className="flex mt-4 justify-between">
              <div>
                <p className="font-bold">$1,500</p>
                <p className="opacity-[50%] text-xs">Saved up to</p>
              </div>
              <div>
                <p className="font-bold">-24hrs</p>
                <p className="opacity-[50%] text-xs">Process time</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEE MORE SECTION */}
      <section className="px-4 pt-10 pb-6 sm:px-10 lg:px-24 xxl:py-16 xxl:px-36 lg:flex">
        {/* LECT SEE MORE */}
        <div className="left-col lg:w-1/2">
          <div className="rounded-lg bg-purpleShade-100 h-[550px] sm:h-[700px] lg:w-[80%] lg:h-[600px] xxl:w-[80%] relative">
            <img
              src="assets/images/housebg.png"
              alt=""
              className="h-full w-full object-cover rounded-lg"
            />
            <div
              className="w-[95%] sm:w-[52%] lg:w-[70%] bg-white border-2 border-solid border-purple-100 absolute top-6 -left-2 sm:-left-12 z-1 rounded-lg 
              py-4 flex items-center justify-center gap-4 backdrop-filter backdrop-blur-sm shadow-lg shadow-purpleShade-200">
              {/* <img
                src="assets/icons/virtual.png"
                alt=""
                className="h-[3.5rem] lg:h-[3rem]"
              /> */}
              <div>
                <h1 className="font-bold text-xl lg:text-lg">
                  Virtual home tour
                </h1>
                <p className="opacity-[50%] lg:text-sm">
                  We provide you with virtual tour
                </p>
              </div>
            </div>
            <div
              className="w-[80%] sm:w-[50%] lg:w-[70%] bg-white border-2 border-solid border-purple-100 absolute -bottom-10 left-0 right-0 mx-auto z-1 
              rounded-lg flex items-center backdrop-filter backdrop-blur-sm shadow-lg shadow-purpleShade-100">
              {/* <img src="assets/icons/homePurpleBg.png" alt="" className="h-[3.5rem]"/> */}
              <div className="py-4 pl-6 relative  w-full">
                {/* <img
                  src="assets/icons/homePurpleBg.png"
                  alt=""
                  className="absolute z-1 -top-6 right-4"
                /> */}
                <h1 className="font-bold text-lg sm:text-xl">
                  Find the best deal
                </h1>
                <p className="opacity-[50%] text-sm sm:text-base">
                  Browse thousands of properties
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SEE MORE */}
        <div className="right-col pt-20 lg:w-1/2 sm:flex sm:justify-center lg:items-center">
          <div>
            <div className="flex bg-purpleShade-100 rounded-lg p-1 border-2 border-solid lg:w-[50%]">
              <div className="bg-white border-2 border-solid w-1/2 rounded-lg py-3 lg:py-2">
                <p className="text-primaryColor font-bold text-center">
                  For tenants
                </p>
              </div>
              <div className="w-1/2 py-3 lg:py-2">
                <p className="text-center opacity-[50%]">For Landlord</p>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl xxl:text-6xl text-center lg:text-left font-bold mt-6">
              We make it easy for <br className="sm:hidden" /> tenants and{" "}
              <br className="sm:hidden" /> landlords.
            </h1>
            <p className="opacity-[50%] sm:text-xl xxl:text-2xl text-center lg:text-left mt-6 tracking-wide">
              Whether it’s selling your current home, getting financing, or
              buying a new home, we make it easy and efficient. The best part?
              you’ll save a bunch of money and time with our services.
            </p>
            <button className="bg-primaryColor rounded-lg py-4 w-full lg:w-[30%] mt-6">
              <p className="text-white font-bold text-center">
                See more &nbsp; <i class="fa-solid fa-angle-right"></i>
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* NEW WAY SECTION */}
      <section className="sm:hidden lg:flex px-4 pt-4 pb-6 sm:px-20 lg:px-24 xxl:py-16 xxl:px-36">
        <div className="h-max lg:h-[450px] w-full xxl:h-[500px] lg:flex bg-purpleShade-100 border-2 border-solid border-purpleShade-200 rounded-lg">
          {/* LEFT NEW WAY */}
          <div className="left-col lg:w-1/2 lg:h-full flex flex-col justify-between py-10 pl-8 pr-8 lg:pr-0 lg:pl-8 lg:py-14 xxl:pl-14">
            <div>
              <h1 className="text-4xl xxl:text-6xl font-bold text-secondaryColor">
                The new way to find <br className="hidden lg:flex" /> your new
                home
              </h1>
              <p className=" mt-4 lg:mt-6 opacity-[50%] text-lg lg:text-sm xxl:text-xl">
                Find your dream place to live in with{" "}
                <br className="hidden lg:flex" /> more than 10k+ properties
                listed.
              </p>
            </div>

            {/* NEW SECTION ICONS */}
            <div className="w-full flex flex-col items-start mt-6 lg:flex-row gap-6 xxl:gap-14">
              <div className="flex items-center gap-6 lg:gap-0 lg:flex-col">
                <img
                  src="./assets/icons/returnRate.png"
                  className="w-[70px] lg:w-[58px] xxl:w-[64px]"
                  alt=""
                />
                <div className="lg:flex lg:items-center lg:flex-col h-full">
                  <h1 className="text-xl font-bold">7.4%</h1>
                  <p className="text-sm opacity-[50%] mt-2">
                    Property Return Rate
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 lg:gap-0 lg:flex-col">
                <img
                  src="./assets/icons/sellRent.png"
                  className="w-[70px] lg:w-[58px] xxl:w-[64px]"
                  alt=""
                />
                <div className="lg:flex lg:items-center lg:flex-col h-full">
                  <h1 className="text-xl font-bold">3,856</h1>
                  <p className="text-sm opacity-[50%] mt-2">
                    Property in Sell & Rent
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 lg:gap-0 lg:flex-col">
                <img
                  src="./assets/icons/completedTrans.png"
                  className="w-[70px] lg:w-[58px] xxl:w-[64px]"
                  alt=""
                />
                <div className="lg:flex lg:items-center lg:flex-col h-full">
                  <h1 className="text-xl font-bold">2,502</h1>
                  <p className="text-sm opacity-[50%] mt-2">
                    Daily Completed Transactions
                  </p>
                </div>
              </div>
            </div>
            <button className="sm:hidden w-max py-2 px-4 bg-secondaryColor text-white rounded-lg mt-6">
              Browse Properties
            </button>
          </div>

          {/* RIGHT NEW WAY */}
          <div className="lg:w-1/2 lg:h-full h-[200px] relative overflow-hidden">
            <img
              src="./assets/images/newHome.png"
              className="h-[350px] lg:h-full lg:w-full absolute -top-5 object-cover lg:object-contain"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* MAKE IS EASY SECTION */}
      <section className=" bg-secondaryColor text-white">
        <div className="px-4 pt-6 pb-6 sm:px-10 lg:px-24 xxl:pt-16 xxl:px-36 lg:flex justify-between">
          <h1 className="text-center text-4xl text-white font-medium lg:w-[40%] lg:text-start lg:mt-4">
            We make it easy for{" "}
            <span className="text-primaryColor">tenants</span> and{" "}
            <span className="text-primaryColor">landlords</span>.
          </h1>
          <p className="text-white text-lg text-center tracking-wide mt-4 opacity-[50%] lg:w-[40%] lg:text-start">
            Whether it’s selling your current home, getting financing, or buying
            a new home, we make it easy and efficient. The best part? you’ll
            save a bunch of money and time with our services.
          </p>
        </div>

        {/*  */}
        <div className="px-4 pb-6 sm:px-10 lg:px-24 xxl:px-36 mt-2 flex flex-col lg:flex-row overflow-x-scroll gap-6 lg:gap-10 hide-scrollbar">
          {make_it_easy.map((easy) => {
            return (
              <div
                className={`${easy.style} rounded-lg p-6 sm:w-[85%] mx-auto lg:mx-0 lg:min-w-[500px] xl:min-w-[700px] lg:h-max lg:flex gap-6`}>
                <img src={easy.icon} alt="" className="lg:h-[60px] xl:h-[80px] lg:mt-4" />
                <div className="mt-4">
                  <h1 className="text-2xl xl:text-4xl font-bold">{easy.title}</h1>
                  <p className="lg:text-base xl:text-xl tracking-wide opacity-[50%] font-light mt-4">
                    {easy.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/*  */}
        <div className="px-4 pb-6 lg:pb-10 xxl:pb-16 sm:px-10 lg:px-24 xxl:px-36 xxl:mt-8 mt-2">
          <div className="">
            <h1 className="text-center text-2xl font-bold lg:text-3xl">Are you a landlord?</h1>
            <p className="text-center opacity-[70%] mt-2 lg:text-xl">Discover ways to increase your home's value and  get listed. No Spam.</p>
          </div>
          <div className="mt-6 lg:bg-white lg:flex lg:rounded-lg lg:px-4 lg:py-4 sm:w-[75%] lg:w-[60%] mx-auto">
            <input type="text" className="rounded-lg w-full py-3 px-4 lg:w-[100%]" placeholder="Enter your email address" />
            <button className="text-center py-3 lg:py-5 bg-primaryColor w-full rounded-lg mt-4 font-medium lg:mt-0 lg:w-[50%]">Submit</button>
          </div>
        </div>
      </section>
    </div>
  );
}
