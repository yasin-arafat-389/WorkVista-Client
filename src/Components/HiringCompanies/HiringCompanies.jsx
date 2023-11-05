import "./HiringCompanies.css";
import { IoLocationOutline } from "react-icons/io5";
import { LuUsers2 } from "react-icons/lu";
import { AiFillStar } from "react-icons/ai";
import { BsFillTagsFill } from "react-icons/bs";

const HiringCompanies = () => {
  return (
    <div className="bg-[#FAF6EB] pt-[40px] pb-[80px]">
      <div className="w-[80%] mx-auto">
        <h2 className="text-center text-[30px] md:text-[40px] lg:text-[40px] font-bold leading-tight text-gray-800 py-0 pb-7 md:py-3 md:pb-7 lg:py-10">
          Featured companies <span className="text-[#19A463]">Actively</span>{" "}
          Hiring
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="cardHiring bg-[#fff] p-5 shadow-xl hover:shadow-2xl rounded-3xl">
            <div className="HiringIdentity flex justify-between">
              <img
                src="https://i.ibb.co/zfKr4y5/1663220555-removebg-preview.png"
                className="w-[40%]"
              />
              <button className="hiringButton">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                    ></path>
                  </svg>{" "}
                  Follow
                </span>
              </button>
            </div>
            <div>
              <h1 className="mt-7 text-[18px] font-bold">DataSoft</h1>
              <div className="iconsHiring flex gap-7 mt-2">
                <div className="location flex gap-1 text-[#999] text-[15px] font-semibold">
                  <IoLocationOutline fontSize={"20px"} />
                  <h1>Dhaka</h1>
                </div>
                <div className="employee flex gap-1 text-[#999] text-[15px] font-semibold">
                  <LuUsers2 fontSize={"20px"} />
                  <h1>50-100</h1>
                </div>
                <div className="star flex gap-1 text-[#999] text-[15px] font-semibold">
                  <AiFillStar fontSize={"20px"} className="text-green-600" />
                  <h1 className="text-green-600">5.0</h1>
                </div>
              </div>

              <p className="text-gray-500 text-[16px] font-medium mt-4">
                We are hiring! Join our team as a web developer or digital
                marketer. Be part of our exciting journey. Apply now and make
                your mark!
              </p>

              <div className="iconsHiring flex gap-7 mt-4">
                <div className="location flex gap-1 text-[#999] text-[12px] font-semibold">
                  <BsFillTagsFill fontSize={"20px"} className="text-blue-500" />
                  <h1>Web Development</h1>
                </div>
                <div className="location flex gap-1 text-[#999] text-[12px] font-semibold">
                  <BsFillTagsFill fontSize={"20px"} className="text-blue-500" />
                  <h1>Digital Marketting</h1>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="cardHiring bg-[#fff] p-5 shadow-xl hover:shadow-2xl rounded-3xl">
            <div className="HiringIdentity flex justify-between">
              <img
                src="https://i.ibb.co/pJhvyxM/Untitled-design.png"
                className="w-[35%]"
              />
              <button className="hiringButton">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                    ></path>
                  </svg>{" "}
                  Follow
                </span>
              </button>
            </div>
            <div>
              <h1 className="mt-7 text-[18px] font-bold">Tiger IT</h1>
              <div className="iconsHiring flex gap-7 mt-2">
                <div className="location flex gap-1 text-[#999] text-[15px] font-semibold">
                  <IoLocationOutline fontSize={"20px"} />
                  <h1>Chittagong</h1>
                </div>
                <div className="employee flex gap-1 text-[#999] text-[15px] font-semibold">
                  <LuUsers2 fontSize={"20px"} />
                  <h1>70-120</h1>
                </div>
                <div className="star flex gap-1 text-[#999] text-[15px] font-semibold">
                  <AiFillStar fontSize={"20px"} className="text-green-600" />
                  <h1 className="text-green-600">4.0</h1>
                </div>
              </div>

              <p className="text-gray-500 text-[16px] font-medium mt-4">
                Join our team for exciting opportunities in digital marketing
                and graphics design. Be part of our creative journey. Apply now
                and showcase your talent!
              </p>

              <div className="iconsHiring flex gap-7 mt-4">
                <div className="location flex gap-1 text-[#999] text-[12px] font-semibold">
                  <BsFillTagsFill fontSize={"20px"} className="text-blue-500" />
                  <h1>Digital Marketting</h1>
                </div>
                <div className="location flex gap-1 text-[#999] text-[12px] font-semibold">
                  <BsFillTagsFill fontSize={"20px"} className="text-blue-500" />
                  <h1>Graphics Designing</h1>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="cardHiring bg-[#fff] p-5 shadow-xl hover:shadow-2xl rounded-3xl">
            <div className="HiringIdentity flex justify-between">
              <img
                src="https://i.ibb.co/N6ZMf1t/Tech-Tron-removebg-preview.png"
                className="w-[35%]"
              />
              <button className="hiringButton">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                    ></path>
                  </svg>{" "}
                  Follow
                </span>
              </button>
            </div>
            <div>
              <h1 className="mt-7 text-[18px] font-bold">TechTron Hub</h1>
              <div className="iconsHiring flex gap-7 mt-2">
                <div className="location flex gap-1 text-[#999] text-[15px] font-semibold">
                  <IoLocationOutline fontSize={"20px"} />
                  <h1>Rajshahi</h1>
                </div>
                <div className="employee flex gap-1 text-[#999] text-[15px] font-semibold">
                  <LuUsers2 fontSize={"20px"} />
                  <h1>30-80</h1>
                </div>
                <div className="star flex gap-1 text-[#999] text-[15px] font-semibold">
                  <AiFillStar fontSize={"20px"} className="text-green-600" />
                  <h1 className="text-green-600">4.5</h1>
                </div>
              </div>

              <p className="text-gray-500 text-[16px] font-medium mt-4">
                Exciting opportunities await in web development and graphic
                design. Join our team and help us craft stunning websites and
                captivating visual content.
              </p>

              <div className="iconsHiring flex gap-7 mt-4">
                <div className="location flex gap-1 text-[#999] text-[12px] font-semibold">
                  <BsFillTagsFill fontSize={"20px"} className="text-blue-500" />
                  <h1>Web Development</h1>
                </div>
                <div className="location flex gap-1 text-[#999] text-[12px] font-semibold">
                  <BsFillTagsFill fontSize={"20px"} className="text-blue-500" />
                  <h1>Graphics Designing</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringCompanies;
