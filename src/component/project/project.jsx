import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./project.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

export function Project() {
  const [projectCard, setProjectCard] = useState([
    {
      title: "",
      image: "",
      description: "",
      liveUrl: "",
      codeUrl: "",
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("projects.json")
      .then((res) => {
        setProjectCard(res.data);
      })
      .catch((reason) => {
        console.log(reason.message);
      });
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const settings = {
    touchMove: true,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards to show
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container-fluid">
      <section className="project container-fluid">
        <div className="project_container">
          <Slider
            {...settings}
            className="cards animate__animated animate__fadeInRightBig"
          >
            {projectCard.map((cards, id) => (
              <Card className="mui_card" key={id}>
                {isLoading ? (
                  <Skeleton className="skeleton" width={600} height={300} />
                ) : (
                  <CardMedia
                    component="img"
                    className="card_img"
                    image={cards.image}
                    title={cards.title}
                  />
                )}
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    className="text-primary text-center"
                    component="div"
                  >
                    {cards.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="text-center"
                  >
                    {cards.description}
                  </Typography>
                </CardContent>
                <CardActions className="d-flex align-item-center justify-content-center">
                  <Button
                    size="medium"
                    color="primary"
                    variant="outlined"
                    href={cards.liveUrl}
                    target="_blank"
                  >
                    Live
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="success"
                    href={cards.codeUrl}
                  >
                    <GitHubIcon />
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Slider>
        </div>
        <div className="PagenextBtn">
          <button className="btn btn-danger  ">
            <Link to="/contact" className="text-decoration-none h4">
              Next
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
}
