import { useState } from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { categories } from "../TempData/tempData"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function CategoryCarousel() {
    const [selectedCategory, setSelectedCategory] = useState("for-me")

    return (
        <div className="w-full bg-white border-b lg:hidden mt-3">
            <Carousel
                opts={{
                    align: "start",
                    slidesToScroll: 1,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-1">
                    {categories.map((category) => (
                        <CarouselItem key={category.id} className="pl-1 basis-1/5">
                            <div
                                className="flex flex-col items-center gap-2 cursor-pointer p-2"
                                onClick={() => setSelectedCategory(category.id)}
                            >
                                <Avatar
                                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-18 md:h-18 ${selectedCategory === category.id
                                        ? "border-2 border-red-500 bg-red-50"
                                        : "border-2 border-gray-200 bg-gray-50"
                                        }`}
                                >
                                    <AvatarImage
                                        src={category.img?.src}
                                        className="transition-transform duration-300 hover:scale-105"
                                    />
                                    <AvatarFallback>G</AvatarFallback>
                                </Avatar>
                                <span
                                    className={`text-xs font-medium transition-colors text-center leading-tight ${selectedCategory === category.id
                                        ? "text-red-600"
                                        : "text-gray-700"
                                        }`}
                                >
                                    {category.label}
                                </span>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext className="right-0" />
                <CarouselPrevious className="left-0" />
            </Carousel>
        </div>
    )
}
