import Lottie from "lottie-react";
import loader from "../../../Assets/routeLoader.json";

const RouteChangeLoader = () => {
  return (
    <div>
      <div className="flex h-screen justify-center items-center">
        <Lottie animationData={loader} loop={true} className="w-[30%]" />
      </div>
    </div>
  );
};

export default RouteChangeLoader;
