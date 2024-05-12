import { useContext } from "react"
import { AuthContext } from "../../Providers/AuthProvider"
import { useNavigate } from "react-router-dom"
import toast from 'react-hot-toast'
import axios from 'axios'


function Form() {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmitForm=async(e)=>{
      e.preventDefault()
    const form = e.target
    const food_name = form.food_name.value
    const cooker_email = form.cooker_email .value
    const cooker_name = form.cooker_name.value
    const cooker_img = user?.photoURL
    const order_time = new Date()
    const category = form.category.value
    const price = parseFloat(form.price.value)
    const image = form.image.value
    const country = form.country.value
    const quantity = parseInt(form.quantity.value)
    const item1 = form.item1.value
    const item2 = form.item2.value
    const item3 = form.item3.value
    const procedure = form.procedure.value
    const feedback = form.feedback.value


    const FoodData = {
      food_name,
      cooker_email,
      cooker_name,
      cooker_img,
      order_time,
      category,
      price,
      image,
      country,
      quantity,
      ingredients:[
        item1, item2, item3
      ],
      procedure,
      feedback,
      count: 0,
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/food`,
        FoodData
      )
      console.log(data)
      toast.success('Job Data Updated Successfully!')
      navigate('/about')
    } catch (err) {
      console.log(err)
    }

    console.table(FoodData)
    }
  return (
    <div className="mt-52 lg:mt-[550px] py-10 px-4 md:px-0 lg:px-4">
    <div className="w-4/5 flex md:flex-row flex-col justify-between gap-5 md:gap-2 lg:gap-5 mx-auto">
      <div className="md:basis-1/3 px-5">
        <h1 className="text-2xl font-poet font-bold text-sky-900 text-left mb-6 ">Instructions for Adding Data</h1>
        <ul className="text-base text-teal-900 font-ubuntu opacity-70 pl-4">
          <li> Write the Name of Food Clearly</li>
          <li> All *sign field must required</li>
          <li> Please give clear and decorated Image of Food</li>
          <li> Give your selling amount/Pcs of food item</li>
          <li> Give a short review of your food tasty</li>
          <li> Give ingredients name and procedure</li>
        </ul>
      </div>

      <div className="md:basis-3/5 mx-auto text-center">
        <h1 className="text-2xl font-poet font-bold text-sky-900 text-center mb-2">Add Your Food</h1>
        <form className="py-8" onSubmit={handleSubmitForm}>

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
                      placeholder="Name of Food *" 
                      name="food_name"
                      required
                      />

                  </div>

                  <div className="relative w-full  rounded-lg">
                      <select
                      className="w-full peer rounded-lg border border-teal-600 bg-transparent px-4 py-2 text-gray-400 focus:outline-none"
                      type="text"
                      placeholder="" name="category"
                      id="navigate_ui_input_33"
                      required
                      ><option disabled selected>Category of Food *</option>
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
                              placeholder="Image Url of Food *" name="image"
                              required
                              />
                          </div>

                          <div className="relative w-full  rounded-lg">
                            <input
                            className="w-full peer rounded-lg border border-teal-600 bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
                            type="text"
                            placeholder="Food Origin *" 
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
                              placeholder="Price of Food $ *" name="price"
                              required
                              />
                          </div>

                          <div className="relative w-full  rounded-lg">
                            <input
                            className="w-full peer rounded-lg border border-teal-600 bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
                            type="number"
                            placeholder="Quantity *" 
                            name="quantity"
                            required
                            />
                        </div>
          </div>



{/* Ingredients*/}
       <div className="rounded-lg border border-teal-600 bg-transparent mx-3">
        <h1 className="text-left text-gray-400 p-3">Ingredients:  [Write essential three items name in three box]</h1>
       <div className="flex gap-2  p-3 justify-between">
                  <div className="relative w-full rounded-lg ">
                   <input type="text" name="item1" placeholder="Ingredients" className="w-full peer rounded-lg border border-[#9fb5ca] bg-transparent px-4 py-2 text-gray-400 focus:outline-none"/>
                  </div>
                  <div className="relative w-full rounded-lg ">
                   <input type="text" name="item2" placeholder="Ingredients" className="w-full peer rounded-lg border border-[#9fb5ca] bg-transparent px-4 py-2 text-gray-400 focus:outline-none"/>
                  </div>

                  <div className="relative w-full rounded-lg ">
                   <input type="text" name="item3" placeholder="Ingredients" className="w-full peer rounded-lg border border-[#9fb5ca] bg-transparent px-4 py-2 text-gray-400 focus:outline-none"/>
                  </div>
          </div>
       </div>


{/* procedure */}
<div className="flex gap-3  p-3 justify-between">
                  <div className="relative w-full rounded-lg ">
                      <textarea
                      className="w-full peer rounded-lg border border-teal-600 bg-transparent px-4    text-[#1B8EF8] focus:outline-none"
                      rows={5}
                      placeholder="Cooking Procedure" name="procedure"
                      />

                  </div>
          </div>

{/* feedback */}
          <div className="flex gap-3  p-3 justify-between">
                  <div className="relative w-full rounded-lg ">
                      <textarea
                      className="w-full peer rounded-lg border border-teal-600 bg-transparent px-4 text-[#1B8EF8] focus:outline-none"
                      rows={2}
                      placeholder="Feedback / Comment" name="feedback"
                      />

                  </div>
          </div>
   
         <div className="p-3">
         <button type="submit" className=" rounded-lg text-xl w-full h-12 text-white bg-teal-700 overflow-hidden relative z-10 group hover:text-teal-900 duration-700">Submit<span className="bg-teal-600 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-50 size-[3/4] rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-teal-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-100 size-72 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-teal-400 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-200 size-52 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-teal-300 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-300 size-36 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-teal-100 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-[400ms] size-28 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span></button>
         </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Form