/* eslint-disable react/no-unescaped-entities */
// import {
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
//   Button,
// } from "@material-tailwind/react";
import SpotCard from "../components/SpotCard";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const AllTourist = () => {
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://b9a10-server-side-knh-nehal.vercel.app/touristspots")
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  const handleSort = () => {
    const sortedSpots = [...spots].sort(
      (a, b) => a.average_cost - b.average_cost
    );
    setSpots(sortedSpots);
  };

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
      <div className="flex justify-center mt-6">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-[#e55039] hover:bg-[#b71510] text-white m-1"
          >
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            onClick={handleSort}
          >
            <li>
              <a>Average Cost</a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {spots.map((spot) => (
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

export default AllTourist;
