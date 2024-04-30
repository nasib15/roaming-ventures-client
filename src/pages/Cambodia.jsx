import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import CountrySpotCard from "../components/CountrySpotCard";

const Cambodia = () => {
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://b9a10-server-side-knh-nehal.vercel.app/touristspots")
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
        setLoading(false);
      });
  }, []);

  const filterSpots = spots.filter(
    (spot) => spot.country_name === "Cambodia"
  );

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-[90%] mx-auto mt-6">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Cambodia Tourists Spots</h2>
      </div>
      <div className=" mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {filterSpots.map((spot) => (
          <CountrySpotCard
            key={spot._id}
            id={spot._id}
            country={spot.country_name}
            image={spot.image}
            location={spot.location}
            description={spot.description}
            spot={spot.tourists_spot_name}
            cost={spot.average_cost}
            season={spot.season}
          />
        ))}
      </div>
    </div>
  );
};

export default Cambodia;
