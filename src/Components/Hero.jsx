import React from "react";
import backgroundGradient from "../Components/gradient3.png";
import { BsArrowRight } from "react-icons/bs";
import homepagePic from "../Components/homepage.svg";
import openseatlogo from '../Components/openseatlogo.svg'

const Hero = () => {
  return (
    <div className="font-fig">
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundGradient})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="py-4 w-full px-10">
          <nav class=" py-2.5 dark:bg-gray-900">
            <div class="flex flex-wrap items-center justify-between w-full px-4 mx-auto max-w-[60rem]">
              <a href="#" class="flex items-center">
                <img src={openseatlogo} alt="" className="w-40"/>
              </a>
              <div class="flex items-center lg:order-2">
                <div class="hidden mt-2 mr-4 sm:inline-block">
                  <span></span>
                </div>

                <a
                  href="https://themesberg.com/product/tailwind-css/landing-page"
                  class="text-white bg-gradient-to-tr from-red-400 to-orange-500  font-semibold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 shadow-xl"
                >
                  Download
                </a>
                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  class="inline-flex items-center p-2 ml-1 text-sm text-gray-100 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-2"
                  aria-expanded="true"
                >
                  <span class="sr-only">Open main menu</span>
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    class="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
              >
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 items-center">
                  <li>
                    <a
                      href="#"
                      class="block py-1 px-2 text-white rounded lg:text-orange-300 bg-orange-50/10  dark:text-white"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 pl-3 pr-4 text-slate-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-300 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 pl-3 pr-4 text-slate-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-300 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 pl-3 pr-4 text-slate-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-300 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-center gap-y-4 max-w-[90rem] mx-auto w-full py-10 px-2">
          <h1 className="eight-title text-center font-medium tracking-tighter text-slate-100">
            Find Your Seat,
            <span className="landing-text-gradient opacity-80">
              <br /> Skip The Search.
            </span>
          </h1>

          <p className="text-center one-title text-slate-100 max-w-[40rem]">
            OpenSeat is the{" "}
            {/* Insights - Insights commented out for now, will add back in when this is changed back to a feature page */}{" "}
            is the{" "}
            <span className="inline-block bg-white/15 text-white rounded-lg px-3 py-0.5 font-semibold shadow-[0_1px_4px_0_rgba(255,255,255,0.08)] mx-1 -rotate-1">
              smart occupancy system
            </span>{" "}
            for universities and shared spaces to track real-time seat
            availability through AI-powered computer vision.
          </p>

          <div className="flex gap-4 mt-2">
            <a
              className="px-4 py-2 rounded-md font-semibold shadow-xl text-slate-800 bg-gradient-to-tr from-blue-300 via-blue-100 to-white shadow-md hover:from-blue-400 hover:via-blue-200 hover:to-white transition"
              href="/sign-up"
            >
              See Demo
            </a>
            <a
              className="px-4 py-2 rounded-md font-semibold shadow-xl text-slate-100 flex gap-x-2 items-center"
              href="/opportunities"
              target="_blank"
            >
              Request Access <BsArrowRight className="w-4 h-4" />
            </a>
          </div>

          <img
            src={homepagePic}
            alt="homepage"
            className="w-full h-full object-cover mt-4 shadow-xl rounded-xl"
          />

          {/* <div className="mt-8" data-aos="fade-up" data-aos-delay="300">
            <p className="text-xs text-center uppercase tracking-wider opacity-85 mb-4">
              Founded and Backed by:
            </p>

            <div className="flex items-center gap-6 h-12">
              <img
                src="/landingPage/images/harvardWhite.png"
                alt="Harvard"
                className="h-12 object-contain opacity-85 hover:opacity-100 transition-opacity"
              />
              <img
                src="/landingPage/images/pennWhite.avif"
                alt="Penn"
                className="h-12 object-contain opacity-85 hover:opacity-100 transition-opacity"
              />
              <img
                src="/landingPage/images/googleWhite.png"
                alt="Google"
                className="h-12 object-contain opacity-85 hover:opacity-100 transition-opacity"
              />
              <img
                src="/landingPage/images/ycWhite.svg"
                alt="Y Combinator"
                className="h-12 object-contain opacity-85 hover:opacity-100 transition-opacity"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
