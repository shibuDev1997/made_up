import React from "react";
import ImageCommon from "@/components/Common/ImageCommon";
import MediaQueryCommon from "@/components/Common/MediaQueryCommon";

const FashionShowcase = () => {
  const isDesktop = MediaQueryCommon("(min-width: 768px)");
  return (
    <div>
      <div className="relative">
        <ImageCommon
          src={isDesktop ? "/assets/dummy/img_6.png" : '/assets/dummy/img_5.jpg'}
          className={"w-full h-full max-h-[680px] object-cover"}
        />
        <div className="absolute inset-0 flex flex-col top-1/3 lg:top-1/2 items-center  bg-opacity-30  text-center">
          <div className="mb-[40px] lg:mb-[88px]">
            <h2 className="text-lg md:text-xl font-normal opacity-90 bg-white text-black px-[9px] py-1.5 mb-[10px]">
              Clothes that <span className="red-text-color "> inspire</span>
            </h2>
            <p className="text-lg md:text-xl font-normal opacity-90 bg-white text-black px-[8px] py-1.5">
              for men who <span className="red-text-color "> aspire</span>
            </p>
          </div>
          <button className="mt-4 px-[30px] py-2 red-button text-white rounded-0 text-base font-medium h-[50px]">
            BROWSE COLLECTIONS
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-[7px] gap-[7px]">
        <div className="w-full md:w-1/2">
          <div className="relative">
            <ImageCommon
              src="/assets/dummy/img_7.png"
              className={"w-full h-full max-h-[740px] object-cover"}
            />
            <div className="absolute inset-0 flex flex-col top-1/2 items-center  bg-opacity-30  text-center">
              <div className="mb-[88px]">
                <h2 className="text-lg md:text-xl font-normal opacity-90 bg-white text-black px-[9px] py-1.5 mb-[10px]">
                  <span className="red-text-color "> Summer </span>
                  is here and
                </h2>
                <p className="text-lg md:text-xl font-normal opacity-90 bg-white text-black px-[8px] py-1.5">
                  so is our <span className="red-text-color ">collection</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative">
            <ImageCommon
              src="/assets/dummy/img_8.png"
              className={"w-full h-full max-h-[365px] object-cover"}
            />
            <div className="absolute inset-0 flex flex-col top-1/2 items-center  bg-opacity-30  text-center">
              <div className="mb-[88px]">
                <h2 className="text-lg md:text-xl font-normal opacity-90 bg-white text-black px-[9px] py-1.5 mb-[10px]">
                  <span className="red-text-color "> Wrinkle-free </span>
                  t-shirts
                </h2>
              </div>
            </div>
          </div>
          <div className="mt-[8px]">
            <div className="relative">
              <ImageCommon
                src="/assets/dummy/img_9.png"
                className={"w-full h-full max-h-[366px] object-cover"}
              />
              <div className="absolute inset-0 flex flex-col top-1/2 items-center  bg-opacity-30  text-center">
                <div className="mb-[88px]">
                  <h2 className="text-lg md:text-xl font-normal opacity-90 bg-white text-black px-[9px] py-1.5 mb-[10px]">
                    <span className="red-text-color ">Stain-free </span>
                    denim shirts
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionShowcase;
