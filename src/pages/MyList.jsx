import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const MyList = () => {
  const spots = useLoaderData();
  const { user } = useContext(AuthContext);
  const useremail = user.email;
  const filteredSpots = spots.filter((spot) => spot.email === useremail);

  return (
    <div className="mx-auto max-w-[90%]">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">My Lists</h2>
        <p className="opacity-80 w-[80%] mx-auto ">
          Explore your curated list of added tourist spots, handpicked for
          unforgettable experiences. Discover hidden gems and iconic landmarks,
          each offering a unique adventure waiting to be explored.
        </p>
      </div>
      <div className="overflow-x-auto px-16 py-4 mt-6">
        <table className="max-w-[70%] mx-auto table table-xl">
          <thead>
            <tr>
              <th>Spot Name</th>
              <th>Average Cost</th>
              <th>Travel Time</th>
              <th>Season</th>
            </tr>
          </thead>
          <tbody>
            {filteredSpots.map((spot) => (
              <tr key={spot._id}>
                <td>{spot.tourists_spot_name}</td>
                <td>{spot.average_cost}</td>
                <td>{spot.travel_time}</td>
                <td>{spot.season}</td>
                <td>
                  <Link to={`/updatedetails/${spot._id}`}>
                    <button>
                      <MdEdit />
                    </button>
                  </Link>
                </td>

                <td>
                  <button>
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
