import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function ViewCard({feedback}) {
    const {name, image, comment} = feedback
  return (

         <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="relative rounded-2xl m-4 overflow-hidden shadow-md hover:shadow-lg">
        <img src={image} alt="" className="w-full h-72 transition-transform duration-300 transform hover:scale-105" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 ">
            <h2 className="text-lg font-pacific">{name}</h2>
            <p className="font-poet p-5">&quot; {comment} &quot;</p>
        </div>
    </div>

   
  )
}

export default ViewCard