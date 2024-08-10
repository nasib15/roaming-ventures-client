/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SpotCard from "./SpotCard";
import Loading from "./Loading";

/* eslint-disable react/no-unescaped-entities */
const TouristsSpots = () => {
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://b9a10-server-side-knh-nehal.vercel.app/touristspots`)
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div id="spots" className="mx-auto max-w-[90%] my-12 lg:my-24">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Tourists Spots</h2>
        <p className="opacity-80 w-[80%] mx-auto">
          Discover iconic landmarks, hidden treasures, and must-see destinations
          in our Tourist Spots section. Explore the world's most captivating
          attractions and plan your next adventure with ease.
        </p>
      </div>
      {/* Card section */}
      <div className=" mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {spots.slice(0, 6).map((spot) => (
          <SpotCard
            key={spot._id}
            id={spot._id}
            image={spot.image}
            spot={spot.tourists_spot_name}
            cost={spot.average_cost}
            season={spot.season}
            time={spot.travel_time}
            visitors={spot.total_visitors_per_year}
          />
        ))}
      </div>
    </div>
  );
};

export default TouristsSpots;
