import { useCallback, useEffect, useState } from "react";
import { CarouselApi } from "../ui/carousel";

export default function useRingCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const onScrollChange = useCallback((api: CarouselApi) => {
    if (api) {
      setCanScrollLeft(api.canScrollPrev());
      setCanScrollRight(api.canScrollNext());
    }
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }
    onScrollChange(api);

    api.on("scroll", onScrollChange);
    api.on("resize", onScrollChange);
    api.on("slidesChanged", onScrollChange);

    return () => {
      api.off("scroll", onScrollChange);
      api.off("resize", onScrollChange);
      api.off("slidesChanged", onScrollChange);
    };
  }, [api, onScrollChange]);

  return {
    setApi,
    canScrollLeft,
    canScrollRight,
  };
}
