/* eslint-disable react/no-unescaped-entities */
import { useLoaderData } from "react-router-dom";
import SpotCard from "../components/SpotCard";

const AllTourist = () => {
  const spots = useLoaderData();

  return (
    <div className="mx-auto max-w-[90%] mt-6">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">All Tourist Spots</h2>
        <p className="opacity-80 w-[80%] mx-auto ">
          Share your favorite hidden gems and iconic landmarks with fellow
          travelers by adding new tourist spots to our ever-growing database.
          Whether it's a picturesque viewpoint, a charming cafe, or a historic
          site, your contributions help enrich the travel experiences of others.
        </p>
      </div>
      <div className=" mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {spots.map((spot) => (
          <SpotCard
            key={spot._id}
            image={spot.image}
            spot={spot.tourists_spot_name}
            
            cost={spot.average_cost}
            season={spot.season}
            time={spot.travel_time}
            visitors={spot.tota_visitors_per_year}
          />
        ))}
      </div>
    </div>
  );
};

export default AllTourist;
