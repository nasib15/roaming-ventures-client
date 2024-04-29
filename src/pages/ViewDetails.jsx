import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const spot = useLoaderData();
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
  } = spot;
  return (
    <div className="mx-auto max-w-[90%] mt-6">
      <h2 className="text-center font-bold text-3xl">Details</h2>
      <div className="flex gap-10 mt-10 shadow-lg p-10">
        <div className="max-w-[50%] ">
          <img className="rounded-xl h-full object-cover" src={image} alt="" />
        </div>
        <div>
          <h2 className="font-bold text-2xl">{tourists_spot_name}</h2>
          <p className="text-lg mt-5">Location: {location}</p>
          <p className="text-lg mt-5">{country_name}</p>
          <p className="text-lg mt-5">Short Description: </p>
          <p className="text-lg mt-2">{description}</p>
          <div className="flex gap-4 justify-between">
            <p className="text-lg mt-5">Travel Time: {travel_time} Days</p>
          </div>
          <div className="flex gap-4 justify-between">
            <p className="text-lg mt-5">Season: {season}</p>
            <p className="text-lg mt-5">Average Cost: {average_cost} Taka</p>
            <p className="text-lg mt-5">
              Total Visitors Per Year: {total_visitors_per_year}
            </p>
          </div>
          <p className="text-lg mt-5">Contact Email: {email}</p>
          <p className="text-lg mt-5">Added By: {username}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
