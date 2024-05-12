import { useContext, useEffect, useState } from "react"
import Card from "../../components/Card"
import Header from "../../components/Header"
import { AuthContext } from "../../Providers/AuthProvider"
import axios from "axios"


function AllFoods() {
  const {user}=useContext(AuthContext)
const [foods, setFoods]= useState([])
const [filter, setFilter]= useState('')
const [sort, setSort]= useState('')
const [search, setSearch] = useState('')
const [searchText, setSearchText] = useState('')

  useEffect(()=>{
    const getData=async()=>{
const {data}= await axios(`${import.meta.env.VITE_API_URL}/allfood?filter=${filter}&sort=${sort}&search=${search}`)
setFoods(data)
    }
    getData()
  },[filter, sort, search])


const handleSearch =(e)=>{
e.preventDefault()
setSearch(searchText)
}
  console.log(search)

  const handleClear =()=>{
    setFilter('')
    setSort('')
    setSearchText('')
    setSearch('')
  }


  return (
    <div>
      <Header image={'banner4.jpg'}  text={"All Food Items"}></Header>
      <div className="mt-52 lg:mt-[550px]  px-4 md:px-0 lg:px-4">
      <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
      <div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
          <div>
            <select
          onChange={e=>{
            setFilter(e.target.value)
          }}
              value={filter}
              name='category'
              id='category'
              className='border p-4 rounded-md border-teal-600 text-teal-800 font-poet font-medium'
            >
              <option value='' disabled selected className="bg-gray-200" >Filter By Category of Food</option>
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

          <form onSubmit={handleSearch}>
            <div className='flex p-1 overflow-hidden border border-teal-600 rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-teal-400 focus-within:ring-teal-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-teal-800 font-poet bg-white outline-none focus:placeholder-transparent'
                type='text'
                onChange={e=>{
                  setSearchText(e.target.value)

                }}
                value={searchText}
                name='search'
                placeholder='Food Item Name'
                aria-label='Food Item Name'
              />
              <button className="group relative z-10 py-2 w-32 overflow-hidden  tracking-wider rounded-md  bg-teal-700 text-xl text-white"><span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-teal-100 transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span><span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-teal-600 transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span><span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-teal-900 transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span><span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">Search</span>Search</button>
            </div>
          </form>
          <div>
            <select
              onChange={e=>{
                setSort(e.target.value)

              }}
              value={sort}

              name='sort'
              id='sort'
              className='border p-4 rounded-md  border-teal-600 text-teal-800 font-poet font-medium'
            >
              <option value='' disabled selected className="bg-gray-300 ">Sort By Price</option>
              <option value='des'>High to Low</option>
              <option value='asc'>Low to High</option>
            </select>
          </div>
          <button onClick={handleClear} className='btn font-normal border-teal-600 px-4 py-2 text-lg text-teal-800 font-poet duration-200 hover:bg-teal-700 hover:text-white'>
            Clear All
          </button>
        </div>
        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 '>
   {
    foods.map(food=><Card key={food._id} food={food}></Card>)
   }
        </div>
      </div>

      {/* Pagination Section */}
      <div className='flex justify-center mt-12'>
        {/* Previous Button */}
        <button
          // disabled={currentPage === 1}
          // onClick={() => handlePaginationButton(currentPage - 1)}
          className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white'
        >
          <div className='flex items-center -mx-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 mx-1 rtl:-scale-x-100'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M7 16l-4-4m0 0l4-4m-4 4h18'
              />
            </svg>

            <span className='mx-1'>previous</span>
          </div>
        </button>
        {/* Numbers */}
        {/* {pages.map(btnNum => (
          <button
            // onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            // className={`hidden ${
            //   currentPage === btnNum ? 'bg-blue-500 text-white' : ''
            // } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
          >
            {btnNum}
          </button>
        ))} */}
        {/* Next Button */}
        <button
          // disabled={currentPage === numberOfPages}
          // onClick={() => handlePaginationButton(currentPage + 1)}
          className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'
        >
          <div className='flex items-center -mx-1'>
            <span className='mx-1'>Next</span>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 mx-1 rtl:-scale-x-100'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </div>
        </button>
      </div>
    </div>

      </div>
  </div>
  )
}

export default AllFoods