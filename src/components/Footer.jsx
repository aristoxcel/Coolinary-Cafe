import { GiSolidLeaf } from "react-icons/gi";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareFacebook } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-800">
      <footer className="footer p-10 text-gray-300 lg:w-4/5 mx-auto mt-20 pt-24 ">
      
  <nav data-aos="fade-down"
     data-aos-easing="ease-in-sine"
     data-aos-duration="500"   className=" flex-col justify-end items-end ">
    <div className="w-full text-right"><h6 className="text-gray-300 font-ubuntu text-right">Best Restaurent</h6> </div>
    <div className="w-full text-right"><p className="text-gray-300 font-ubuntu">In City of Newyork, USA</p></div>
    <a className="link link-hover text-gray-300 font-poet">Coolinary Cafe, A name of Excellence</a>
    <div className="w-full text-right"><p className="text-gray-300 font-ubuntu">N-106y</p></div>
    <div className="w-full text-right"><Link to={'/'} className="link link-hover text-gray-300 font-ubuntu">Home</Link></div>
  </nav> 
  <nav data-aos="fade-down"
     data-aos-easing="ease-in-sine"
     data-aos-delay="300" className="flex flex-col space-y-4 justify-center items-center">
    <a className="bg-transparent px-4 font-poet text-2xl border-2 border-amber-500 ">ONLINE RESERVATION</a>
    <h6 className="footer-title"></h6> 
    
    <a className="link link-hover font-poet">Follow</a>
    <a className="flex justify-center gap-[36%] ">
    <a ><FaTwitter className="text-3xl text-sky-400"/></a>
      <a ><IoLogoYoutube className="text-3xl text-red-500"/></a>
      <a ><FaSquareFacebook className="text-3xl text-sky-800"/></a>
      <a ><VscGithub  className="text-3xl text-teal-800"/></a>
    </a>
    <a className="link link-hover"></a>
  </nav> 
  <nav data-aos="fade-down"
     data-aos-easing="ease-in-sine"
     data-aos-delay="600">
    <h6 className="font-poet text-amber-500">+880 1911 309454</h6> 
    <a className="link link-hover text-white font-poet">WWW.COOLINARYCAFE.COM</a>
    <a className="text-gray-300 font-ubuntu">ABC Road, Gandaria, Dhaka</a>
    <Link to={'/contact'} className="text-gray-300 font-ubuntu">Contact Us</Link>
  </nav>
</footer> 
<div className="bg-gradient-to-r from-base-300 to-gray-400">
<footer className="footer px-10 py-4 border-t  text-base-content border-base-300 lg:w-4/5 mx-auto">
  <aside className="items-center grid-flow-col">
  <img src={'lg.png'} alt="" className="h-12"/>
    <p className="font-franklin text-base font-semibold lg:font-extrabold mx-auto  bg-gradient-to-r from-[#2596BE] via-green-500 to-[#2596BE] text-transparent bg-clip-text" >Coolinary Cafe Ltd. <br/><span className="text-sm text-sky-900">Reliable since 2024</span></p>
  </aside> 
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
      <a ><FaTwitter className="text-3xl text-sky-400"/></a>
      <a ><IoLogoYoutube className="text-3xl text-red-500"/></a>
      <a ><FaSquareFacebook className="text-3xl text-sky-800"/></a>
    </div>
  </nav>
</footer>
</div>
    </div>
  )
}

export default Footer