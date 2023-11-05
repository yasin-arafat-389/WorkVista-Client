/* eslint-disable react/prop-types */
import "./category.css";

const CategoryCard = ({ data }) => {
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
              <span className="text-blue-600">Price Range:</span>{" "}
              {data.price_range}
            </span>
          </li>
          <li className="listCat flex items-center gap-3">
            <span>
              <span className="text-blue-600">Short Description:</span>{" "}
              <span className="text-[18px]">{data.short_description}</span>
            </span>
          </li>
        </ul>
        <button type="button" className="actionCat">
          Bid Now
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
