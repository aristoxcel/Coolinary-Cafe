function Chef() {
  return (
    <div className="text-center pt-14 pb-14">
      <h1 className="font-poet text-red-500 text-2xl md:text-3xl lg:text-4xl">
        Meet
      </h1>
      <h1 className="font-poet text-gray-500 text-3xl md:text-4xl lg:text-5xl pb-10">
        Our Chef
      </h1>
      <div className="grid grid-cols1 md:grid-cols-3 gap-5 md:gap-2 lg:gap-6">


        <div className=" relative max-w-lg w-[350px]  mx-auto bg-white shadow-md rounded-lg overflow-hidden h-[300px]">
          <div className="flex items-center justify-center mt-4 ">
            <img
              className="w-32 h-32 rounded-full border-4 border-white z-20"
              src="https://i.ibb.co/D7jMCQM/pic.jpg"
              alt="Profile Image"
            />
          </div>
          <div className="absolute top-[80px]  text-center mt-2 border-2 border-b-0 border-l-0 border-r-0 rounded-md py-16 px-4 md:px-3 lg:px-5">
            <h2 className="text-xl font-semibold text-gray-600 font-poet">John Doe</h2>
            <p className="text-gray-600 font-ubuntu">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              commodo velit non neque porttitor.
            </p>
          </div>
        </div>

        <div className=" relative max-w-lg w-[350px]  mx-auto bg-white shadow-md rounded-lg overflow-hidden h-[300px]">
          <div className="flex items-center justify-center mt-4 ">
            <img
              className="w-32 h-32 rounded-full border-4 border-white z-20"
              src="https://i.ibb.co/DKhsnBF/pexels-bertellifotografia-3764119.jpg"
              alt="Profile Image"
            />
          </div>
          <div className="absolute top-[80px]  text-center mt-2 border-2 border-b-0 border-l-0 border-r-0 rounded-md py-16 px-4 md:px-3 lg:px-5">
            <h2 className="text-xl font-semibold text-gray-600 font-poet">John Doe</h2>
            <p className="text-gray-600 font-ubuntu">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              commodo velit non neque porttitor.
            </p>
          </div>
        </div>

        <div className=" relative max-w-lg w-[350px]  mx-auto bg-white shadow-md rounded-lg overflow-hidden h-[300px]">
          <div className="flex items-center justify-center mt-4 ">
            <img
              className="w-32 h-32 rounded-full border-4 border-white z-20"
              src="https://i.ibb.co/Y2Dn0PB/pexels-chloekalaartist-1043471.jpg"
              alt="Profile Image"
            />
          </div>
          <div className="absolute top-[80px]  text-center mt-2 border-2 border-b-0 border-l-0 border-r-0 rounded-md py-16 px-4 md:px-3 lg:px-5">
            <h2 className="text-xl font-semibold text-gray-600 font-poet">John Doe</h2>
            <p className="text-gray-600 font-ubuntu">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              commodo velit non neque porttitor.
            </p>
          </div>
        </div>

    

       
      </div>
    </div>
  );
}

export default Chef;
