import { useContext, useEffect, useState } from "react"
import Header from "../../components/Header"
import { AuthContext } from "../../Providers/AuthProvider"
import axios from "axios";
import toast from "react-hot-toast";


function MyOrder() {
  const {user} = useContext(AuthContext)
  const [items, setItems] = useState([]);


  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/order/${user?.email}`,{withCredentials:true}
      
    );
    
    setItems(data);
  }; 

useEffect(() => {
      getData();
    }, [user?.email])


    // delete card
    const handleDelete = async (id)=>{

      try {
        const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/order/${id}`)
        console.log(data)
        toast.success('Delete Successful')
  
        //refresh ui
        getData()
      } catch (err) {
        console.log(err.message)
        toast.error(err.message)
      }
    }

    // Function to format the date
const formatDate = (purchaseTime) => {
  const date = new Date(purchaseTime);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  const [day,  month, year] = formattedDate.split(' ');
  return `${day} ${month} ${year}`;
};


  return (
    <div>
      <Header image={'banner5.jpg'} text={'My Ordered Items'} ></Header>
      <div className="mt-52 lg:mt-[550px]  px-4 md:px-0 lg:px-4 container mx-auto">
        <div className="space-y-5 px-3  lg:w-10/12 mx-auto rounded-2xl py-24 mb-3">
          <h1 className="font-poppins text-2xl font-semibold text-base-400 font-poet">
            Total   <span className="text-red-600">{items.length}</span> Food
            items Ordered by  
            <span className="uppercase text-teal-800"> {user?.displayName}</span>
          </h1>
          <hr />
          <div>
            <div className="overflow-x-auto space-y-8">
              {
                items.map(item=>(
                  <>
                  <div className="grid md:grid-cols-4 gap-3 justify-center items-center border-2 border-teal-600 rounded-2xl p-4">
                <div><img src={item.image} alt="" className="md:max-w-44 w-full rounded-2xl"/></div>
                <div className="col-span-2">
                  <h2 className="font-poet text-gray-500">Total Cost: <span className="text-teal-800">{item.price} $</span></h2>
                  <h1 className="font-poet text-gray-500">Product Name:<span className="text-teal-800">{item.food_name}</span></h1>
                  <h3 className="font-poet text-gray-500">Date of Order: <span className="text-teal-800">{formatDate(item.purchase_time)}</span></h3>
                  <h3 className="font-poet text-gray-500">Food Owner Name:<span className="text-teal-800">{item.cooker_name}</span></h3>
                </div>
                <div className="text-center space-y-4">
                  <h1 className="font-poet text-gray-500 text-xl">Delete your Order?</h1>
                  <button onClick={()=>handleDelete(item._id)} className="btn w-full font-poet text-xl text-teal-700 hover:text-gray-300 hover:bg-teal-700">Delete</button>
                </div>
              </div></>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyOrder