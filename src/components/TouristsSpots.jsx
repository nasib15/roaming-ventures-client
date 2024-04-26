import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const TouristsSpots = () => {
  return (
    <div className="mx-auto max-w-[90%] lg:my-24">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Tourists Spots</h2>
        <p className="opacity-80 w-[80%] mx-auto">
          Discover iconic landmarks, hidden treasures, and must-see destinations
          in our Tourist Spots section. Explore the world's most captivating
          attractions and plan your next adventure with ease.
        </p>
      </div>
      {/* Card section */}
      <div className="grid grid-cols-3 mt-10">
        {/* Card 1 */}
        <div className="flex flex-col items-center justify-center p-4 space-y-2 relative ">
          <img
            src="https://source.unsplash.com/featured/?nature"
            alt="nature"
            className="object-cover w-full h-96 bg-black/55 rounded-xl"
          />
          <div className="flex">
            <button className="bg-[#e55039] text-white border-none absolute bottom-24 left-24 rounded-full px-4 py-1 m-auto">
              Price
            </button>
            <Link
              to={`/details/`}
              className="bg-[#4a69bd] text-white border-none absolute bottom-24 rounded-full px-4 py-1 m-auto"
            >
              View Details
            </Link>
          </div>
          <h2 className="absolute bottom-10 m-auto text-white text-2xl">
            Bangladesh
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TouristsSpots;
