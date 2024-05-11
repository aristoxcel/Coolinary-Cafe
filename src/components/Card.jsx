

function Card() {
  return (
    <div className="mx-auto w-full overflow-hidden flex shadow-md hover:shadow-2xl border rounded-2xl" id="card">
    <div className="card  bg-base-100 shadow-xl flex-grow ">
      <figure className="relative" data-aos="zoom-out"
   data-aos-easing="ease-in-sine"
   data-aos-duration="300">
          <button className="rounded px-3 font-poppins bg-violet-600 border-none text-base-300 font-bold text-xl p-[-1px] absolute right-8 top-6">{}</button>
        <img className="w-full object-fill h-96 overflow-hidden"
          src="{}"
          alt="craft"
        />
        {/* <div className="absolute text-xl text-white font-semibold flex gap-2  left-5 bottom-4" > <h2></h2></div> */}
      </figure>
      <div className="card-body p-4 pb-6 ">
        <div className="space-y-1">
        <h2 className="card-title font-poppins text-violet-900" data-aos="fade-left"
   data-aos-anchor="#example-anchor"
   data-aos-offset="500"
   data-aos-delay="500"
  >{}</h2>
        <div className="flex md:flex-col gap-3 justify-between">
        <p className="font-poppins text-base-400">Made of: </p>
        <p className="font-poppins text-base-400"> Available </p>
        </div>
        <div className="flex space-x-1">
  {[1, 2, 3, 4, 5].map((star) => (
   <svg key={star} onMouseMove={() => setUserRating(star)} className='w-5 cursor-pointer' viewBox="0 0 24 24" fill="#94a3b8" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill={ star <= userRating ? "#f2b00a" :"#94a3b8" } /> </g></svg>
    ))}
  </div>
        </div>
        <div className="flex justify-between items-center flex-wrap">
        <p className="font-poppins text-violet-900 font-semibold text-xl ">Price:$US</p>
        {/* <button className="px-3 font-poppins  bg-[#2596BE] hover:bg-gradient-to-r hover:from-[#2596be] hover:to-[#62b4d2] hover:ring-2 hover:ring-offset-2 hover:ring-[#62b4d2] transition-all ease-out duration-300 font-semibold text-xl text-white rounded"><Link to={`/details/${id}`} state={title}>View Property</Link></button> */}
   
       {/* <Link to={`craft/${_id}`}> <button className="group relative flex w-36 items-center rounded-lg border-2 border-violet-900 p-3 light:text-violet-800 dark:text-sky-200 font-medium">View Details</button></Link> */}
       
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card