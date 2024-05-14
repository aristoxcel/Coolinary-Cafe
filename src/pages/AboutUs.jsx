import Chef from "../components/Chef"
import Header from "../components/Header"
import Headline from "../components/Headline"
import WelcomeNote from "./Home/WelcomeNote"


function AboutUs() {
  return (
    <div>
      <Header image={'banner2.jpg'} text={'About Us'} className="text-teal-700"></Header>
      <div className="mt-52 lg:mt-[550px]  px-4 md:px-0 lg:px-4">
      <div className="flex flex-col justify-center items-center space-y-4">
        <h1 className="text-2xl lg:text-3xl font-pacific text-red-500">Coolinary Cafe</h1>
        <Headline
        text={'OUR STORY'}
        pera={"Welcome to Coolinary Cafe, where culinary delights meet cool vibes. Dive into a world of flavorful dishes crafted with passion and creativity. Our vibrant ambiance and welcoming atmosphere make every visit a memorable experience. From mouthwatering classics to innovative creations, our menu offers something for every palate. Join us for a journey of culinary exploration and relaxation. Whether you're catching up with friends or enjoying a quiet moment alone, Coolinary Cafe is the perfect destination for delicious food and cool vibes."}>
        </Headline>


<div className="flex justify-center items-center w-full bg-gray-800">
      <video className="w-full max-w-full h-[600px] " controls>
        <source src="cafe.mp4" type="video/mp4" className="w-screen"/>
        Your browser does not support the video tag.
      </video>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-16 md:px-20">
     <div className="flex flex-col justify-center items-center space-y-4">
        <h1 className="text-2xl lg:text-3xl font-pacific text-red-500">Delicious</h1>
        <Headline
        text={'RECIPES'}
        pera={"Discover tantalizing flavors in our diverse and mouthwatering recipes"}>
        </Headline>

    </div>
    <div className="md:w-5/6 w-full"><img src={"https://i.ibb.co/72PRLBd/grill1-1.jpg"} alt="" className="rounded-2xl border-2 border-teal-800 animate:move-glow-ring"/></div>
   </div>

   
   <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-12 md:px-20">
   
    <div className="md:w-5/6 w-full"><img src={"https://i.ibb.co/HnKHnYp/roamntice.jpg"} alt="" className="rounded-2xl border-2 border-teal-800 animate:move-glow-ring"/></div>
    <div className="flex flex-col justify-center items-center space-y-4">
        <h1 className="text-2xl lg:text-3xl font-pacific text-red-500">Romantic</h1>
        <Headline
        text={'RESTAURANT'}
        pera={"Indulge in our enchanting ambiance, perfect for creating unforgettable romantic moments with your loved one. "}>
        </Headline>
    </div>
   </div>
        
        <Chef/>
    </div>
      </div>
    </div>
  )
}

export default AboutUs