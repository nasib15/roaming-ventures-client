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
          <CardHeader floated={false} className="h-56">
            <img
              src="https://img.freepik.com/free-photo/dugout-river_1308-41416.jpg?t=st=1714498310~exp=1714501910~hmac=f19ca9085f919b5ca2462a388403c5bbedfd493127cbe0d7d8ff103fec33cef4&w=1380"
              alt="profile-picture"
              className="object-cover w-full h-full"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 country-pic-header"
            >
              Bangladesh
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium country-pic-description"
              textGradient
            >
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
          <CardHeader floated={false} className="h-56">
            <img
              src="https://img.freepik.com/free-photo/beautiful-landscape-ai-generated_268835-7362.jpg?t=st=1714498541~exp=1714502141~hmac=73b3b87a07c3175c75ef848d399c2b810987a86aea8db1b344ed5ee4be22e7c7&w=1380"
              alt="profile-picture"
              className="object-cover w-full h-full"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 country-pic-header"
            >
              Malaysia
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium country-pic-description"
              textGradient
            >
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
          <CardHeader floated={false} className="h-56">
            <img
              src="https://img.freepik.com/free-photo/water-tourism-river-lijiang-bamboo_1417-418.jpg?t=st=1714498585~exp=1714502185~hmac=ab757ad17312392493a111da51907cd752ef2342e13d05de623a5d7cbbec37ae&w=1380"
              alt="profile-picture"
              className="object-cover w-full h-full"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 country-pic-header"
            >
              Vietnam
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium country-pic-description"
              textGradient
            >
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
          <CardHeader floated={false} className="h-56">
            <img
              src="https://img.freepik.com/free-photo/rock-ocean-landscape_1296-486.jpg?t=st=1714498628~exp=1714502228~hmac=0db31a9cde55d617252a176d3bde9278444d7c242cd0cd9e28deaf73e0f1bb43&w=1380"
              alt="profile-picture"
              className="object-cover w-full h-full"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 country-pic-header"
            >
              Indonesia
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium country-pic-description"
              textGradient
            >
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
          <CardHeader floated={false} className="h-56">
            <img
              src="https://img.freepik.com/free-photo/boat-river-surrounded-by-cliffs-covered-greens_181624-43826.jpg?t=st=1714498659~exp=1714502259~hmac=70b3eef1763dc050462f7095925150a53f1eeac91fa243b10240ed22288fa008&w=740"
              alt="profile-picture"
              className="object-cover w-full h-full"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 country-pic-header"
            >
              Thailand
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium country-pic-description"
              textGradient
            >
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
          <CardHeader floated={false} className="h-56">
            <img
              src="https://img.freepik.com/free-photo/samet-nangshe-viewpoint-sunrise-phang-nga-thailand_335224-867.jpg?t=st=1714498677~exp=1714502277~hmac=b64d60e7c27a4c19ffc38682508c4daf0843c9a06a351e5fca8d3d06b0535430&w=1380"
              alt="profile-picture"
              className="object-cover w-full h-full"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 country-pic-header"
            >
              Cambodia
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium country-pic-description"
              textGradient
            >
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
