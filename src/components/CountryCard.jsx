/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
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
    <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
      <Link to="/countries/Bangladesh">
        <Card id="card-section">
          <CardHeader floated={false} className="min-h-56  max-h-56">
            <img
              src="https://source.unsplash.com/featured/?nature"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2 country-pic-header">
              Bangladesh
            </Typography>
            <Typography color="blue-gray" className="font-medium country-pic-description" textGradient>
              Bangladesh is a South Asian country known for its lush greenery,
              river deltas, and vibrant culture. It's densely populated and rich
              in history, with landmarks like the Sundarbans mangrove forest and
              the ancient city of Paharpur.
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
      </Link>
      <Link to="/countries/Malaysia">
        <Card id="card-section">
          <CardHeader floated={false} className="min-h-56 max-h-56"> 
            <img
              src="https://source.unsplash.com/featured/?nature"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2 country-pic-header">
              Malaysia
            </Typography>
            <Typography color="blue-gray" className="font-medium country-pic-description" textGradient>
              Malaysia is a Southeast Asian country known for its diverse
              culture and modern cities like Kuala Lumpur. It boasts a mix of
              Malay, Chinese, Indian, and indigenous influences, along with lush
              rainforests and iconic landmarks such as the Petronas Twin Towers.
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
      </Link>
      <Link to={"/countries/Vietnam"}>
        <Card id="card-section">
          <CardHeader floated={false} className="min-h-56 max-h-56">
            <img
              src="https://source.unsplash.com/featured/?nature"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2 country-pic-header">
              Vietnam
            </Typography>
            <Typography color="blue-gray" className="font-medium country-pic-description" textGradient>
              Vietnam is a Southeast Asian country famed for its stunning
              landscapes, rich history, and vibrant street life. It's known for
              its lush rice paddies, bustling cities like Hanoi and Ho Chi Minh
              City, and historic sites such as the Cu Chi Tunnels and the
              ancient town of Hoi An.
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
      </Link>
      <Link to={"/countries/Indonesia"}>
        <Card id="card-section">
          <CardHeader floated={false} className="min-h-56 max-h-56">
            <img
              src="https://source.unsplash.com/featured/?nature"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2 country-pic-header">
              Indonesia
            </Typography>
            <Typography color="blue-gray" className="font-medium country-pic-description" textGradient>
              Indonesia is an archipelago nation in Southeast Asia renowned for
              its diverse culture, stunning natural beauty, and abundant
              wildlife. It's home to vibrant cities like Jakarta, Bali's
              pristine beaches, and iconic landmarks such as Borobudur Temple.
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
      </Link>
      <Link to={"/countries/Thailand"}>
        <Card id="card-section">
          <CardHeader floated={false} className="min-h-56 max-h-56">
            <img
              src="https://source.unsplash.com/featured/?nature"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2 country-pic-header">
              Thailand
            </Typography>
            <Typography color="blue-gray" className="font-medium country-pic-description" textGradient>
              Thailand is a Southeast Asian country known for its rich culture,
              tropical beaches, and ornate temples. It's famous for stunning
              islands such as Phuket and Koh Samui, and delicious cuisine. The
              country's landscapes make it a popular destination for travelers.
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
      </Link>
      <Link to={"/countries/Cambodia"}>
        <Card id="card-section">
          <CardHeader floated={false} className="min-h-56 max-h-56">
            <img
              src="https://source.unsplash.com/featured/?nature"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2 country-pic-header">
              Cambodia
            </Typography>
            <Typography color="blue-gray" className="font-medium country-pic-description" textGradient>
              Cambodia is a Southeast Asian country celebrated for its ancient
              temples, including the majestic Angkor Wat. It boasts a rich
              history, diverse culture, and picturesque landscapes, with vibrant
              markets and the serene Tonle Sap lake adding to its charm.
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
      </Link>
    </div>
  );
};

export default CountryCard;
