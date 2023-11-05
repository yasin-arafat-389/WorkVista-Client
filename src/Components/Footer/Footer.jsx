import { BsFacebook } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="w-[90%] mx-auto pt-[60px] pb-[30px]">
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-6">
                <a href="#">
                  <img
                    className="w-[50%]"
                    src="https://i.ibb.co/H75CRnK/workvista-logo-removebg-preview.png"
                    alt=""
                  />
                </a>

                <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                  Explore Endless Opportunities, Connect with Top Employers, and
                  Find Your Ideal Work Environment with WorkVista.
                </p>

                <div className="flex mt-6 gap-6">
                  <BsFacebook className="text-gray-600 text-[23px] cursor-pointer" />
                  <BsPinterest className="text-gray-600 text-[23px] cursor-pointer" />
                  <BsDiscord className="text-gray-600 text-[23px] cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    About
                  </h3>
                  <a className="cursor-pointer block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Company
                  </a>
                  <a className="cursor-pointer block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Career
                  </a>
                  <a className="cursor-pointer block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Community
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    Blog
                  </h3>
                  <a className="cursor-pointer block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Career Tips
                  </a>
                  <a className="cursor-pointer block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Corporate
                  </a>
                  <a className="cursor-pointer block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Remote Job
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    Top Companies
                  </h3>
                  <a className="cursor-pointer block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Tiger IT
                  </a>
                  <a className="cursor-pointer block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Data Soft
                  </a>
                  <a className="cursor-pointer block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Brain Station 23
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    Contact
                  </h3>
                  <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    +1 526 654 8965
                  </span>
                  <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    workvista@gmail.com
                  </span>
                  <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Mirpur 2, Dhaka, Bangladesh
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

          <div>
            <p className="text-center text-gray-500 dark:text-gray-400">
              © WorkVista 2023 - All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
