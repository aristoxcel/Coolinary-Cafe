import { Link } from "react-router-dom"
import Headline from "../../components/Headline"
import { HiOutlineArrowLongRight } from "react-icons/hi2";



function WelcomeNote() {
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-24">
     <div className="flex flex-col justify-center items-center space-y-4">
        <h1 className="text-2xl lg:text-3xl font-pacific text-red-500">Coolinary Cafe</h1>
        <Headline
        text={'Welcome'}
        pera={"Experience the perfect blend of flavors and ambiance at Coolinary Cafe. Our menu is crafted with locally sourced ingredients to ensure a delightful dining experience.  Join us and indulge in culinary bliss!"}>
        </Headline>

        <Link to={'/contact'}><button className="flex justify-center items-center gap-8 text-base-500 font-ubuntu">Join us  <HiOutlineArrowLongRight /></button></Link>
    </div>
    <div className="md:w-4/6 w-full"><img src={"https://i.ibb.co/b2Zbrdg/grill1-2.jpg"} alt="" className="rounded-2xl border-2 border-teal-800 animate:move-glow-ring"/></div>
   </div>
  )
}

export default WelcomeNote