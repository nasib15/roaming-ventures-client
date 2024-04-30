/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CountrySpotCard = ({
  id,
  country,
  image,
  location,
  spot,
  cost,
  season,
  description,
}) => {
  return (
    <div>
      <div className="card bg-base-100 border">
        <figure className="px-10 pt-10">
          <img src={image} className="rounded-xl w-full h-60" />
        </figure>
        <div className="card-body">
          <h2 className="text-3xl font-semibold">{spot}</h2>
          <p className="mt-2 text-lg font-medium">{country}</p>
          <p className="mt-2 text-lg font-medium">{location}</p>
          <div className="divider"></div>
          <div>
            <h3 className="text-xl font-semibold">Short Description:</h3>
            <p className="opacity-80 mt-2">{description}</p>
          </div>
          <div className="divider"></div>
          <div className="space-y-4">
            <div className="text-lg font-medium">
              <p className="font-bold opacity-80">
                Average Cost: <span className="font-extralight">{cost}$</span>
              </p>
            </div>
            <div className="text-lg font-medium">
              <p className="font-bold opacity-80">
                Seasonality: <span className="font-extralight">{season}</span>
              </p>
            </div>
          </div>
          <div className="card-actions mt-4">
            <Link
              to={`/details/${id}`}
              className="btn bg-[#e55039] hover:bg-[#b71510] text-white rounded-3xl px-7 font-semibold text-base border-none"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountrySpotCard;
