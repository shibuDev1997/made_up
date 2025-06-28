import { CategoryCarousel } from "@/components/Common/CarouselCommon";
import Latestcollection from "@/section/home/collection";
import FashionShowcase from "@/section/home/FashionShowcase ";
import NewsletterHome from "@/section/home/Newsletter";
import Testimonials from "@/section/home/Testimonials";
import { Jost } from "next/font/google";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${jost.variable} min-h-screen`}
    >
      <CategoryCarousel />
      <FashionShowcase />
      <Latestcollection />
      <Testimonials />
      <NewsletterHome />
    </div>
  );
}
