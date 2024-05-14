import { Link } from 'react-router-dom'

const Slide = ({ image, text , text1 }) => {
  return (
    <div
      className='w-full bg-center bg-cover min-h-[calc(100vh-1px)]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='absolute inset-0 bg-gray-900/50 flex justify-center items-center'>
        <div className='text-center p-6'>
          <h1 className='text-2xl text-base-300 font-normal  font-pacific  lg:text-5xl'>
            {text}
          </h1>
          <br />
          <h1 className='text-3xl font-medium font-poet text-white lg:text-7xl'>
            {text1}
          </h1>
          <br />
          
         <div className='mt-4 flex justify-center'> <Link to='/allFoods'>
            <button className="group  font-poet relative flex w-36 items-center rounded-lg border-2 border-teal-600 p-4 text-sky-500"><span>Explore All</span><span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-teal-600 duration-300 group-hover:w-5/6"><svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>
          </Link></div>
        </div>
      </div>
    </div>
  )
}

export default Slide
