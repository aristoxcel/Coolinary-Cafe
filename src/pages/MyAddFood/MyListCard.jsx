import { Link } from "react-router-dom"
import { FaRegPenToSquare } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

function MyListCard({food, getData}) {
const {user}= useContext(AuthContext)


  const handleDelete = async (id)=>{
    console.log(id)
    try {
      const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/my-add-food/${id}`)
      console.log(data)
      toast.success('Delete Successful')

      //refresh ui
      getData()
    } catch (err) {
      console.log(err.message)
      toast.error(err.message)
    }
  }
    
  return (
    <tr className="hover:bg-gray-50 border-b transition duration-300">
    <td className="py-4 px-4 flex justify-start">
        <img src={food.image} alt="table navigate ui" className="h-16 w-16 rounded-md object-cover bg-gray-300" />
    </td>
    <td className="py-4 px-6 border-b text-xl font-medium">{food.food_name}</td>
    <td className="py-4 px-6 border-b text-lg font-medium">{food.price}$</td>
    <td className="py-4 px-6 border-b text-end ">
       <Link to={`/update/${food._id}`}> <button className="bg-violet-900 mb-1 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md"><FaRegPenToSquare /></button></Link>
       <Link > <button onClick={()=>{handleDelete(food._id)}} className="bg-violet-900 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md"><RiDeleteBin5Line /></button></Link>
    </td>
</tr>
  )
}

export default MyListCard