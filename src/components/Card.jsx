import { Link } from "react-router-dom"


function Card({food}) {
const {_id,
  food_name,
    category,
    price,
    image,
    country,
    quantity, count}=food
  return (
    <div className="mx-auto w-full overflow-hidden flex shadow-md shadow-teal-500 hover:shadow-2xl hover:shadow-teal-600 border rounded-2xl" id="card">
    <div className="card  bg-base-100 shadow-xl flex-grow ">
      <figure className="relative" data-aos="zoom-out"
   data-aos-easing="ease-in-sine"
   data-aos-duration="300">
          <button className="rounded px-3 font-poet bg-violet-600 border-none text-base-300 font-bold text-xl p-[-1px] absolute right-8 top-6">{}</button>
        <img className="w-full object-fill h-96 overflow-hidden"
          src={image}
          alt="craft"
        />
     <div className="absolute text-xl text-white font-semibold flex gap-2  left-5 bottom-4 border-2 border-amber-400 rounded-md px-2 bg-opacity-40 bg-black" > <h2>Purchased {count}..</h2></div> 
      </figure>
      <div className="card-body p-4 pb-6 ">
        <div className="space-y-1">
        <h2 className="card-title font-poet text-violet-900" data-aos="fade-left"
   data-aos-anchor="#example-anchor"
   data-aos-offset="500"
   data-aos-delay="500"
  >{}</h2>
        <div className="flex md:flex-col gap-3 justify-between">
        <div className="flex justify-between">
            <p className="font-poet text-base-400">Name of Food: <span className="font-ubuntu">{food_name }</span></p>
            <p className="font-poet text-base-400">Price: <span className="font-ubuntu text-red-400 text-2xl font-semibold">{price }$</span></p>
            </div>
        <p className="font-poet text-base-400">Category of Food: <span className="font-ubuntu">{category}</span> </p>
        </div>
        {/* <div className="flex space-x-1">
  {[1, 2, 3, 4, 5].map((star) => (
   <svg key={star} onMouseMove={() => setUserRating(star)} className='w-5 cursor-pointer' viewBox="0 0 24 24" fill="#94a3b8" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill={ star <= userRating ? "#f2b00a" :"#94a3b8" } /> </g></svg>
    ))}
        </div> */}
        </div>
        <div className="flex justify-between items-center flex-wrap">
        <div className="flex justify-between  w-full">
            <p className="font-poet text-base-400">Food Origin <span className="font-ubuntu">{country }</span></p>
            <p className="font-poet text-base-400">Available: <span className="font-ubuntu">{quantity } Pcs</span></p>
        </div>
        
   

       <Link to={`/details/${_id}`} className="w-full">
       <button type="submit" className=" rounded-lg text-xl w-full h-10 mt-3 text-white bg-teal-700 overflow-hidden relative z-10 group hover:text-teal-900 duration-700">Details<span className="bg-teal-600 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-50 size-[3/4] rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-teal-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-100 size-72 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-teal-400 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-200 size-52 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-teal-300 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-300 size-36 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-teal-100 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-[400ms] size-28 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span></button>
       </Link>
       
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card