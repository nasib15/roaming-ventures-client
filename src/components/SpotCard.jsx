/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SpotCard = ({ id, image, spot, cost, season, time, visitors }) => {
  return (
    <div>
      <div className="card bg-base-100 border">
        <figure className="px-10 pt-10">
          <img src={image} className="rounded-xl w-full h-60" />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-semibold">{spot}</h2>
          <div className="divider"></div>
          <div className="space-y-4">
            <div className="text-lg font-medium">
              <p className="font-bold opacity-80">
                Average Cost: <span className="font-extralight">{cost}$</span>
              </p>
            </div>
            <div className="text-lg font-medium">
              <p className="font-bold opacity-80">
                Total Visitors Per Year:{" "}
                <span className="font-extralight">{visitors}</span>
              </p>
            </div>
            <div className="text-lg font-medium">
              <p className="font-bold opacity-80">
                Travel Time:{" "}
                <span className="font-extralight">{time} Days</span>{" "}
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

export default SpotCard;
