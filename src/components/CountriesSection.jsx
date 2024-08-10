/* eslint-disable react/no-unescaped-entities */
import CountryCard from "./CountryCard";

const CountriesSection = () => {
  return (
    <div className="mx-auto max-w-[90%] my-12 lg:my-24">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Countries</h2>
        <p className="opacity-80 w-[80%] mx-auto">
          Explore our diverse collection of countries and uncover their unique
          cultures, landscapes, and attractions. From bustling cities to serene
          natural wonders, each country offers a distinct experience waiting to
          be discovered.
        </p>
      </div>
      {/* Card section */}
      <div className="mt-16 ">
        <CountryCard></CountryCard>
      </div>
    </div>
  );
};

export default CountriesSection;
