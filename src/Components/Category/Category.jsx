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
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
        <>
          {/* tabs */}
          <div>
            <div className="grid grid-cols-3 gap-5">
              <button
                className={`p-4 rounded ${
                  activeTab === "tab1"
                    ? "bg-indigo-500 text-white font-bold shadow-md"
                    : "bg-gray-400 text-[#000] font-bold"
                } flex items-center justify-center`}
                onClick={() => handleTabClick("tab1")}
              >
                Web Development
              </button>
              <button
                className={`p-4 rounded ${
                  activeTab === "tab2"
                    ? "bg-indigo-500 text-white font-bold shadow-md"
                    : "bg-gray-400 text-[#000] font-bold"
                } flex items-center justify-center`}
                onClick={() => handleTabClick("tab2")}
              >
                Digital Marketing
              </button>
              <button
                className={`p-4 rounded ${
                  activeTab === "tab3"
                    ? "bg-indigo-500 text-white font-bold shadow-md"
                    : "bg-gray-400 text-[#000] font-bold"
                } flex items-center justify-center`}
                onClick={() => handleTabClick("tab3")}
              >
                Graphics Design
              </button>
            </div>

            {activeTab === "tab1" &&
              (loading ? (
                <ContentLoader />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 mt-5">
                  {web.map((item, index) => (
                    <CategoryCard key={index} data={item} />
                  ))}
                </div>
              ))}

            {activeTab === "tab2" &&
              (loading ? (
                <ContentLoader />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 mt-5">
                  {digital.map((item, index) => (
                    <CategoryCard key={index} data={item} />
                  ))}
                </div>
              ))}

            {activeTab === "tab3" &&
              (loading ? (
                <ContentLoader />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 mt-5">
                  {graphics.map((item, index) => (
                    <CategoryCard key={index} data={item} />
                  ))}
                </div>
              ))}
          </div>
        </>
      </div>
    </div>
  );
};

export default Category;
