import React from "react";

export default function Home() {
  return (
    <div>
      <div className="lg:flex h-max sm:h-[90vh] bg-purpleShade-50">
        <div className="left-col flex flex-col justify-between lg:w-1/2 h-full px-4 pt-10 pb-6 lg:pl-24 xxl:py-16 xxl:pr-30 xxl:pl-36">
          <div>
            <h1 className="text-[42px] leading-[1.2] sm:leading-none sm:text-6xl text-center lg:text-left xxl:text-7xl font-semibold tracking-wider">
              Buy, rent, or sell your property{" "}
              <br className="hidden xxl:block" /> easily
            </h1>
            <p className="hidden lg:block tracking-wider text-[18px] xxl:text-[24px] mt-6">
              A great platform to buy, sell, or even rent your <br /> properties
              without any commisions.
            </p>
            <p className="sm:tracking-wider mt-6 text-center text-xl sm:text-2xl sm:font-light lg:hidden">
              A great platform to buy, sell, or <br className="sm:hidden" />{" "}
              even rent your properties <br className="hidden sm:block" />
              without <br className="sm:hidden" /> any commisions.
            </p>
          </div>
          <div className="browse">
            
          </div>
          <div className="flex gap-10 justify-center lg:justify-start">
            <div>
              <img src="./assets/icons/renters.png" alt="" />
              <h1 className="text-1xl sm:text-2xl font-medium mt-6 text-primaryColor tracking-wider">
                50K+ Renters
              </h1>
              <p className="text-sm sm:text-[15px] sm:mt-2 tracking-wider">
                Believe in our services
              </p>
            </div>
            <div>
              <img src="./assets/icons/property.png" alt="" />
              <h1 className="text-1xl sm:text-2xl font-medium mt-6 text-primaryColor tracking-wider">
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
        <div className="right-col lg:w-1/2 h-full bg-[url('assets/images/mapBg.png')] bg-cover">
          <div className="bg-white w-max rounded-lg px-4 py-4 mt-12">
            <div className="flex gap-4">
              <img
                src="assets/images/user.png"
                className="rounded-full w-[50px] h-[50px]"
                alt=""
              />
              <div>
                <h1 className="font-semibold">Dolapo Oyesola</h1>
                <p className="text-xs opacity-[50%]">Renter</p>
                <p className="flex items-center text-xs mt-1">
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
              <p className="text-[11px] font-md">
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
    </div>
  );
}
