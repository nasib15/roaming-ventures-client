import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const ViewDetails = () => {
  const { id } = useParams();
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://b9a10-server-side-knh-nehal.vercel.app/touristspots/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  const {
    image,
    average_cost,
    country_name,
    description,
    email,
    location,
    season,
    total_visitors_per_year,
    tourists_spot_name,
    travel_time,
    username,
  } = spots;
  return (
    <div className="mx-auto max-w-[90%] mt-6">
      <h2 className="text-center font-bold text-3xl">Details</h2>
      <div className="flex lg:flex-row flex-col gap-10 mt-10 shadow-lg p-10">
        <div className="lg:min-w-[40%] min-h-[100%]">
          <img
            className=" w-full rounded-xl lg:min-h-full max-h-96 object-cover"
            src={image}
            alt=""
          />
        </div>
        <div>
          <h2 className="font-bold text-2xl">{tourists_spot_name}</h2>
          <p className="text-lg font-bold mt-5">
            Location: <span className="font-normal">{location}</span>
          </p>
          <p className="text-2xl font-bold text-[#e55039] mt-5">
            {country_name}
          </p>
          <div className="divider"></div>
          <p className="text-lg font-bold">Short Description: </p>

          <p className="text-lg mt-2">{description}</p>
          <div className="divider"></div>

          <div className="flex lg:flex-row flex-col gap-4 justify-between mt-5">
            <p className="text-lg font-bold">
              Season: <span className="font-normal">{season}</span>
            </p>
            <p className="text-lg font-bold">
              Average Cost: <span className="font-normal">{average_cost}$</span>
            </p>
            <p className="text-lg font-bold">
              Total Visitors Per Year:{" "}
              <span className="font-normal">{total_visitors_per_year}</span>
            </p>
          </div>
          <div className="lg:mt-5 mt-4">
            <p className="text-lg font-bold">
              Travel Time:{" "}
              <span className="font-normal">{travel_time} Days</span>
            </p>
          </div>
          <div className="divider"></div>
          <div className="flex lg:flex-row flex-col gap-4 justify-between">
            <p className="text-lg font-bold">
              Added By: <span className="font-normal">{username}</span>
            </p>
            <p className="text-lg font-bold">
              Contact Email: <span className="font-normal">{email}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
