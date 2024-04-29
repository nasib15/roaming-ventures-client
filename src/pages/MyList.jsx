import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";

const MyList = () => {
  const spots = useLoaderData();
  const { user } = useContext(AuthContext);
  const useremail = user.email;
  const filteredSpots = spots.filter((spot) => spot.email === useremail);

  // SweetAlert2
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4a69bd",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/touristspots/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              Swal.fire(
                "Deleted!",
                "Your spot information has been deleted.",
                "success"
              );
            }
          });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Cancelled",
          text: "Your spot information is safe :)",
          icon: "error",
          confirmButtonColor: "#4a69bd",
        });
      }
    });
  };

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
                  <button onClick={() => handleDelete(spot._id)}>
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
