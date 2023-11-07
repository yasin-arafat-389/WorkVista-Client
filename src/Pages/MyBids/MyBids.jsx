import { Button, Chip } from "@material-tailwind/react";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import RouteChangeLoader from "../../Utilities/Loader/RouteChangeLoader/RouteChangeLoader";
import { useEffect, useState } from "react";
import NoDataFound from "../../Components/NoDataFound/NoDataFound";
import { BsHourglassSplit } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { Helmet } from "react-helmet";
import favicon from "./auction.png";

const MyBids = () => {
  let axios = useAxios();
  let { user } = useAuth();
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`/myBids?email=${user.email}`).then((res) => {
      setLoading(false);
      const sortedData = res.data.sort((a, b) => {
        const statusOrder = {
          pending: 1,
          completed: 2,
          "in progress": 3,
          cancelled: 4,
        };
        return statusOrder[a.status] - statusOrder[b.status];
      });
      setData(sortedData);
    });
  }, [axios, user.email]);

  const handleComplete = (index) => {
    const updatedData = [...data];
    const itemId = updatedData[index]._id;
    updatedData[index].status = "completed";
    setData(updatedData);

    axios.put(`/bidRequests/${itemId}`, { status: "completed" });
  };

  if (loading) {
    return <RouteChangeLoader />;
  }

  return (
    <div className="bg-[#eff6f3]">
      <Helmet>
        <title>WorkVista | My Bids</title>
        <link rel="icon" type="image/png" className="w-full" href={favicon} />
      </Helmet>
      {data.length === 0 ? (
        <NoDataFound text={"You have not made any bids yet"} />
      ) : (
        <section className="container mx-auto p-6 font-mono">
          <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-white bg-gray-600 capitalize border-b border-gray-600">
                    <th className="px-4 py-3 text-center">Job Title</th>
                    <th className="px-4 py-3 text-center">
                      {`Employer's`} Email
                    </th>
                    <th className="px-4 py-3 text-center">Status</th>
                    <th className="px-4 py-3 text-center">Deadline</th>
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
                          {item.buyerEmail}
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
                          <div className="flex gap-5  justify-center">
                            {item.status === "pending" && (
                              <Chip
                                className="capitalize bg-gray-500 text-[14px]"
                                value="Await employer's response"
                                icon={
                                  <BsHourglassSplit className="text-[18px]" />
                                }
                              />
                            )}

                            {item.status === "in progress" && (
                              <Button
                                className="bg-green-500"
                                onClick={() => handleComplete(index)}
                              >
                                Mark As Complete
                              </Button>
                            )}

                            {item.status === "completed" && (
                              <Chip
                                className="capitalize bg-green-500 text-[14px]"
                                value="Job Completed"
                                icon={
                                  <BsCheckCircleFill className="text-[18px] text-white" />
                                }
                              />
                            )}

                            {item.status === "cancelled" && (
                              <Chip
                                className="capitalize bg-red-500 text-[14px]"
                                value="Bid rejected by employer"
                                icon={
                                  <MdCancel className="text-[18px] text-white" />
                                }
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

export default MyBids;
