import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import { Helmet } from "react-helmet";
import favicon from "./addJob.png";

const AddJob = () => {
  let { user } = useAuth();
  let axios = useAxios();
  let navigate = useNavigate();
  let [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: user.email,
    job_title: "",
    deadline: "",
    short_description: "",
    category: "",
    price_range_max: "",
    price_range_min: "",
  });

  const handleFormSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const dataToSubmit = {
      category: formData.category,
      deadline: formData.deadline,
      email: formData.email,
      job_title: formData.job_title,
      price_range_max: formData.price_range_max,
      price_range_min: formData.price_range_min,
      short_description: formData.short_description,
    };

    axios
      .post("/categories", dataToSubmit)
      .then(() => {
        setLoading(false);
        toast.success("Job has been added");
        navigate("/my-posted-jobs");
      })
      .catch((error) => {
        console.error("Error sending data to MongoDB", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="bg-[#eff6f3] py-10">
      <Helmet>
        <title>WorkVista | Add Job</title>
        <link rel="icon" type="image/png" className="w-full" href={favicon} />
      </Helmet>
      <div className="w-full">
        <section className="bidContainer mx-auto my-10">
          <header>Add a job</header>
          <form onSubmit={handleFormSubmit} className="bidForm" action="#">
            {/* Employers email */}
            <div className="input-box">
              <label>Your Email</label>
              <input
                required
                readOnly
                className="cursor-not-allowed"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {/* Job Title */}
            <div className="input-box">
              <label>Job Title</label>
              <input
                required
                placeholder="e.g Social Media Marketing"
                type="text"
                name="job_title"
                value={formData.job_title}
                onChange={handleInputChange}
              />
            </div>

            {/* Deadline */}
            <div className="input-box">
              <label>Deadline</label>
              <input
                required
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleInputChange}
              />
            </div>

            {/* Job Description */}
            <div className="input-box">
              <label>Job Description</label>
              <input
                required
                placeholder="e.g Social Media Marketing"
                type="text"
                name="short_description"
                value={formData.short_description}
                onChange={handleInputChange}
              />
            </div>

            {/* Select Category */}
            <div className="input-box">
              <select
                name="category"
                id="category"
                className="p-3 w-full bg-transparent border-[1px] border-[#ee4e34] mt-2"
                required
                value={formData.category}
                onChange={handleInputChange}
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
                placeholder="Your minimmum budget"
                type="number"
                name="price_range_min"
                value={formData.price_range_min}
                onChange={handleInputChange}
              />
            </div>

            {/* Maximum Price */}
            <div className="input-box">
              <label>Maximum Price</label>
              <input
                required
                placeholder="Your maximum budget"
                type="number"
                name="price_range_max"
                value={formData.price_range_max}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit">
              {loading ? (
                <div className="flex justify-center gap-5 ">
                  <Spinner color="red" /> Adding Job
                </div>
              ) : (
                "Add Job"
              )}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddJob;
