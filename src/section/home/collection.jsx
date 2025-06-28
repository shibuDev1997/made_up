import Container from "@/components/Common/ContainerCommon";
import ImageCommon from "@/components/Common/ImageCommon";
import { formatINR } from "@/components/helpers/FunctionalHelpers";
import React from "react";
import Slider from "react-slick";

const products = [
  {
    id: 1,
    image: "/assets/dummy/img_3.png",
    name: "Printed Polo T-Shirt",
    price: "1499.00",
  },
  {
    id: 2,
    image: "/assets/dummy/img_4.png",
    name: "Printed Polo T-Shirt",
    price: "1499.00",
  },
  {
    id: 3,
    image: "/assets/dummy/img_3.png",
    name: "Printed Polo T-Shirt",
    price: "1499.00",
  },
  {
    id: 4,
    image: "/assets/dummy/img_4.png",
    name: "Printed Polo T-Shirt",
    price: "1499.00",
  },
  {
    id: 5,
    image: "/assets/dummy/img_3.png",
    name: "Printed Polo T-Shirt",
    price: "1499.00",
  },
];

const Latestcollection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3, centerMode: true, centerPadding: "50px" },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, centerMode: true, centerPadding: "50px" },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerMode: true, centerPadding: "50px" },
      },
    ],
  };
  return (
    <Container>
      <div className="py-[51px]">
        <div className="w-full  text-center">
          <div className="my-2 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500 3xl:my-4">
            <p className="mx-3.5 mb-0 text-center text-2xl text-[#333333] font-normal font-bankGothic uppercase">
              lATEST COLLECTIONS
            </p>
          </div>
        </div>
        <div className="py-10 bg-white collection">
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="px-[5px]">
                <div>
                  <div className="h-full max-h-[318px]">
                    <ImageCommon
                      src={product?.image}
                      className="w-full h-auto object-cover max-h-[318px]"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-sm font-normal mb-1.5 text-[#404040]">
                      {product?.name}
                    </p>
                    <p className="red-text-color font-normal text-sm">
                      {formatINR(product?.price)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default Latestcollection;
