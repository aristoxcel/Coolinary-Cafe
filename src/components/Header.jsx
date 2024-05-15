/* eslint-disable react/prop-types */

function Header({ image, text }) {
  return (
    <div>
      <div
        className="h-72 lg:h-[600px]  flex items-center justify-center w-full bg-no-repeat  bg-cover  absolute top-0 banner"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <h1 className="lg:text-7xl text-3xl md:text-4xl font-bold text-gray-300 underline">
          {text}
        </h1>
      </div>
    </div>
  );
}

export default Header;
