import { useContext } from "react"
import { AuthContext } from "../../Providers/AuthProvider"
import { useLoaderData } from "react-router-dom"


function UpdateForm() {
    const {user}=useContext(AuthContext)
    const foods = useLoaderData()
    console.log(foods)
    const {category,
                country,
                feedback,
                food_name,
                image,
                price,
                procedure,
                quantity,

    }=foods || {}
  return (
    <div className="py-8 px-4 bg-teal-50">
    <div className="md:w-4/5 lg:w-3/5  mx-auto">

      <div className=" mx-auto text-center">
        <h1 className="text-2xl font-poet font-bold text-sky-900 text-center mb-2">Update Your Food Item</h1>
        <form className="py-8" >
        {/* onSubmit={handleSubmitForm} */}
                         {/* Adder name and email */}
   <div className="flex gap-3  p-3 justify-between font-ubuntu">
                          <div className="relative w-full rounded-lg ">
                              <input
                              className="font-pacific w-full peer bg-transparent px-4 py-2 text-teal-600 focus:outline-none lowercase"
                              type="text"
                              defaultValue={user?.displayName}
                              disabled
                              name="cooker_name"
                              />
                          </div>

                          <div className="relative w-full  rounded-lg">
                            <input
                            className="font-pacific w-full peer  bg-transparent px-4 py-2 text-teal-600 focus:outline-none"
                            type='email'
                            name='cooker_email'
                            disabled
                            defaultValue={user?.email}
                            />
                        </div>
          </div>
          {/* Name and category */}
          <div className="flex gap-3  p-3 justify-between">
                  <div className="relative w-full rounded-lg ">
                      <input
                      className="w-full peer rounded-lg border border-teal-600 bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
                      type="text"
                      name="food_name"
                      defaultValue={food_name}
                      required
                      />

                  </div>

                  <div className="relative w-full  rounded-lg">
                      <select
                      className="w-full peer rounded-lg border border-teal-600 bg-transparent px-4 py-2 text-gray-400 focus:outline-none"
                     name="category"
                      defaultValue={category}
                      id="navigate_ui_input_33"
                      required
                      ><option disabled >Category of Food *</option>
                      <option value={'International Cuisine'}>International Cuisine</option>
                      <option value={'Vegan Specialties'}>Vegan Specialties</option>
                      <option value={'Appetizers'}>Appetizers & Starters</option>
                      <option value={'Steaks'}>Steaks & Grills</option>
                      <option value={'Burgers'}>Burgers & Fries</option>
                      <option value={'Sandwiches'}>Pizza & Sandwiches</option>
                      <option value={'Cake'}>Cake & Pastry</option>
                      <option value={'Drinks'}>Drinks & Juice</option>
                      </select>
                  </div>
                 
          </div>


   {/* Image and Origin */}
   <div className="flex gap-3  p-3 justify-between">
                          <div className="relative w-full rounded-lg ">
                              <input
                              className="w-full peer rounded-lg border border-teal-600 bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
                              type="url"
                             name="image"
                              defaultValue={image}
                              required
                              />
                          </div>

                          <div className="relative w-full  rounded-lg">
                            <input
                            className="w-full peer rounded-lg border border-teal-600 bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
                            type="text"

                            defaultValue={country}
                            name="country"
                            required
                            />
                        </div>
          </div>


   {/* Price and quantity */}
   <div className="flex gap-3  p-3 justify-between">
                          <div className="relative w-full rounded-lg ">
                              <input
                              className="w-full peer rounded-lg border border-teal-600 bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
                              type="number"
                               name="price"
                              defaultValue={price}
                              required
                              />
                          </div>

                          <div className="relative w-full  rounded-lg">
                            <input
                            className="w-full peer rounded-lg border border-teal-600 bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
                            type="number"
                          
                            name="quantity"
                            defaultValue={quantity}
                            required
                            />
                        </div>
          </div>



{/* Ingredients*/}
       <div className="rounded-lg border border-teal-600 bg-transparent mx-3">
        <h1 className="text-left text-gray-400 p-3">Ingredients:  [Write essential three items name in three box]</h1>
       <div className="flex gap-2  p-3 justify-between">
                  <div className="relative w-full rounded-lg ">
                   <input type="text" name="item1" defaultValue={foods.ingredients[0]} className="w-full peer rounded-lg border border-[#9fb5ca] bg-transparent px-4 py-2 text-gray-400 focus:outline-none"/>
                  </div>
                  <div className="relative w-full rounded-lg ">
                   <input type="text" name="item2" defaultValue={foods.ingredients[1]} className="w-full peer rounded-lg border border-[#9fb5ca] bg-transparent px-4 py-2 text-gray-400 focus:outline-none"/>
                  </div>

                  <div className="relative w-full rounded-lg ">
                   <input type="text" name="item3" defaultValue={foods.ingredients[2]} className="w-full peer rounded-lg border border-[#9fb5ca] bg-transparent px-4 py-2 text-gray-400 focus:outline-none"/>
                  </div>
          </div>
       </div>


{/* procedure */}
<div className="flex gap-3  p-3 justify-between">
                  <div className="relative w-full rounded-lg ">
                      <textarea
                      className="w-full peer rounded-lg border border-teal-600 bg-transparent px-4    text-[#1B8EF8] focus:outline-none"
                      rows={5}
                       name="procedure"
                      defaultValue={procedure}
                      />

                  </div>
          </div>

{/* feedback */}
          <div className="flex gap-3  p-3 justify-between">
                  <div className="relative w-full rounded-lg ">
                      <textarea
                      className="w-full peer rounded-lg border border-teal-600 bg-transparent px-4 text-[#1B8EF8] focus:outline-none"
                      rows={2}
                      defaultValue={feedback}
                       name="feedback"
                      />

                  </div>
          </div>
   
         <div className="p-3">
         <button type="submit" className=" rounded-lg text-xl w-full h-12 text-white bg-teal-700 overflow-hidden relative z-10 group hover:text-teal-900 duration-700">Update<span className="bg-teal-600 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-50 size-[3/4] rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-teal-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-100 size-72 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-teal-400 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-200 size-52 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-teal-300 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-300 size-36 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-teal-100 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-[400ms] size-28 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span></button>
         </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default UpdateForm