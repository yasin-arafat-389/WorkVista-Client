import Lottie from "lottie-react";
import heroAnimation from "../../Assets/hero-section-animation.json";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://i.ibb.co/GWVwjYw/background-1.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[90%] mx-auto  ">
        <div className="ContentOfBanner">
          <h1 className="mt-[50px] font-black text-blue-900 dark:text-white text-[30px] md:text-[28px] lg:text-[50px]">
            Unlock your potential
            <br />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              with WorkVista
            </span>
          </h1>

          <div className="subText mt-[20px]">
            <p className="text-[12px] md:text-[11px] lg:text-[16px] block font-semibold text-gray-500 dark:text-gray-400">
              Explore Endless Opportunities, Connect with Top Employers, and
              Find Your Ideal Work Environment with WorkVista. Join a Community
              of Talent, where Innovation Meets Expertise, and Make Your Mark in
              the Job Landscape.
            </p>
          </div>

          <span className="text-[12px] md:text-[11px] lg:text-[16px]  mt-[20px] block font-semibold text-gray-500 dark:text-gray-400">
            Join us in our variety of communities
          </span>

          <div className="grid grid-cols-3  gap-6 mt-[20px]">
            <a
              aria-label="add to slack"
              href="#"
              className="p-3 flex justify-center border border-gray-500 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30"
            >
              <div className="flex justify-center items-center space-x-4">
                <img
                  className="w-[30px]"
                  src="https://i.ibb.co/CK77SF5/Telegram-logo-svg.webp"
                  alt="slack logo"
                  loading="lazy"
                />
                <span className="hidden font-medium md:hidden lg:block dark:text-white">
                  Telegram
                </span>
              </div>
            </a>

            <a
              aria-label="add to slack"
              href="#"
              className="p-3 flex justify-center border border-gray-500 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30"
            >
              <div className="flex justify-center items-center space-x-4">
                <img
                  className="w-[30px]"
                  src="https://i.ibb.co/Hd90h6Y/download.png"
                />
                <span className="hidden font-medium md:hidden lg:block dark:text-white">
                  Discord
                </span>
              </div>
            </a>

            <a
              aria-label="add to slack"
              href="#"
              className="p-3 flex justify-center border border-gray-500 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30"
            >
              <div className="flex justify-center items-center space-x-4">
                <img
                  className="w-[30px]"
                  src="https://i.ibb.co/sgJZS4K/unnamed.png"
                  loading="lazy"
                />
                <span className="hidden font-medium md:hidden lg:block dark:text-white">
                  Raklet
                </span>
              </div>
            </a>
          </div>

          <div className="pt-12 flex gap-6 lg:gap-12 justify-between grayscale lg:w-2/3">
            <img
              src="https://i.ibb.co/1TRCym2/linkedin-logo-512x512.png"
              className="h-8 sm:h-10 w-auto lg:h-12"
              alt=""
            />
            <img
              src="https://i.ibb.co/m9GWg0w/6092b7514135708162a4be92-Favicon-256.png"
              className="h-8 sm:h-10 w-auto lg:h-12"
              alt=""
            />
            <img
              src="https://i.ibb.co/gt5WWZR/Indeed-Logo.png"
              className="h-8 sm:h-10 w-auto lg:h-12"
              alt=""
            />
          </div>
        </div>

        <div className="ImageOfBanner flex justify-center items-center">
          <Lottie
            animationData={heroAnimation}
            loop={true}
            className="w-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
