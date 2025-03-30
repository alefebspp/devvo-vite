import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import RingCard from "@/components/ring-card";

import { Ring } from "@/types/ring";
import useRingCarousel from "./use-ring-carousel";

interface Props {
  rings: Ring[];
}

export default function RingCarousel({ rings }: Props) {
  const { setApi, canScrollLeft, canScrollRight } = useRingCarousel();

  return (
    <div className="relative w-full max-w-6xl mx-auto my-8">
      {canScrollLeft && (
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10"></div>
      )}

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {rings.map((ring) => (
            <CarouselItem key={ring.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <RingCard ring={ring} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {canScrollLeft && <CarouselPrevious />}
        {canScrollRight && <CarouselNext />}
      </Carousel>

      {canScrollRight && (
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10"></div>
      )}
    </div>
  );
}
