import Container from "@/components/Common/ContainerCommon";
import ImageCommon from "@/components/Common/ImageCommon";
import StarRatings from "@/components/Common/StarRatings";
import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    name: "Vikas",
    rating: 2,
    avatar: "/assets/dummy/img_2.png",
    feedback:
      "Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.",
  },
  {
    name: "Vikas",
    rating: 5,
    avatar: "/assets/dummy/img_2.png",
    feedback:
      "Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.",
  },
  {
    name: "Vikas",
    rating: 3,
    avatar: "/assets/dummy/img_2.png",
    feedback:
      "Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.",
  },
  {
    name: "Vikas",
    rating: 2,
    avatar: "/assets/dummy/img_2.png",
    feedback:
      "Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.",
  },
  {
    name: "Vikas",
    rating: 4,
    avatar: "/assets/dummy/img_2.png",
    feedback:
      "Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <div className="py-10 md:py-[50px] bg-[#F9F9F9]">
      <Container>
        <div>
          <h6 className="text-2xl text-[#333333] font-normal text-center font-bankGothic uppercase">
            Testimonials
          </h6>
        </div>
        <div className="pb-[39px]">
          <Slider {...settings} className="">
            {testimonials.map((item, index) => (
              <div key={index} className="px-[33px] relative">
                <div className="bg-white rounded-lg shadow-md p-[25px] h-full mt-[58px] mb-[39px]">
                  <div className="absolute top-[35px] left-[9px]">
                    <ImageCommon
                      src={item?.avatar}
                      className="w-[50px] h-[50px] rounded-full z-50"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2.5">
                    <h4 className="text-sm font-normal text-[#404040]">
                      {item.name}
                    </h4>
                    <div className="flex">
                      <StarRatings count={item.rating} />
                    </div>
                  </div>
                  <p className="text-sm italic text-[#707070]">
                    {item.feedback}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
