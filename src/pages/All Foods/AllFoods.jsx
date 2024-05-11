import { useContext, useEffect } from "react"
import Card from "../../components/Card"
import Header from "../../components/Header"
import { AuthContext } from "../../Providers/AuthProvider"


function AllFoods() {
  const {user}=useContext(AuthContext)


  useEffect(()=>{

  },[])

  
  return (
    <div>
      <Header image={'banner4.jpg'}  text={"All Food Items"}></Header>
      <div className="mt-52 lg:mt-[550px]  px-4 md:px-0 lg:px-4">
      <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
     </div>
      </div>
  </div>
  )
}

export default AllFoods