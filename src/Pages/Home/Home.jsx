import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner/Banner";
import BrandsMarquee from "../../Components/BrandsMarquee/BrandsMarquee";
import Category from "../../Components/Category/Category";
import HiringCompanies from "../../Components/HiringCompanies/HiringCompanies";
import homeFavicon from "./home.png";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>WorkVista</title>
        <link
          rel="icon"
          type="image/png"
          className="w-full"
          href={homeFavicon}
        />
      </Helmet>
      <Banner />
      <Category />
      <BrandsMarquee />
      <HiringCompanies />
    </div>
  );
};

export default Home;
