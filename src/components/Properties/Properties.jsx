import React from "react";

export default function Properties() {
  const properties = [
    {
      img: "./assets/images/properties/home1.png",
      title: "Palm Harbor",
      price: "$4,200",
      location: "Highland Lake, FL",
      fullLoca: "2699 Green Valley, Highland Lake, FL",
      type: "Condo",
      bed: 2,
      bath: 3,
      dimen: "5 x 7",
    },
    {
      img: "./assets/images/properties/home1.png",
      title: "Beverly Springfield",
      price: "$2,700",
      location: "Lagos, Tx",
      fullLoca: "2821 Lake Sevilla, Lagos, TX",
      type: "Condo",
      bed: 4,
      bath: 2,
      dimen: "6 x 7.5",
    },
    {
      img: "./assets/images/properties/home1.png",
      title: "Beverly Springfield",
      price: "$2,700",
      location: "Lagos, Tx",
      fullLoca: "2821 Lake Sevilla, Lagos, TX",
      type: "Condo",
      bed: 4,
      bath: 2,
      dimen: "6 x 7.5",
    },
    {
      img: "./assets/images/properties/home1.png",
      title: "Beverly Springfield",
      price: "$2,700",
      location: "Lagos, Tx",
      fullLoca: "2821 Lake Sevilla, Lagos, TX",
      type: "Condo",
      bed: 4,
      bath: 2,
      dimen: "6 x 7.5",
    },
    {
      img: "./assets/images/properties/home1.png",
      title: "Beverly Springfield",
      price: "$2,700",
      location: "Lagos, Tx",
      fullLoca: "2821 Lake Sevilla, Lagos, TX",
      type: "Condo",
      bed: 4,
      bath: 2,
      dimen: "6 x 7.5",
    },
    {
      img: "./assets/images/properties/home1.png",
      title: "Beverly Springfield",
      price: "$2,700",
      location: "Lagos, Tx",
      fullLoca: "2821 Lake Sevilla, Lagos, TX",
      type: "Condo",
      bed: 4,
      bath: 2,
      dimen: "6 x 7.5",
    },
  ];

  return (
    <section className="px-4 pb-2 sm:pb-6 sm:px-10 lg:px-24 lg:pt-10 xxl:px-36">
      <div className="flex flex-col-reverse gap-4 sm:flex-row sm:justify-between">
        <div className="flex sm:w-[50%] lg:w-[35%] bg-purpleShade-100 rounded-lg px-3 h-[4rem] py-2 border-2 border-solid border-purpleShade-200 justify-between">
          <div className="py-3 flex items-center justify-center border-2 border-solid border-purpleShade-200 gap-2 bg-white rounded-lg w-full">
            <i class="fa-solid fa-key text-primaryColor"></i>
            <p className="text-primaryColor font-medium">Rent</p>
          </div>
          <div className="py-3 flex items-center justify-center gap-2 opacity-[50%] w-full">
            <i class="fa-solid fa-money-bill"></i>
            <p>Buy</p>
          </div>
          <div className="py-3 flex items-center justify-center gap-2 opacity-[50%] w-full">
            <i class="fa-solid fa-house"></i>
            <p>Sell</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:w-[50%] lg:w-[35%] px-3 rounded-lg h-[4rem] bg-purpleShade-100 border-2 border-solid border-purpleShade-200">
          <i class="fa-solid fa-magnifying-glass text-primaryColor"></i>
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent w-full pr-2 h-full outline-none"
          />
        </div>
      </div>

      <div className="flex gap-6 overflow-x-scroll lg:flex-wrap lg:overflow-hidden lg:justify-around xxl:justify-center xxl:gap-10 xxl:mt-10 lg:px-4 hide-scrollbar scroll-smooth mt-4">
        {properties.map((item) => {
          return (
            <div className="rounded-lg overflow-hidden min-w-[70%] sm:min-w-[50%] lg:min-w-[27%] border-2 border-solid border-purpleShade-200">
              <img src={item.img} alt="" className="w-full object-cover" />
              <div className="p-3">
                <div className="flex justify-between border-b-2 border-solid border-purpleShade-200 pb-3">
                  <div className="w-full">
                    <h2 className="text-primaryColor text-xl font-bold">
                      {item.price}
                      <span className="text-black opacity-[50%] text-sm font-normal">
                        /month
                      </span>
                    </h2>
                    <h1 className="font-bold text-xl my-2 truncate w-[85%] sm:whitespace-normal sm:w-full">
                      {item.title}
                    </h1>
                    <p className="text-sm opacity-[50%]">
                      <span className="lg:hidden">{item.location}</span>{" "}
                      <span className="hidden lg:flex">{item.fullLoca}</span>
                    </p>
                  </div>
                  <div className="w-max h-max rounded-full flex justify-center items-center border-2 border-solid border-purpleShade-200">
                    <i class="fa-regular fa-heart p-2 text-primaryColor font-medium"></i>
                  </div>
                </div>
              </div>
              <div className="px-3 pb-4 flex gap-4">
                <p className="text-xs font-extralight flex">
                  <i class="fa-solid fa-bed text-primaryColor"></i>&nbsp; &nbsp;
                  {item.bed} <span className="hidden lg:flex">&nbsp; Beds</span>
                </p>
                <p className="text-xs font-extralight flex">
                  <i class="fa-solid fa-bath text-primaryColor"></i>&nbsp;
                  &nbsp; {item.bath}{" "}
                  <span className="hidden lg:flex">&nbsp; Bathrooms</span>
                </p>
                <p className="text-xs font-extralight flex">
                  <i class="fa-solid fa-ruler text-primaryColor"></i>&nbsp;
                  &nbsp; {item.dimen} m &sup2;{" "}
                  <span className="hidden lg:flex">&nbsp; Beds</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
