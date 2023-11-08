import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useAxios from "../../Hooks/useAxios";
import CategoryCard from "./CategoryCard";
import ContentLoader from "../../Utilities/Loader/ContentLoader/ContentLoader";
import { useState } from "react";
import { useEffect } from "react";

const Category = () => {
  let axios = useAxios();

  // states
  let [web, setWeb] = useState([]);
  let [digital, setDigital] = useState([]);
  let [graphics, setGraphics] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/categories", {
        params: {
          category: "web-development",
        },
      })
      .then((res) => {
        setWeb(res.data);
        setLoading(false);
      });
  }, [axios]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/categories", {
        params: {
          category: "digital-marketting",
        },
      })
      .then((res) => {
        setLoading(false);
        setDigital(res.data);
      });
  }, [axios]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/categories", {
        params: {
          category: "graphics-designing",
        },
      })
      .then((res) => {
        setLoading(false);
        setGraphics(res.data);
      });
  }, [axios]);

  return (
    <div className="pb-10 bg-[#f9f9f9]">
      <h2 className="text-center text-[30px] md:text-[40px] lg:text-[40px] font-bold leading-tight text-gray-800 py-10">
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
            {loading ? (
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
            {loading ? (
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
            {loading ? (
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
