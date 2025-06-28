import Container from "@/components/Common/ContainerCommon";
import ImageCommon from "@/components/Common/ImageCommon";
import LinkCommon from "@/components/common/LinkCommon";
import SlidMeuCommon from "@/components/Common/SlidMeuCommon";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <>
    <div className="shadow-md">
      <Container>
        <div className=" flex items-center justify-between w-full">
          <div>
            <Link href="/">
            <ImageCommon
              src={"/assets/logo/logo.svg"}
              className="w-[73px] h-[48px]  sm:w-[98px] sm:h-[70px]"
            />
            </Link>
          </div>
          <div className="hidden lg:flex gap-17 items-center">
            <NavLink href="/" label="For Me" pathname={pathname} />
            <NavLink href="/about" label="Jeans" pathname={pathname} />
            <NavLink href="/projects" label="Shirts" pathname={pathname} />
            <NavLink href="/contact" label="T-Shirts" pathname={pathname} />
            <NavLink href="/contact" label="Trousers" pathname={pathname} />
            <NavLink href="/contact" label="Joggers" pathname={pathname} />
            <NavLink href="/contact" label="Shorts" pathname={pathname} />
          </div>
          <div className="flex gap-[27px] sm:gap-[30px] items-center">
            <div>
              <ImageCommon
                src={"/assets/icon/icon_1.svg"}
                className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]"
              />
            </div>
            <LinkCommon href="/cart">
              <ImageCommon
                src={"/assets/icon/icon_2.svg"}
                className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]"
              />
            </LinkCommon>
            <div className="hidden lg:flex">
              <LinkCommon href="/profile">
                <ImageCommon
                  src={"/assets/icon/icon_3.svg"}
                  className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]"
                />
              </LinkCommon>
            </div>
            <div className="lg:hidden">
              <SlidMeuCommon />
            </div>
          </div>
        </div>
      </Container>
    </div>
    </>
  );
};

const NavLink = ({ href, label, pathname }) => {
  const isActive = pathname === href;

  return (
    <LinkCommon href={href}>
      <span
        className={cn(
          `text-sm font-normal  ${
            isActive ? "red-text-color" : "neutral-text-color"
          }`
        )}
      >
        {label}
      </span>
    </LinkCommon>
  );
};

export default Header;
