import Banner from "../../Components/Banner/Banner";
import BrandsMarquee from "../../Components/BrandsMarquee/BrandsMarquee";
import Category from "../../Components/Category/Category";
import HiringCompanies from "../../Components/HiringCompanies/HiringCompanies";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <BrandsMarquee />
      <HiringCompanies />
    </div>
  );
};

export default Home;
