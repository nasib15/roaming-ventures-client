import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
  const { id } = useParams();
  const spot = useLoaderData();
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
  console.log(spot);
  return <div className="mx-auto max-w-[90%] mt-6">details</div>;
};

export default ViewDetails;
