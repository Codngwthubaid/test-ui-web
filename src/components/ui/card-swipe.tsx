import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css/effect-cards"
import "swiper/css"
import "swiper/css/effect-coverflow"

import { EffectCards } from "swiper/modules"
import { SparklesIcon } from "lucide-react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

import { Badge } from "@/components/ui/badge"

interface CarouselProps {
  images: { src: string; alt: string }[]
  autoplayDelay?: number
  slideShadows: boolean
}

export const CardSwipe: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 1500,
  slideShadows = false,
}) => {
  const css = `
  .swiper {
    width: 50%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
   display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  `
  return (
    <section className="w-ace-y-4">
      <style>{css}</style>
          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"cards"}
                grabCursor={true}
                loop={true}
                slidesPerView={"auto"}
                rewind={true}
                cardsEffect={{
                  slideShadows: slideShadows,
                }}
                modules={[EffectCards, Autoplay, Pagination, Navigation]}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="size-full rounded-3xl">
                      <img
                        src={image.src}
                        width={500}
                        height={500}
                        className="size-full rounded-xl"
                        alt={image.alt}
                      />
                    </div>
                  </SwiperSlide>
                ))}
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="size-full rounded-3xl">
                      <img
                        src={image.src}
                        width={200}
                        height={200}
                        className="size-full rounded-xl"
                        alt={image.alt}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
      </div>
    </section>
  )
}
