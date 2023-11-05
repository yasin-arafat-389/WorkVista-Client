import Lottie from "lottie-react";
import loader from "../../../Assets/routeLoader.json";

const RouteChangeLoader = () => {
  return (
    <div>
      <div className="flex h-screen justify-center items-center">
        <Lottie animationData={loader} loop={true} />
      </div>
    </div>
  );
};

export default RouteChangeLoader;
