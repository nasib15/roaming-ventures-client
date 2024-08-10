/* eslint-disable react/no-unescaped-entities */
import { Button, Carousel, Typography } from "@material-tailwind/react";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="py-6">
      <Carousel
        transition={{ duration: 1 }}
        autoplay={true}
        loop={true}
        autoplayDelay={5000}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {/* Banner img */}
        <div className="relative h-[90vh] w-full">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-[90vh] w-full object-cover"
          />
          <div className="absolute inset-0 grid h-[90vh] w-full place-items-center bg-black/50">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                <Typewriter
                  words={["The Beauty of Nature"]}
                  loop={0}
                  cursor={true}
                  cursorStyle="_"
                  delaySpeed={1500}
                ></Typewriter>
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Escape to breathtaking destinations and unwind in the lap of
                luxury.
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg" className="bg-[#e55039]">
                  <a href="#spots">Explore</a>
                </Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[90vh] w-full">
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-[90vh] w-full object-cover"
          />
          <div className="absolute inset-0 grid h-[90vh] w-full items-center bg-black/50">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                <Typewriter
                  words={["Explore Hidden Gems"]}
                  loop={0}
                  cursor={true}
                  cursorStyle="_"
                  delaySpeed={1500}
                ></Typewriter>
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Uncover the world's best-kept secrets and create unforgettable
                memories off the beaten path.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" className="bg-[#e55039]">
                  <a href="#spots">Explore</a>
                </Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[90vh] w-full">
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-[90vh] w-full object-cover"
          />
          <div className="absolute inset-0 grid h-[90vh] w-full items-end bg-black/50">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                <Typewriter
                  words={["Adventure Awaits"]}
                  loop={0}
                  cursor={true}
                  cursorStyle="_"
                  delaySpeed={1500}
                ></Typewriter>
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Embark on thrilling journeys and experience adrenaline-pumping
                adventures in exotic locales.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" className="bg-[#e55039]">
                  <a href="#spots">Explore</a>
                </Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
