import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";
import RouteChangeLoader from "../../Utilities/Loader/RouteChangeLoader/RouteChangeLoader";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyPostedJobs = () => {
  let axios = useAxios();
  let { user } = useAuth();

  //   States
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`/myPosts?email=${user.email}`).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, [axios, user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete this job?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/categories/${id}`).then(() => {
          let updatedData = data.filter((item) => item._id !== id);
          setData(updatedData);
        });
        Swal.fire({
          title: "Job deleted successfully!",
          icon: "success",
        });
      }
    });
  };

  if (loading) {
    return <RouteChangeLoader />;
  }

  return (
    <div className="bg-[#eff6f3] ">
      <div className="w-[80%] mx-auto grid grid-cols-3 gap-10 py-10">
        {data.map((data, index) => (
          <>
            <div key={index}>
              <div className="cardCat">
                <div className="headerCat">
                  <span className="titleCat">{data.job_title}</span>
                </div>
                <ul className="listsCat mt-5 text-[18px]">
                  <li className="listCat flex items-center gap-3">
                    <span>
                      <span className="text-red-400">Deadline:</span>{" "}
                      {data.deadline}
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
                      <span className="text-[18px]">
                        {data.short_description}
                      </span>
                    </span>
                  </li>
                </ul>
                <div className="flex gap-5 justify-center items-center">
                  <Link to={`/update-job/${data._id}`}>
                    <Button className="bg-green-400">Update</Button>
                  </Link>
                  <Button
                    onClick={() => handleDelete(data._id)}
                    className="bg-red-400"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default MyPostedJobs;
