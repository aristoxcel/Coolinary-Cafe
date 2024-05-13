
import { Link, useLoaderData } from "react-router-dom"




function Details() {
  const food = useLoaderData()
  
 const {_id, category, cooker_name, cooker_img, cooker_email,count, country, food_name, image, ingredients, price, procedure, quantity}=food || {}

//
  return (
    <div>
    <section className="flex min-h-[calc(100vh-99px)]  w-full items-center justify-center bg-white px-8">
    <div className="flex w-full max-w-6xl gap-10 lg:flex-row-reverse flex-col-reverse items-center justify-between">
      <div className="max-w-md md:space-y-5 sm:space-y-3 space-y-3">
      <h1 className="lg:text-2xl sm:text-xl text-xl font-bold leading-tight text-gray-900">{category}</h1>
        <h1 className="lg:text-5xl sm:text-4xl text-3xl font-semibold font-pacific leading-tight text-gray-900">{food_name}</h1>
        <h1 className="lg:text-4xl sm:text-3xl text-2xl font-semibold font-poet leading-tight text-red-600">Price: {price}$</h1>
        
        <hr className="divide-x-4"/>
        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
          <div className="flex gap-3">
            <div className="bg-gray-300 rounded-full"><img src={cooker_img} alt="" className="h-12 w-12 rounded-full border"/></div>
            <div>
              <h2 className="font-poet text-gray-600 ">Food Maker -</h2>
              <h2 className="font-pacific text-gray-400">{cooker_name}</h2>
            </div>
          </div>
          <div>
            <h2 className="font-poet text-gray-600 ">Food Origin</h2>
            <h2 className="font-pacific text-gray-400">{country}</h2>
          </div>
        </div>
        <hr />
        <p className="lg:text-lg sm:text-base text-sm text-gray-600 font-poet">
          Food Details:
        </p>

        <div className="flex space-x-4">
        <p className="lg:text-lg sm:text-base text-sm text-gray-600 font-poet">Ingredients-</p>
        {
          ingredients.map(i=>(<div className="flex flex-col  font-pacific"><li>{i}</li></div>))
        }


        </div>
        <p><span className="font-poet lg:text-lg sm:text-base text-sm text-gray-600">Procedure: </span>{procedure}</p>
        <hr />
      
        <div className="flex justify-between items-center space-x-2">
  
          <h2 className="font-poet lg:text-lg sm:text-base text-sm text-gray-600">Available Quantity: {quantity} pcs</h2>
         <Link to={`/purchase/${_id}`}> <button className="inline-flex flex-nowrap items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white">
            Purchase
          </button></Link>
         
        </div>
        <hr />
        <p className="text-sm text-gray-500">Purchased by {count+2000}+ Food Lovers</p>
      </div>
      <div className="relative">  
        <img src={image} className="relative md:h-[600px]  sm:h-[500px] h-[300px]  w-[500px] bg-gray-400 rounded-b-full object-cover" alt="hero navigate ui"/>
      </div>
    </div>
  </section>       
    
    </div>
  )
}

export default Details