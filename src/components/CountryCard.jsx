import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const CountryCard = () => {
  return (
    <div>
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
            where bustling cities meet tranquil rural landscapes. From the lush
            greenery of the Sundarbans to the vibrant chaos of Dhaka, Bangladesh
            offers a rich cultural heritage, delicious cuisine, and warm
            hospitality.
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
  );
};

export default CountryCard;
