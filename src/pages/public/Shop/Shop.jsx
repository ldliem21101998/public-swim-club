import React from "react";
import shopeeStoreImg from "../../../assets/shopee-store.jpg";

const Shop = () => {
  return (
    <div className="w-full md:px-16 px-6 py-12">
      <div className="flex lg:flex-row flex-col gap-14 max-lg:gap-8">
        <div className="lg:w-1/2 flex flex-col gap-6">
          <p className="uppercase lg:text-4xl md:text-3xl text-2xl font-bold text-sectionTitle text-nowrap">
            Freaky Fish Swim Shop
          </p>

          <div>
            <iframe
              className="w-full lg:h-96 md:h-80 h-72"
              src="https://www.youtube.com/embed/FKX3Axr9kQY?si=GOysJbRddT8fCVTZ&autoplay=1&mute=1&loop=1&playlist=FKX3Axr9kQY&controls=0&modestbranding=1&rel=0&fs=0&iv_load_policy=3"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col justify-center items-center">
          <img src={shopeeStoreImg} alt="shopee-store" />

          <div className="flex justify-center items-center mt-10">
            <div className="bg-black bg-opacity-30 rounded-lg p-4 w-[70%]">
              <button className="bg-gradient-to-r from-[#ff3331] to-[#ff8d4c] w-full py-1 px-4 rounded-lg">
                <p className="text-white font-bold lg:text-2xl md:text-xl text-lg uppercase text-center drop-shadow-lg">
                  <a
                    href="https://shopee.vn/martinhamilton?is_from_login=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check out the shop
                  </a>
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
