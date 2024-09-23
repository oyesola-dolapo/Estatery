import React from "react";

export default function Home() {
  return (
    <div>
      <div className="lg:flex h-max sm:h-[90vh] bg-purpleShade-50">
        <div className="left-col flex flex-col justify-between lg:w-1/2 h-full px-4 pt-10 pb-6 lg:pl-24 xxl:py-16 xxl:pr-30 xxl:pl-36">
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
          <div className="browse"></div>
          <div className="flex gap-10 justify-center lg:justify-start">
            <div>
              <img src="./assets/icons/renters.png" alt="" />
              <h1 className="text-1xl sm:text-2xl font-bold mt-6 text-primaryColor tracking-wider">
                50K+ Renters
              </h1>
              <p className="text-sm sm:text-[15px] sm:mt-2 tracking-wider">
                Believe in our services
              </p>
            </div>
            <div>
              <img src="./assets/icons/property.png" alt="" />
              <h1 className="text-1xl sm:text-2xl font-bold mt-6 text-primaryColor tracking-wider">
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
      <section className="px-4 pt-10 pb-6 sm:px-20 lg:px-24 xxl:py-16 xxl:px-36 lg:flex">
        <div className="left-col lg:w-1/2">
          <div className="rounded-lg bg-purpleShade-100 h-[550px] lg:w-[80%] xxl:h-[600px] xxl:w-[80%] relative">
            <img
              src="assets/images/housebg.png"
              alt=""
              className="h-full w-full object-cover rounded-lg"
            />
            <div
              className="w-[95%] sm:w-[52%] lg:w-[70%] bg-white border-2 border-solid border-purple-100 absolute top-6 -left-2 sm:-left-12 z-1 rounded-lg 
              py-4 flex items-center justify-center gap-4 backdrop-filter backdrop-blur-sm shadow-lg shadow-purpleShade-200">
              <img
                src="assets/icons/virtual.png"
                alt=""
                className="h-[3.5rem] lg:h-[3rem]"
              />
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
              className="w-[80%] sm:w-[70%] bg-white border-2 border-solid border-purple-100 absolute -bottom-10 left-0 right-0 mx-auto z-1 
              rounded-lg flex items-center backdrop-filter backdrop-blur-sm shadow-lg shadow-purpleShade-100">
              {/* <img src="assets/icons/homePurpleBg.png" alt="" className="h-[3.5rem]"/> */}
              <div className="py-4 pl-6 relative  w-full">
                <img src="assets/icons/homePurpleBg.png" alt="" className="absolute z-1 -top-6 right-4"/>
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
    </div>
  );
}
