import Silk from "./blocks/Backgrounds/Silk/Silk"
import CircularGallery from './blocks/Components/CircularGallery/CircularGallery'
import TextType from "./blocks/TextAnimations/TextType/TextType"
import { NavbarDemo } from "./components/NavbarDemo"
import WrapButton from "./components/ui/wrap-button"
import Masonry from './blocks/Components/Masonry/Masonry';
import { items } from "./constant/index"
import { TextReveal } from "@/components/magicui/text-reveal";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import TiltedCard from "./blocks/Components/TiltedCard/TiltedCard"
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { RestaurantMenu } from "./components/ResturantMenu"

export default function App() {
  return (
    <>
      <div className="relative h-full">
        <div className="absolute inset-0 -z-10">
          <Silk
            speed={5}
            scale={1}
            color="#d59d56"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>

        <nav className="w-full pt-5 relative z-10">
          <NavbarDemo />
        </nav>

        <div className="relative z-10 mt-10 font-bold text-7xl flex justify-center">
          <TextType
            text={[
              "PIZZA & PASTA DAY!",
              "HOT PIZZAS CREAMY PASTAS",
              "ORDER NOW!",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
          />
        </div>

        <div className="relative z-10 h-[600px] w-full">
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
        </div>

        <div className="relative z-10 p-10 text-white flex justify-center">
          <WrapButton href="#menu" className="w-84 text-3xl font-bold flex justify-center">ORDER NOW</WrapButton>
        </div>

        {/* <div className="relative z-10 p-10">
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={true}
          />
        </div> */}

        <div className="relative z-10 my-28 px-10 flex justify-start gap-x-10 items-start">
          <TiltedCard
            imageSrc="./cas-owner.jpg"
            altText="PIZZA & PASTA"
            captionText="PIZZA & PASTA"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}

          />
          <div>
            <TextType
              className="font-bold text-5xl"
              text={"PIZZA & PASTA!"}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="_"
            />
            <TextReveal className="font-normal">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quo nihil itaque similique ad dignissimos quisquam asperiores laudantium deleniti laborum, a magnam placeat. Dolore, reiciendis sint iste earum voluptatem repellendus! Dolore, reiciendis sint iste earum voluptatem repellendus!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quo nihil itaque similique ad dignissimos quisquam asperiores laudantium deleniti laborum, a magnam placeat.
            </TextReveal>
          </div>
        </div>

        <div className="w-full relative z-10 my-28">
          <VelocityScroll>OUR MENU</VelocityScroll>
        </div>

        <div className="w-full relative z-10 mt-40 flex justify-center  items-start">
          <RestaurantMenu />
        </div>

        <div className="cursor-none">
          <SmoothCursor />
        </div>
      </div>
    </>
  )
}