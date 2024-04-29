/* eslint-disable react/no-unescaped-entities */
import toast from "react-hot-toast";

const AddTourist = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const tourists_spot_name = form.spot.value;
    const country_name = form.country.value;
    const location = form.location.value;
    const description = form.description.value;
    const average_cost = form.cost.value;
    const season = form.season.value;
    const travel_time = form.time.value;
    const total_visitors_per_year = form.visitors.value;
    const username = form.username.value;
    const email = form.email.value;

    const spotInfo = {
      image,
      tourists_spot_name,
      country_name,
      location,
      description,
      average_cost,
      season,
      travel_time,
      total_visitors_per_year,
      username,
      email,
    };

    fetch("http://localhost:3000/touristspots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(spotInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Spot information added successfully");
          form.reset();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="max-w-[90%] mx-auto mt-6">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Add Tourist Spots</h2>
        <p className="opacity-80 w-[80%] mx-auto ">
          Discover iconic destinations worldwide in our Tourist Spots section.
          Explore famous landmarks, hidden gems, and must-visit attractions.
          From breathtaking natural wonders to cultural hotspots, find
          inspiration for your next adventure here.
        </p>
      </div>
      {/* form section */}
      <div>
        <div className="hero min-h-[90vh]">
          <div className="flex justify-center items-center w-full flex-col lg:flex-row-reverse">
            <div className="mt-16 card shrink-0 min-w-[70%] shadow-2xl bg-base-100">
              <form className="p-10" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image URL</span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    placeholder="https://example.com/image.jpg"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="flex lg:flex-row space-y-2 lg:space-y-0  lg:gap-10 justify-between flex-col">
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text">Tourist Spot Name</span>
                    </label>
                    <input
                      type="text"
                      name="spot"
                      placeholder="Rangamati"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text">Country Name</span>
                    </label>
                    <input
                      type="text"
                      name="country"
                      placeholder="Bangladesh"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text">Location</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Southern Bangladesh"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Short Description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Description of the tourist spot"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="flex lg:flex-row space-y-2 lg:space-y-0  lg:gap-10 justify-between flex-col">
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text">Average Cost</span>
                    </label>
                    <input
                      type="number"
                      name="cost"
                      placeholder="100"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text">Seasonality</span>
                    </label>
                    <input
                      type="text"
                      name="season"
                      placeholder="Winter"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text">Travel Time (Days)</span>
                    </label>
                    <input
                      type="number"
                      name="time"
                      placeholder="10"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text">
                        Total Visitors (Per Year)
                      </span>
                    </label>
                    <input
                      type="number"
                      name="visitors"
                      placeholder="10000"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="flex lg:flex-row space-y-2 lg:space-y-0  lg:gap-10 justify-between flex-col">
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text">User Name</span>
                    </label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Mr. X"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text">User Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="company@gmail.com"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn bg-[#e55039] text-white">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTourist;
