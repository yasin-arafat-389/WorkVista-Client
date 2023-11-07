import { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { useEffect } from "react";
import RouteChangeLoader from "../../Utilities/Loader/RouteChangeLoader/RouteChangeLoader";
import useAuth from "../../Hooks/useAuth";
import NoDataFound from "../../Components/NoDataFound/NoDataFound";
import { Button, Chip } from "@material-tailwind/react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Helmet } from "react-helmet";
import favicon from "./bid.png";

const BidRequests = () => {
  let axios = useAxios();
  let { user } = useAuth();
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`/bidRequests?email=${user.email}`).then((res) => {
      setLoading(false);
      setData(res.data);
    });
  }, [axios, user.email]);

  const handleAccept = (index) => {
    const updatedData = [...data];
    updatedData[index].status = "in progress";
    setData(updatedData);
    const itemId = updatedData[index]._id;
    axios.put(`/bidRequests/${itemId}`, { status: "in progress" });
  };

  const handleReject = (index) => {
    const updatedData = [...data];
    updatedData[index].status = "cancelled";
    setData(updatedData);
    const itemId = updatedData[index]._id;
    axios.put(`/bidRequests/${itemId}`, { status: "cancelled" });
  };

  console.log(data);

  if (loading) {
    return <RouteChangeLoader />;
  }

  return (
    <div className="bg-[#eff6f3]">
      <Helmet>
        <title>WorkVista | Bid Requests</title>
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      {data.length === 0 ? (
        <NoDataFound text={"You have no bid requests"} />
      ) : (
        <section className="container mx-auto p-6 font-mono">
          <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-white bg-gray-600 capitalize border-b border-gray-600">
                    <th className="px-4 py-3 text-center">Job Title</th>
                    <th className="px-4 py-3 text-center">Bidder Email</th>
                    <th className="px-4 py-3 text-center">Status</th>
                    <th className="px-4 py-3 text-center">Deadline</th>
                    <th className="px-4 py-3 text-center">Price</th>
                    <th className="px-4 py-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <>
                    {data.map((item, index) => (
                      <tr className="text-gray-700" key={index}>
                        <td className="px-4 py-3 border ">
                          <div className="flex items-center justify-center text-sm">
                            <p className="font-semibold text-black ">
                              {item.jobTitle}
                            </p>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-ms font-semibold border text-center">
                          {item.yourEmail}
                        </td>
                        <td className="px-4 py-3 text-xs border text-center">
                          <span
                            className={`${
                              item.status === "in progress"
                                ? "text-white bg-green-500"
                                : ""
                            } ${
                              item.status === "cancelled"
                                ? "text-white bg-red-500"
                                : ""
                            } ${
                              item.status === "completed"
                                ? "text-white bg-green-500"
                                : ""
                            } px-2 py-1 font-semibold leading-tight text-white bg-gray-500  rounded-sm`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm border text-center">
                          {item.deadline}
                        </td>
                        <td className="px-4 py-3 text-sm border text-center">
                          ${item.price}
                        </td>
                        <td className="px-4 py-3 text-sm border text-center">
                          <div className="flex gap-5 justify-center items-center">
                            {item.status === "pending" && (
                              <>
                                <Button
                                  className="bg-green-400"
                                  disabled={item.status !== "pending"}
                                  onClick={() => handleAccept(index)}
                                >
                                  Accept
                                </Button>
                                <Button
                                  className="bg-red-400"
                                  disabled={item.status !== "pending"}
                                  onClick={() => handleReject(index)}
                                >
                                  Reject
                                </Button>
                              </>
                            )}

                            {item.status === "in progress" && (
                              <ProgressBar
                                completed={50}
                                bgColor="#42ae41"
                                labelColor="#ffffff"
                                animateOnRender
                                className="w-[90%]"
                              />
                            )}

                            {item.status === "completed" && (
                              <Chip
                                className="capitalize bg-green-500 text-white text-[14px]"
                                value="Job completed by bidder"
                              />
                            )}

                            {item.status === "cancelled" && (
                              <Chip
                                className="capitalize bg-red-500 text-white text-[14px]"
                                value="Bid rejected"
                              />
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BidRequests;
