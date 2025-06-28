import ButtonCommon from "@/components/Common/ButtonCommon";
import Container from "@/components/Common/ContainerCommon";
import ImageCommon from "@/components/Common/ImageCommon";
import FormInput from "@/components/form/FormInput";
import FormWrapper from "@/components/form/FormWrapper";
import React from "react";
import { useForm } from "react-hook-form";

const NewsletterHome = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = async () => {};
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-black/40 z-0">
        <ImageCommon
          src={"/assets/dummy/img_1.png"}
          className={"w-full h-full object-cover brightness-50"}
        />
      </div>
      <Container>
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-26 px-4 w-full">
          <div>
            <h2 className="text-2xl font-semibold uppercase text-white mb-[11px]">
              Get Coupons & Style Guides
            </h2>
            <p className="text-xl text-white font-normal mb-[27px]">
              Subscribe to our Newsletter
            </p>
          </div>
          <div className="w-full sm:w-[300px] md:w-[495px]">
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col md:flex-row gap-[14px] md:gap-2.5 ">
                <FormInput
                  type="email"
                  name="email"
                  control={control}
                  placeholder="E-mail ID"
                  className="border orange-border-color px-4 py-2 h-10 3xl:h-10 bg-white w-full lg:w-[360px] rounded-[0px]"
                />
                <ButtonCommon
                  type="submit"
                  className="red-button text-white px-6 py-4 h-10 text-sm font-semibold uppercase rounded-[0px]  cursor-pointer"
                >
                  SUBSCRIBE
                </ButtonCommon>
              </div>
            </FormWrapper>
          </div>
        </div>
      </Container>
      <div className="absolute bottom-0 right-1/3 lg:right-[20%] z-10">
        <ButtonCommon className="flex items-center gap-2 bg-[#222222] text-white px-4 py-2.5 rounded text-base font-medium h-10 rounded-tl-[6px] rounded-tr-[6px] rounded-bl-[0px] rounded-br-[0px] cursor-pointer  ">
          <span>
            <ImageCommon
              src={"/assets/icon/icon_10.svg"}
              className={"w-[14px] h-[17px]"}
            />
          </span>
          Locate Us
        </ButtonCommon>
      </div>
    </section>
  );
};

export default NewsletterHome;
