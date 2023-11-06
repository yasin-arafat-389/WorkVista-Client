import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";

const AddJob = () => {
  let { user, loading } = useAuth();
  let axios = useAxios();

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
    e.preventDefault();
    const dataToSubmit = {
      emai: formData.email,
      job_title: formData.job_title,
      deadline: formData.deadline,
      short_description: formData.short_description,
      category: formData.category,
      price_range_max: formData.price_range_max,
      price_range_min: formData.price_range_min,
    };

    axios
      .post("/categories", dataToSubmit)
      .then(() => {
        console.log("Data successfully sent to MongoDB!");
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

  if (loading) {
    return <div>Hi</div>;
  }

  return (
    <div className="bg-[#eff6f3] py-10">
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

            <button type="submit">Add Job</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddJob;
