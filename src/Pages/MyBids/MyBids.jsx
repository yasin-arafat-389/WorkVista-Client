import { Button } from "@material-tailwind/react";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import RouteChangeLoader from "../../Utilities/Loader/RouteChangeLoader/RouteChangeLoader";
import { useEffect, useState } from "react";
import NoDataFound from "../../Components/NoDataFound/NoDataFound";

const MyBids = () => {
  let axios = useAxios();
  let { user } = useAuth();
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`/myBids?email=${user.email}`).then((res) => {
      setLoading(false);
      setData(res.data);
    });
  }, [axios, user.email]);

  const handleComplete = (index) => {
    const updatedData = [...data];
    const itemId = updatedData[index]._id; // Replace '_id' with the actual identifier field in your data
    updatedData[index].status = "completed";
    setData(updatedData);
    // Make the PUT request to update the status to 'completed' in the database
    axios.put(`/bidRequests/${itemId}`, { status: "completed" });
  };

  if (loading) {
    return <RouteChangeLoader />;
  }

  return (
    // <div>
    //   {data.length === 0 ? (
    //     <div>
    //       <NoDataFound text={"You have not made any Bid yet"} />
    //     </div>
    //   ) : (
    //     <>
    //       <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 my-20">
    //         <table className="w-full table-fixed">
    //           <thead>
    //             <tr className="bg-gray-100">
    //               <th className="w-1/5 py-4 px-6 text-center text-gray-600 font-bold uppercase">
    //                 Job Title
    //               </th>
    //               <th className="w-1/5 py-4 px-6 text-center text-gray-600 font-bold uppercase">
    //                 Email
    //               </th>
    //               <th className="w-1/5 py-4 px-6 text-center text-gray-600 font-bold uppercase">
    //                 Deadline
    //               </th>
    //               <th className="w-1/5 py-4 px-6 text-center text-gray-600 font-bold uppercase">
    //                 Status
    //               </th>
    //               <th className="w-1/5 py-4 px-6 text-center text-gray-600 font-bold uppercase">
    //                 Action
    //               </th>
    //             </tr>
    //           </thead>
    //           <tbody className="bg-white">
    //             <>
    //               {data.map((item, index) => (
    //                 <tr key={index}>
    //                   <td className="py-4 px-6 border-b border-gray-200 text-center">
    //                     {item.jobTitle}
    //                   </td>
    //                   <td className="py-4 px-6 border-b border-gray-200 text-center">
    //                     {item.yourEmail}
    //                   </td>
    //                   <td className="py-4 px-6 border-b border-gray-200 text-center">
    //                     {item.deadline}
    //                   </td>
    //                   <td className="py-4 px-6 border-b border-gray-200 text-center">
    //                     <span
    //                       className={`${
    //                         item.status === "pending" ? "bg-gray-500" : ""
    //                       } ${
    //                         item.status === "cancelled" ? "bg-red-500" : ""
    //                       } ${
    //                         item.status === "in progress" ? "bg-green-500" : ""
    //                       }  ${
    //                         item.status === "completed" ? "bg-green-500" : ""
    //                       }  text-white py-1 px-2 rounded-full text-xs`}
    //                     >
    //                       {item.status}
    //                     </span>
    //                   </td>
    //                   <td className="py-4 px-6 border-b border-gray-200 text-center">
    //                     <div className="cursor-not-allowed">
    //                       <Button
    //                         onClick={() => handleComplete(index)}
    //                         disabled={item.status !== "in progress"}
    //                         color=""
    //                       >
    //                         Complete
    //                       </Button>
    //                     </div>
    //                   </td>
    //                 </tr>
    //               ))}
    //             </>
    //           </tbody>
    //         </table>
    //       </div>
    //     </>
    //   )}
    // </div>

    <div className="bg-[#eff6f3]">
      {data.length === 0 ? (
        <NoDataFound text={"You have no bid requests"} />
      ) : (
        <section className="container mx-auto p-6 font-mono">
          <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4 py-3 text-center">Job Title</th>
                    <th className="px-4 py-3 text-center">Email</th>
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
                          <div className="flex gap-5  justify-center">
                            <Button
                              className={`${
                                item.status === "in progress"
                                  ? "bg-green-400"
                                  : ""
                              } ${
                                item.status === "completed"
                                  ? "bg-green-400"
                                  : ""
                              } `}
                              disabled={item.status !== "in progress"}
                              onClick={() => handleComplete(index)}
                            >
                              {item.status === "in progress"
                                ? "Mark as complete"
                                : ""}

                              {item.status === "completed" ? "Completed" : ""}
                              {item.status === "pending"
                                ? "Wait for owners response"
                                : ""}
                              {item.status === "cancelled"
                                ? "Bid rejected by owner"
                                : ""}
                            </Button>
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
