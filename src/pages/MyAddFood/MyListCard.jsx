import { Link } from "react-router-dom"
import { FaRegPenToSquare } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";

function MyListCard({food}) {
    
  return (
    <tr className="hover:bg-gray-50 border-b transition duration-300">
    <td className="py-4 px-4 flex justify-start">
        <img src={food.image} alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
    </td>
    <td className="py-4 px-6 border-b text-xl font-medium">{food.food_name}</td>
    <td className="py-4 px-6 border-b text-lg font-medium">{food.price}$</td>
    <td className="py-4 px-6 border-b text-end">
       <Link > <button className="bg-violet-900 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md"><FaRegPenToSquare /></button></Link>
       <Link > <button className="bg-violet-900 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md"><RiDeleteBin5Line /></button></Link>
    </td>
</tr>
  )
}

export default MyListCard