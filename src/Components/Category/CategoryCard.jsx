/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./category.css";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";

const CategoryCard = ({ data }) => {
  let { user } = useAuth();
  let [exists, setExists] = useState(false);

  const userEmail = user?.email;
  const storedData = JSON.parse(localStorage.getItem("myBids")) || [];
  const filteredData = storedData.filter((item) => item.email === userEmail);

  useEffect(() => {
    filteredData.map((item, index) => {
      if (item.id.includes(data._id)) {
        setExists(true);
      }
    });
  }, [data._id, filteredData]);

  return (
    <div>
      <div className="cardCat">
        <div className="headerCat">
          <span className="titleCat">{data.job_title}</span>
        </div>
        <ul className="listsCat mt-5 text-[18px]">
          <li className="listCat flex items-center gap-3">
            <span>
              <span className="text-red-400">Deadline:</span> {data.deadline}
            </span>
          </li>
          <li className="listCat flex items-center gap-3">
            <span>
              <span className="text-blue-600">Price Range: </span>$
              {data.price_range_min} - ${data.price_range_max}
            </span>
          </li>
          <li className="listCat flex items-center gap-3">
            <span>
              <span className="text-blue-600">Short Description:</span>{" "}
              <span className="text-[18px] elipseDesc">
                {data.short_description}
              </span>
            </span>
          </li>
        </ul>

        {data?.email === user?.email ? (
          <Link to={`/bid-requests`}>
            <button type="button" className="actionCat">
              See Bid Requests
            </button>
          </Link>
        ) : (
          <Link to={`/job-details/${data._id}`}>
            <button
              type="button"
              className={`actionCat ${
                exists ? "!bg-gray-500 !text-white" : ""
              } `}
              disabled={exists ? true : false}
            >
              {exists ? "You made bid to this job" : "Bid Now"}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CategoryCard;
