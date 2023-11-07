import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { useState } from "react";
import RouteChangeLoader from "../../Utilities/Loader/RouteChangeLoader/RouteChangeLoader";
import toast from "react-hot-toast";
import { Spinner } from "@material-tailwind/react";

const UpdateJob = () => {
  let axios = useAxios();
  let id = useParams();
  let navigate = useNavigate();

  //   states
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);
  let [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`/categories/${id.id}`).then((res) => {
      setLoading(false);
      setData(res.data);
    });
  }, [axios, id.id]);

  const handleFormSubmit = async (e) => {
    setSpinner(true);

    e.preventDefault();

    const formData = {
      email: e.target.elements.email.value,
      job_title: e.target.elements.job_title.value,
      deadline: e.target.elements.deadline.value,
      short_description: e.target.elements.short_description.value,
      category: e.target.elements.category.value,
      price_range_min: e.target.elements.price_range_min.value,
      price_range_max: e.target.elements.price_range_max.value,
    };

    await axios.put(`/categories/${id.id}`, formData).then(() => {
      toast.success("Job updated successfully");
      navigate("/my-posted-jobs");
      setSpinner(false);
    });
  };

  if (loading) {
    return <RouteChangeLoader />;
  }
  console.log(data);
  return (
    <div className="bg-[#eff6f3] py-10">
      <div className="w-full">
        <section className="bidContainer mx-auto my-10">
          <header>Update Job Details</header>
          <form className="bidForm" action="#" onSubmit={handleFormSubmit}>
            {/* Employers email */}
            <div className="input-box">
              <label>Your Email</label>
              <input
                required
                className="cursor-not-allowed"
                type="email"
                name="email"
                readOnly
                defaultValue={data.email}
              />
            </div>

            {/* Job Title */}
            <div className="input-box">
              <label>Job Title</label>
              <input
                required
                type="text"
                name="job_title"
                defaultValue={data.job_title}
              />
            </div>

            {/* Deadline */}
            <div className="input-box">
              <label>Deadline</label>
              <input
                required
                type="date"
                name="deadline"
                defaultValue={data.deadline}
              />
            </div>

            {/* Job Description */}
            <div className="input-box">
              <label>Job Description</label>
              <input
                required
                type="text"
                name="short_description"
                defaultValue={data.short_description}
              />
            </div>

            {/* Select Category */}
            <div className="input-box">
              <select
                name="category"
                id="category"
                className="p-3 w-full bg-transparent border-[1px] border-[#ee4e34] mt-2"
                required
                defaultValue={data.category}
              >
                <option selected disabled value="">
                  Select Category
                </option>
                <option value="web-development">Web Development</option>
                <option value="digital-marketting">Digital Marketting</option>
                <option value="graphics-designing">Graphics Design</option>
              </select>
            </div>

            {/* Minimmum Price */}
            <div className="input-box">
              <label>Minimmum Price</label>
              <input
                required
                type="number"
                name="price_range_min"
                defaultValue={data.price_range_min}
              />
            </div>

            {/* Maximum Price */}
            <div className="input-box">
              <label>Maximum Price</label>
              <input
                required
                type="number"
                name="price_range_max"
                defaultValue={data.price_range_max}
              />
            </div>

            <button type="submit">
              {spinner ? (
                <div className="flex justify-center items-center gap-5 ">
                  <Spinner color="red" /> Updating
                </div>
              ) : (
                "Update Job"
              )}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UpdateJob;
