import CircularGallery from './blocks/Components/CircularGallery/CircularGallery'
import TextType from "./blocks/TextAnimations/TextType/TextType"
import { NavbarDemo } from "./components/NavbarDemo"
import WrapButton from "./components/ui/wrap-button"
import { TextReveal } from "@/components/magicui/text-reveal"
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import TiltedCard from "./blocks/Components/TiltedCard/TiltedCard"
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity"
import { RestaurantMenu } from "./components/ResturantMenu"
import BlurGallery from "./components/Gallery"
import Footer from "./components/Footer"
import LightRays from "./blocks/Backgrounds/LightRays/LightRays"
import CurvedLoop from './blocks/TextAnimations/CurvedLoop/CurvedLoop'

export default function App() {
  return (
    <>
      {/* ✅ Fixed full-page background */}
      {/* <div className="fixed inset-0 -z-10 w-full h-full">
        <LightRays
        raysOrigin="top-center"
        raysColor="#FFFFF"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="bg-gradient-to-t from-neutral-200 to-pink-200"
        />
      </div> */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-gradient-to-t from-gray-50 to-pink-200">
      </div>

      {/* ✅ Your content on top of the background */}
      <div className="relative z-10">
        <nav className="w-full pt-5">
          <NavbarDemo />
        </nav>

        {/* <div className="mt-10 font-bold text-7xl flex justify-center text-white">
          TODAY I'M FEELING ...
        </div> */}
        <CurvedLoop
          marqueeText="     TODAY I'M FEELING ..."
          speed={0}
          curveAmount={-200}
          interactive={false}
        />

        <div className="h-[600px] w-full">
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
        </div>

        <div className="p-10 text-white flex justify-center">
          <WrapButton href="#menu" className="w-84 text-3xl font-bold flex justify-center">
            ORDER NOW
          </WrapButton>
        </div>

        <div className="my-28 px-10 flex justify-start gap-x-10 items-start">
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quo nihil itaque similique ad dignissimos
              quisquam asperiores laudantium deleniti laborum, a magnam placeat. Dolore, reiciendis sint iste earum
              voluptatem repellendus! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </TextReveal>
          </div>
        </div>

        <div className="w-full my-28">
          <VelocityScroll>OUR MENU</VelocityScroll>
        </div>

        <div className="w-full mt-40 flex justify-center items-start">
          <RestaurantMenu />
        </div>

        <div className="w-full my-28">
          <VelocityScroll>OUR GALLERY</VelocityScroll>
        </div>

        <div className="w-full mt-40 flex justify-center items-start">
          <BlurGallery />
        </div>

        <div className="w-full text-white mt-28">
          <Footer />
        </div>

        <div className="cursor-none">
          <SmoothCursor />
        </div>
      </div>
    </>
  )
}
