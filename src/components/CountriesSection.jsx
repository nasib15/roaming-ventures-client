/* eslint-disable react/no-unescaped-entities */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const CountriesSection = () => {
  return (
    <div className="mx-auto max-w-[90%] lg:my-24">
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
      <div className="grid grid-cols-3 mt-10">
        <Card className="w-96">
          <CardHeader floated={false} className="h-80">
            <img
              src="https://source.unsplash.com/featured/?nature"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Malaysia
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              Discover the vibrant tapestry of Bangladesh, a land of contrasts
              where bustling cities meet tranquil rural landscapes. From the
              lush greenery of the Sundarbans to the vibrant chaos of Dhaka,
              Bangladesh offers a rich cultural heritage, delicious cuisine, and
              warm hospitality.
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                color="blue"
                textGradient
              >
                <i className="fab fa-facebook" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="light-blue"
                textGradient
              >
                <i className="fab fa-twitter" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                color="purple"
                textGradient
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CountriesSection;
