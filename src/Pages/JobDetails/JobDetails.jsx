import { Link, useNavigate, useParams } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";
import { BiDollar } from "react-icons/bi";
import "./JobDetails.css";
import useAxios from "../../Hooks/useAxios";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Button, Spinner } from "@material-tailwind/react";
import toast from "react-hot-toast";
import RouteChangeLoader from "../../Utilities/Loader/RouteChangeLoader/RouteChangeLoader";

const JobDetails = () => {
  let axios = useAxios();
  let id = useParams();
  let jobId = id.id;
  let { user } = useAuth();
  let navigate = useNavigate();

  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);
  let [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    setPageLoading(true);
    axios.get(`/categories/${jobId}`).then((res) => {
      setData(res.data);
      setPageLoading(false);
    });
  }, [axios, jobId]);

  // POST data from the form
  const [formData, setFormData] = useState(() => ({
    yourEmail: user?.email || "",
    price: "",
    deadline: "",
  }));

  // Data is fetching
  if (pageLoading) {
    return <RouteChangeLoader />;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const postFormData = async (formDataWithStatus) => {
    try {
      setLoading(true);
      await axios.post("/myBids", formDataWithStatus).then(() => {
        setLoading(false);
        toast.success("You placed the bid successfully");
        navigate("/my-bids");
      });
    } catch (error) {
      console.error("Error storing data", error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.price || !formData.deadline) {
      return Swal.fire("", "Price and Deadline can not be empty", "warning");
    }

    const formDataWithStatus = {
      ...formData,
      status: "pending",
      buyerEmail: data.email,
      jobTitle: data.job_title,
    };
    postFormData(formDataWithStatus);
  };

  return (
    <div className="bg-[#eff6f3] pb-10">
      <div className="text-center text-[20px] md:text-[40px] lg:text-[40px] text-[#fff] py-10 font-semibold bg-[#244034]">
        {data.job_title}
      </div>

      <div className="w-[80%] md:w-[80%] lg:w-[40%] mx-auto grid grid-cols-2 gap-5">
        {/* Card 1 */}
        <div className="deadline bg-white p-[40px] flex flex-col justify-center items-center gap-4 mt-10 rounded-3xl">
          <BiTimeFive className="text-[30px] md:text-[40px] lg:text-[40px]" />
          <h1 className="text-[#24403499] text-[13px] md:text-[16px] lg:text-[16px] font-medium">
            Deadline
          </h1>
          <h1 className="text-[#244034] font-bold text-[12px] md:text-[20px] lg:text-[20px]">
            {data.deadline}
          </h1>
        </div>

        {/* Card 2 */}
        <div className="deadline bg-white p-[40px] flex flex-col justify-center items-center gap-4 mt-10 rounded-3xl">
          <BiDollar className="text-[30px] md:text-[40px] lg:text-[40px]" />
          <h1 className="text-[#24403499] text-[13px] md:text-[16px] lg:text-[16px] font-medium">
            Price Range
          </h1>
          <h1 className="text-[#244034] font-bold text-[12px] md:text-[20px] lg:text-[20px]">
            ${data.price_range_min} - ${data.price_range_max}
          </h1>
        </div>
      </div>

      <div className="description w-[40%] mx-auto bg-white p-[20px] rounded-3xl mt-5">
        <h1 className="text-[#244034] font-bold text-[16px] text-center">
          {data.short_description}
        </h1>
      </div>

      {data?.email === user?.email ? (
        <div className="flex justify-center items-center mt-10">
          <Link to="/bid-requests">
            <Button>See bids for this job</Button>
          </Link>
        </div>
      ) : (
        <div className="w-full">
          <section className="bidContainer mx-auto my-10">
            <header>Place Your Bid</header>
            <form className="bidForm" action="#">
              <div className="input-box">
                <label>Your Email</label>
                <input
                  required
                  type="email"
                  readOnly
                  name="yourEmail"
                  value={formData.yourEmail}
                  onChange={handleInputChange}
                  className="cursor-not-allowed"
                />
              </div>

              <div className="input-box">
                <label>Buyer Email</label>
                <input
                  required
                  type="email"
                  readOnly
                  defaultValue={data.email}
                  className="cursor-not-allowed"
                />
              </div>

              <div className="input-box">
                <label>Price</label>
                <input
                  placeholder="How much will you charge?"
                  type="number"
                  required
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-box">
                <label>Deadline</label>
                <input
                  required
                  placeholder="Enter birth date"
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                />
              </div>

              <button type="submit" onClick={handleFormSubmit}>
                {loading ? (
                  <div className="flex justify-center gap-5 ">
                    <Spinner color="red" /> Placing Bid
                  </div>
                ) : (
                  "Place Bid"
                )}
              </button>
            </form>
          </section>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
