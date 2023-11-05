import { useQuery } from "@tanstack/react-query";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useAxios from "../../Hooks/useAxios";
import CategoryCard from "./CategoryCard";
import ContentLoader from "../../Utilities/Loader/ContentLoader/ContentLoader";

const Category = () => {
  let axios = useAxios();

  const webData = async () => {
    try {
      const res = await axios.get("/categories", {
        params: {
          category: "web-development",
        },
      });
      return res.data;
    } catch (error) {
      throw new Error("Error fetching web data");
    }
  };

  const { data: web, isFetching: webisFetching } = useQuery({
    queryKey: ["category-web"],
    queryFn: webData,
  });

  const digitalData = async () => {
    try {
      const res = await axios.get("/categories", {
        params: {
          category: "digital-marketting",
        },
      });
      return res.data;
    } catch (error) {
      throw new Error("Error fetching web data");
    }
  };

  const { data: digital, isFetching: digitalisFetching } = useQuery({
    queryKey: ["category-digital"],
    queryFn: digitalData,
  });

  const graphicsData = async () => {
    try {
      const res = await axios.get("/categories", {
        params: {
          category: "graphics-designing",
        },
      });
      return res.data;
    } catch (error) {
      throw new Error("Error fetching web data");
    }
  };

  const { data: graphics, isFetching: graphicsisFetching } = useQuery({
    queryKey: ["category-graphics"],
    queryFn: graphicsData,
  });

  return (
    <div className="pb-10 bg-[#f9f9f9]">
      <h2 className="text-center text-[30px] md:text-[40px] lg:text-[40px] font-bold leading-tight text-gray-800 py-0 pb-7 md:py-3 md:pb-7 lg:py-10">
        Browse by <span className="text-blue-600">Category</span>
      </h2>

      <div className="w-[80%] mx-auto">
        <Tabs>
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Digital Marketting</Tab>
            <Tab>Graphics Design</Tab>
          </TabList>

          <TabPanel>
            {webisFetching ? (
              <ContentLoader />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 w-[90%] mx-auto">
                {web.map((item, index) => (
                  <CategoryCard key={index} data={item} />
                ))}
              </div>
            )}
          </TabPanel>

          <TabPanel>
            {digitalisFetching ? (
              <ContentLoader />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 w-[90%] mx-auto">
                {digital.map((item, index) => (
                  <CategoryCard key={index} data={item} />
                ))}
              </div>
            )}
          </TabPanel>

          <TabPanel>
            {graphicsisFetching ? (
              <ContentLoader />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 w-[90%] mx-auto">
                {graphics.map((item, index) => (
                  <CategoryCard key={index} data={item} />
                ))}
              </div>
            )}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Category;
