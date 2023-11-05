import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import { useParams } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";
import { BiDollar } from "react-icons/bi";
import "./JobDetails.css";

const JobDetails = () => {
  let axios = useAxios();
  let id = useParams();
  let jobId = id.id;

  const singleData = async () => {
    try {
      const res = await axios.get(`/categories/${jobId}`).then();
      return res.data;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  };

  const { data, isFetching } = useQuery({
    queryKey: ["single-data"],
    queryFn: singleData,
  });

  console.log(data);

  if (isFetching) {
    return <div>Loading</div>;
  }

  return (
    <div className="bg-[#eff6f3] pb-10">
      <div className="text-center text-[40px] text-[#fff] py-10 font-semibold bg-[#244034]">
        {data.job_title}
      </div>

      <div className="w-[40%] mx-auto grid grid-cols-2 gap-5">
        {/* Card 1 */}
        <div className="deadline bg-white p-[40px] flex flex-col justify-center items-center gap-4 mt-10 rounded-3xl">
          <BiTimeFive fontSize={"40px"} />
          <h1 className="text-[#24403499] text-[16px] font-medium">Deadline</h1>
          <h1 className="text-[#244034] font-bold text-[20px]">
            {data.deadline}
          </h1>
        </div>

        {/* Card 2 */}
        <div className="deadline bg-white p-[40px] flex flex-col justify-center items-center gap-4 mt-10 rounded-3xl">
          <BiDollar fontSize={"40px"} />
          <h1 className="text-[#24403499] text-[16px] font-medium">
            Price Range
          </h1>
          <h1 className="text-[#244034] font-bold text-[20px]">
            {data.price_range}
          </h1>
        </div>
      </div>

      <div className="description w-[40%] mx-auto bg-white p-[20px] rounded-3xl mt-5">
        <h1 className="text-[#244034] font-bold text-[16px] text-center">
          {data.short_description}
        </h1>
      </div>

      {/* Place your bid form */}
      <div className="w-full">
        <section className="bidContainer mx-auto my-10">
          <header>Place Your Bid</header>
          <form className="bidForm" action="#">
            <div className="input-box">
              <label>Your Email</label>
              <input required type="email" />
            </div>

            <div className="input-box">
              <label>Buyer Email</label>
              <input required type="email" />
            </div>

            <div className="input-box">
              <label>Price</label>
              <input
                required
                placeholder="How much will you charge?"
                type="number"
              />
            </div>

            <div className="input-box">
              <label>Deadline</label>
              <input required="" placeholder="Enter birth date" type="date" />
            </div>

            <button>Submit</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default JobDetails;
