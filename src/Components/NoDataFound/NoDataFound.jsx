/* eslint-disable react/prop-types */
import Lottie from "lottie-react";
import noData from "../../Assets/noDataFound.json";

const NoDataFound = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#eff6f3] h-screen">
      <Lottie animationData={noData} loop={true} className="w-[400px]" />
      <h2 className="text-center text-[30px] md:text-[40px] lg:text-[40px] font-bold leading-tight text-gray-800 pt-10">
        {text}
      </h2>
    </div>
  );
};

export default NoDataFound;
