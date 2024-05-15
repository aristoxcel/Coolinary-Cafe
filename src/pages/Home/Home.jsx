import { useContext, useEffect, useState } from "react"
import Banner from "../../components/Banner"
import Headline from "../../components/Headline"
import WelcomeNote from "./WelcomeNote"
import axios from "axios"
import Card from "../../components/Card"
import Chef from "../../components/Chef"


function Home() {
  const [foods, setFoods]= useState([])


  useEffect(()=>{
    const getData=async()=>{
const {data}= await axios(`${import.meta.env.VITE_API_URL}/top-food`)
setFoods(data)
    }
    getData()
  },[])

  return (
    <div>
      <Banner/>
      <WelcomeNote/>
      <Headline text={'Our Best Popular Products'} pera={'Discover our top-selling items, loved for their exceptional quality and irresistible flavors.'}/>
      <div className="container mx-auto">
      <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 '>
   {
    foods.map(food=><Card key={food._id} food={food}></Card>)
   } 
        </div>
{/* welcome second card */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-32 md:px-20">
   <div className="md:w-5/6 w-full"><img src={"https://i.ibb.co/HnKHnYp/roamntice.jpg"} alt="" className="rounded-2xl border-2 border-teal-800 animate:move-glow-ring"/></div>
   <div className="flex flex-col justify-center items-center space-y-4">
       <h1 className="text-2xl lg:text-3xl font-pacific text-red-500">Romantic</h1>
       <Headline
       text={'RESTAURANT'}
       pera={"Experience an enchanting ambiance, where candlelit tables, soft music, and delectable dishes combine to create unforgettable romantic moments with your special someone."}>
       </Headline>
   </div>
  </div>


  <hr />
  <Chef/>
      </div>
      </div>
  )
}

export default Home