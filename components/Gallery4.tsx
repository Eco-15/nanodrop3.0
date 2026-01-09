"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items?: Gallery4Item[];
}

const data = [
  {
    id: "nano-delivery",
    title: "Nano Delivery Technology",
    description:
      "Explore how our proprietary NanoZorb™ technology reduces nutrients to 20-80 nanometers for unprecedented bioavailability and cellular uptake.",
    href: "/science",
    image:
      "https://lyz5cvfr0h.ufs.sh/f/tLx4hl5ikmOnqjeylh0f0rumkpwBXbZgQ169Mj5tITK2SiFY",
  },
  {
    id: "immune-support",
    title: "Immune System Support",
    description:
      "Discover how DROP's five powerful ingredients work together to activate your immune response in 60-120 seconds for all-day protection.",
    href: "/product",
    image:
      "https://lyz5cvfr0h.ufs.sh/f/tLx4hl5ikmOnT9WHWFSOYKyMgiRoL2B5edw4DcX93EUupS7n",
  },
  {
    id: "natural-ingredients",
    title: "Natural & Powerful Ingredients",
    description:
      "From Israeli olive leaf extract to German-precision manufactured nano particles, every ingredient is chosen for maximum efficacy.",
    href: "/product",
    image:
      "https://lyz5cvfr0h.ufs.sh/f/tLx4hl5ikmOn6ei4OXIBMaOvXJICw4x96QTRt3gVWPrHlEsU",
  },
  {
    id: "bioavailability",
    title: "Superior Bioavailability",
    description:
      "Achieve up to 90% bioavailability compared to 30-60% for traditional supplements. See results in minutes, not hours.",
    href: "/science",
    image:
      "https://lyz5cvfr0h.ufs.sh/f/tLx4hl5ikmOnnEXCJVftEwlRJSPX6gNfrmvuq2WM4xeFGATH",
  },
  {
    id: "daily-protection",
    title: "24-Hour Daily Protection",
    description:
      "One dose provides all-day immunity with sustained protection. Simplify your supplement routine with DROP.",
    href: "/product",
    image:
      "https://lyz5cvfr0h.ufs.sh/f/tLx4hl5ikmOniy2zs58hoXrM9uw83NK7abLqpjmcBkZtgnyx",
  },
];

const Gallery4 = ({
  title = "Learn more about DROP",
  description = "Discover the science and innovation behind premium immune support. See how our unique approach sets DROP apart from traditional supplements.",
  items = data,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-forest md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="max-w-lg text-forest/70">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto border-sage/30 text-forest hover:text-sage hover:border-sage"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto border-sage/30 text-forest hover:text-sage hover:border-sage"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <a href={item.href} className="group rounded-xl">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(0_0%_0%_/0),hsl(0_0%_0%_/0.4),hsl(0_0%_0%_/0.8)_100%)] mix-blend-multiply" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm">
                        Learn more{" "}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-sage" : "bg-sage/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
