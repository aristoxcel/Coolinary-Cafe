

function Headline({text, pera}) {
    return (
        <div className=' container px-6  mx-auto'>
            <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-4xl font-poet'>{text}</h1>
            <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 font-ubuntu'>{pera}</p>
        </div>
      )
}

export default Headline

