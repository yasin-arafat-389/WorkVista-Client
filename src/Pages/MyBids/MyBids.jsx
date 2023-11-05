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

  if (loading) {
    return <RouteChangeLoader />;
  }

  return (
    <div>
      {data.length === 0 ? (
        <div>
          <NoDataFound text={"You have not made any Bid yet"} />
        </div>
      ) : (
        <>
          <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 my-20">
            <table className="w-full table-fixed">
              <thead>
                <tr className="bg-gray-100">
                  <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                    Job Title
                  </th>
                  <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                    Email
                  </th>
                  <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                    Deadline
                  </th>
                  <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                    Status
                  </th>
                  <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td className="py-4 px-6 border-b border-gray-200">
                        {item.jobTitle}
                      </td>
                      <td className="py-4 px-6 border-b border-gray-200">
                        {item.yourEmail}
                      </td>
                      <td className="py-4 px-6 border-b border-gray-200">
                        {item.deadline}
                      </td>
                      <td className="py-4 px-6 border-b border-gray-200">
                        <span
                          className={`${
                            item.status === "pending"
                              ? "bg-gray-500"
                              : "bg-green-500"
                          }  text-white py-1 px-2 rounded-full text-xs`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 border-b border-gray-200">
                        <div className="cursor-not-allowed">
                          <Button disabled color="">
                            Complete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MyBids;
