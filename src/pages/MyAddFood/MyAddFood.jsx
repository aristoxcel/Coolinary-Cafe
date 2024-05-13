import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";
import { AuthContext } from "../../Providers/AuthProvider";
import MyListCard from "./MyListCard";

function MyAddFood() {
  const { user } = useContext(AuthContext);
  const [add, setAdd] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/my-add-food/${user?.email}`
      );
      setAdd(data);
    };
    getData();
  }, [user]);

  console.log(add);
  return (
    <div>
      <Header image={"banner6.jpg"} text={"My Added Food Items"}></Header>

      <div className="mt-52 lg:mt-[550px]  px-4 md:px-0 lg:px-4 container mx-auto">
        <div className="space-y-5 px-3  lg:w-10/12 mx-auto rounded-2xl py-24 mb-3">
          <h1 className="font-poppins text-2xl font-semibold text-base-400 font-poet">
            Total - <span className="text-red-600">{add.length}</span> Food
            items added by 
            <span className="uppercase text-teal-800">{user?.displayName}</span>
          </h1>
          <hr />
          <div>
            <div className="overflow-x-auto">
              <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6 rounded-t-2xl">
                <thead>
                  <tr className="bg-teal-800 text-white">
                    <th className="py-4 px-6 text-lg text-left border-b">
                      Image of Food
                    </th>
                    <th className="py-4 px-6 text-lg text-left border-b">
                      Name of Food
                    </th>
                    <th className="py-4 px-6 text-lg text-left border-b">
                      Price
                    </th>
                    <th className="py-4 px-6 text-lg border-b text-end">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {add?.map((food) => (
                    <MyListCard key={food._id} food={food} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAddFood;
