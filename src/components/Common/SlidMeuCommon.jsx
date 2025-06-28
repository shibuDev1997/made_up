import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import ImageCommon from "./ImageCommon";
import LinkCommon from "./LinkCommon";
import { usePathname } from "next/navigation";

const profileMenuItems = [
  {
    name: "MY PROFILE",
    slug: "profile",
  },
  {
    name: "My Wishlist",
    slug: "/",
  },
  {
    name: "My Orders",
    slug: "/",
  },
  {
    name: "MY Addresses",
    slug: "/",
  },
];

const brandMenuItems = [
  {
    name: "THE BRAND",
    slug: "/",
  },
  {
    name: "THE MADE UP STORY",
    slug: "/",
  },
  {
    name: "FRANCHISE AND SUPPLIERS",
    slug: "/",
  },
  {
    name: "STORE LOCATOR",
    slug: "/",
  },
];

const SlidMeuCommon = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (slug) => pathname === `/${slug}`;

  return (
    <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <SheetTrigger asChild>
        <button type="button">
          <ImageCommon
            src={"/assets/icon/icon_4.svg"}
            className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]"
          />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[299px] sm:w-[621px] sm:max-w-full p-0">
        <div className="flex flex-col h-full">
          <div className="p-6 sm:p-13 space-y-15 h-full flex flex-col justify-center items-center">
            <div className="space-y-6">
              {profileMenuItems.map((item, index) => (
                <div key={index}>
                  <LinkCommon href={`/${item?.slug}`}>
                    <span
                      className={`block text-base font-medium uppercase text-center ${
                        isActive(item?.slug)
                          ? "text-red-600"
                          : "neutrals-text-color"
                      }`}
                    >
                      {item?.name}
                    </span>
                  </LinkCommon>
                </div>
              ))}
            </div>

            <hr className="w-full border-t border-gray-200" />

            <div className="space-y-6">
              {brandMenuItems.map((item, index) => (
                <div key={index}>
                  <LinkCommon href={`/${item?.slug}`}>
                    <span
                      className={`block text-base font-medium uppercase text-center ${
                        isActive(item?.slug)
                          ? "text-red-600"
                          : "neutrals-text-color"
                      }`}
                    >
                      {item?.name}
                    </span>
                  </LinkCommon>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};


export default SlidMeuCommon;
