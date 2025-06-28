import Container from '@/components/Common/ContainerCommon';
import ImageCommon from '@/components/Common/ImageCommon';
import LinkCommon from '@/components/Common/LinkCommon';
import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#333333] py-16">
      <Container>
        <div className="lg:pl-[250px] lg:pr-[130px] flex flex-col md:flex-row justify-between items-center">
          <div className="space-y-6 text-center md:text-start">
            <LinkCommon href={""}>
              <p className="text-sm font-normal text-[#BBBBBB] mb-6">
                About Us
              </p>
            </LinkCommon>
            <LinkCommon href={""}>
              <p className="text-sm font-normal text-[#BBBBBB] mb-6">
                Delivery Information
              </p>
            </LinkCommon>
            <LinkCommon href={""}>
              <p className="text-sm font-normal text-[#BBBBBB] mb-6">
                Returns & Exchange
              </p>
            </LinkCommon>
            <LinkCommon href={""}>
              <p className="text-sm font-normal text-[#BBBBBB] mb-6">
                Technical & Privacy
              </p>
            </LinkCommon>
            <LinkCommon href={""}>
              <p className="text-sm font-normal text-[#BBBBBB] mb-6">
                Order Status
              </p>
            </LinkCommon>
          </div>

          <div className="flex flex-col items-center space-y-4 mt-[64px] md:mt-0">
            <ImageCommon
              src={"/assets/logo/logo.svg"}
              className="w-[73px] h-[48px]  sm:w-[98px] sm:h-[70px]"
            />
            <p className="text-sm font-normal text-[#BBBBBB] mt-[35px]">
              Stay in touch with us
            </p>
            <div className="flex space-x-4">
              <LinkCommon href={"/"}>
                <ImageCommon
                  src="assets/icon/icon_5.svg"
                  className="w-[30px] h-[30px]"
                />
              </LinkCommon>
              <LinkCommon href={"/"}>
                <ImageCommon
                  src="assets/icon/icon_6.svg"
                  className="w-[30px] h-[30px]"
                />
              </LinkCommon>
              <LinkCommon href={"/"}>
                <ImageCommon
                  src="assets/icon/icon_7.svg"
                  className="w-[30px] h-[30px]"
                />
              </LinkCommon>
            </div>
          </div>

          <div className="space-y-3 text-center md:text-start mt-[64px] md:mt-0">
            <p className="font-semibold text-sm text-[#DDDDDD]">
              Our Corporate Office
            </p>
            <p className="text-sm font-normal text-[#BBBBBB] leading-6">
              No: 7,A2B road, Adayar Rajpuram, <br /> T Nagar, Chennai - 642002
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-2 mt-[43px]">
              <ImageCommon
                src="assets/icon/icon_9.svg"
                className="w-[12px] h-[8px]"
              />
              <span className="text-sm font-normal text-[#BBBBBB]">
                sales@madeup.com
              </span>
            </p>
            <p className="flex justify-center md:justify-start items-center space-x-2">
              <ImageCommon
                src="assets/icon/icon_8.svg"
                className="w-[12px] h-[12px]"
              />
              <span className="text-sm font-normal text-[#BBBBBB]">
                044 9090 9099
              </span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer

