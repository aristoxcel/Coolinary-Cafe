import { GiSolidLeaf } from "react-icons/gi";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareFacebook } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-base-200">
      <footer className="footer p-10 text-base-content lg:w-4/5 mx-auto">
  <nav data-aos="fade-down"
     data-aos-easing="ease-in-sine"
     data-aos-duration="500">
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Property selling</a>
    <a className="link link-hover">Property Buying</a>
    <a className="link link-hover">Architectural</a>
    <a className="link link-hover">Advising</a>
  </nav> 
  <nav data-aos="fade-down"
     data-aos-easing="ease-in-sine"
     data-aos-delay="300">
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us: Landmark Group</a>
    <a className="link link-hover">Contact : 01911309454</a>
    <a className="link link-hover">Jobs : www.Landmark.com</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav data-aos="fade-down"
     data-aos-easing="ease-in-sine"
     data-aos-delay="600">
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer> 
<footer className="footer px-10 py-4 border-t bg-gradient-to-r from-base-200 to-gray-200 text-base-content border-base-300 lg:w-4/5 mx-auto">
  <aside className="items-center grid-flow-col">
  <GiSolidLeaf className="text-2xl text-green-500"/>
    <p className="font-franklin text-base font-semibold lg:font-extrabold mx-auto  bg-gradient-to-r from-[#2596BE] via-green-500 to-[#2596BE] text-transparent bg-clip-text" >Landmark Industrial Group <br/><span className="text-sm text-sky-900">Providing reliable source since 2024</span></p>
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
  )
}

export default Footer