import { useContext } from "react"
import { AuthContext } from "../../Providers/AuthProvider"


function Form() {
    const {user} = useContext(AuthContext)

    const handleSubmitForm=()=>{

    }
  return (
    <div className="mt-72 lg:mt-[600px] py-10 px-4">
    <div className="w-4/5 flex md:flex-row flex-col justify-between gap-5 mx-auto">
      <div className="md:basis-1/3 px-5">
        <h1 className="text-2xl font-poet font-bold text-sky-900 text-center mb-6 ">Instructions for Add Data</h1>
        <ul className="text-base text-base-600 font-ubuntu ">
          <li>Clear and User-Friendly Interface: Design the add form with a clear and intuitive layout. Use easy-to-understand labels and instructions to guide users through the process.</li>
          <li>Required Fields: Determine which fields are essential for users to fill out and mark them as required. These might include fields such as Title, Description, Category, and Image.</li>
          <li>Title: Ask users to provide a title for their submission. This could be the name of the subcategory or a brief description.</li>
          <li>Description: Provide a text box where users can write a detailed description of the Ceramics and Pottery subcategory they are adding. Encourage them to include relevant information such as techniques used, materials, and any special features.</li>
          <li>Category: Include a dropdown menu or radio buttons for users to select the main category or subcategory to which their submission belongs. For example, categories could include Hand-built Pottery, Wheel-thrown Ceramics, Sculptural Ceramics, Raku Pottery, etc.</li>
          <li>Image Upload: Allow users to upload images of their Ceramics and Pottery subcategory. Provide clear instructions on accepted file formats and maximum file size. You may want to require at least one image to accompany each submission.</li>
        </ul>
      </div>

      <div className="md:basis-3/5 mx-auto text-center">
        <h1 className="text-2xl font-franklin font-bold text-sky-900 text-center mb-2">Add Data</h1>
        <form className="py-8" onSubmit={handleSubmitForm}>

                         {/* Adder name and email */}
   <div className="flex gap-3  p-3 justify-between">
                          <div className="relative w-full rounded-lg ">
                              <input
                              className="w-full peer bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
                              type="text"
                              defaultValue={user?.displayName}
                              disabled
                              name="adder_name"
                              />
                          </div>

                          <div className="relative w-full  rounded-lg">
                            <input
                            className="w-full peer  bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
                            type='email'
                            name='adder_email'
                            disabled
                            defaultValue={user?.email}
                            />
                        </div>
          </div>
          {/* Name and price */}
          <div className="flex gap-3  p-3 justify-between">
                  <div className="relative w-full rounded-lg ">
                      <input
                      className="w-full peer rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
                      type="text"
                      placeholder="Name of Food" 
                      name="food_name"
                      />

                  </div>

                  <div className="relative w-full  rounded-lg">
                      <select
                      className="w-full peer rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-gray-400 focus:outline-none"
                      type="text"
                      placeholder="" name="customize"
                      id="navigate_ui_input_33"
                      ><option disabled selected>Category of Food</option>
                      <option value={'International Cuisine'}>International Cuisine</option>
                      <option value={'Vegan Specialties'}>Vegan Specialties</option>
                      <option value={'Appetizers & Starters'}>Appetizers & Starters</option>
                      <option value={'Steaks & Grills'}>Steaks & Grills</option>
                      <option value={'Burgers & Fries'}>Burgers & Fries</option>
                      <option value={'Sandwiches & Wraps'}>Pizza & Sandwiches</option>
                      <option value={'Cake & Pastry'}>Cake & Pastry</option>
                      <option value={'Drinks & Juice'}>Drinks & Juice</option>
                      </select>
                  </div>
                 
          </div>


   {/* Image and Origin */}
   <div className="flex gap-3  p-3 justify-between">
                          <div className="relative w-full rounded-lg ">
                              <input
                              className="w-full peer rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
                              type="text"
                              placeholder="Image Url of Food" name="image"
                              />
                          </div>

                          <div className="relative w-full  rounded-lg">
                            <input
                            className="w-full peer rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
                            type="text"
                            placeholder="Food Origin" 
                            name="country"
                            />
                        </div>
          </div>


   {/* Price and quantity */}
   <div className="flex gap-3  p-3 justify-between">
                          <div className="relative w-full rounded-lg ">
                              <input
                              className="w-full peer rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
                              type="number"
                              placeholder="Price of Food $" name="price"
                              />
                          </div>

                          <div className="relative w-full  rounded-lg">
                            <input
                            className="w-full peer rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
                            type="number"
                            placeholder="Quantity " 
                            name="quantity"
                            />
                        </div>
          </div>



{/* Ingredients*/}
       <div className="rounded-lg border border-[#1B8EF8] bg-transparent mx-3">
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
                      className="w-full peer rounded-lg border border-[#1B8EF8] bg-transparent px-4    text-[#1B8EF8] focus:outline-none"
                      rows={5}
                      placeholder="Cooking Procedure" name="procedure"
                      />

                  </div>
          </div>

{/* feedback */}
          <div className="flex gap-3  p-3 justify-between">
                  <div className="relative w-full rounded-lg ">
                      <textarea
                      className="w-full peer rounded-lg border border-[#1B8EF8] bg-transparent px-4 text-[#1B8EF8] focus:outline-none"
                      rows={2}
                      placeholder="Feedback / Comment" name="feedback"
                      />

                  </div>
          </div>
   
         <div className="p-3">
         <button type="submit" className=" rounded-lg text-xl w-full h-12 text-white bg-sky-800 overflow-hidden relative z-10 group hover:text-sky-900 duration-700">Submit<span className="bg-sky-900 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-50 size-32 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-sky-800 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-100 size-28 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-sky-600 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-200 size-24 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-sky-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-300 size-20 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-sky-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-[400ms] size-16 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span></button>
         </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Form