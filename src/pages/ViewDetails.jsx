import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
  const { id } = useParams();
  const spots = useLoaderData();
  const spot = spots.find((spot) => spot._id === id);
  const {
    image,
    average_cost,
    country_name,
    description,
    email,
    location,
    season,
    tota_visitors_per_year,
    tourists_spot_name,
    travel_time,
    username,
  } = spot;
  return <div className="mx-auto max-w-[90%] mt-6">details</div>;
};

export default ViewDetails;
