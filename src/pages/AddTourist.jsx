const AddTourist = () => {
  return (
    <div className="max-w-[90%] mx-auto mt-6">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Add Tourist Spot</h2>
        <p className="opacity-80 w-[80%] mx-auto ">
          Share your favorite hidden gems and iconic landmarks with fellow
          travelers by adding new tourist spots to our ever-growing database.
          Whether it's a picturesque viewpoint, a charming cafe, or a historic
          site, your contributions help enrich the travel experiences of others.
        </p>
      </div>
      {/* form section */}
      <div>
        <div className="hero min-h-[90vh]">
          <div className="flex justify-center items-center w-full flex-col lg:flex-row-reverse">
            <div className="mt-6 card shrink-0 min-w-[70%] shadow-2xl bg-base-100">
              <form className="p-10">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="https://example.com/image.jpg"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="flex lg:flex-row gap-10 justify-between flex-col">
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text">Tourist Spot Name</span>
                    </label>
                    <input
                      type="text"
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
                    placeholder="Description of the tourist spot"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="flex lg:flex-row gap-10 justify-between flex-col">
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text">Average Cost</span>
                    </label>
                    <input
                      type="text"
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
                      type="text"
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
                      type="text"
                      placeholder="10000"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="flex lg:flex-row gap-10 justify-between flex-col">
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text">User Name</span>
                    </label>
                    <input
                      type="text"
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
                      placeholder="company@gmail.com"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#e55039] text-white">Add</button>
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
