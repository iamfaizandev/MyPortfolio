import "./home.css";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Resume } from "../resume/resume";
export function Home() {
  return (
    <section className="container-fluid home-section">
      <div className="home_top">
        <div className="left_container">
          <div className="left_content">
            <div className="introTxt">
              <h2 className=" myName animate__animated animate__backInRight ">
                I'm
                <span className="my ms-2  text-white ">Md Faizan Ahmad,</span>
              </h2>
              <div className="myWork animate__animated animate__backInLeft">
                <span className="myJobTitle"> passionate Web Developer </span>,
                with a keen interest in exploring various aspects of web
                development. I enjoy learning and integrating new technologies,
                such as Next.js, to enhance my skills and deliver innovative
                solutions."
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-social animate__animated animate__fadeInUpBig">
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/mdfaizandahmad/"
            className="text-decoration-none text-white"
          >
            <LinkedInIcon fontSize="large" className="ms-2 icon" />
          </a>
          <a
            href="https://github.com/iamfaizandev"
            className="text-decoration-none text-white"
          >
            <GitHubIcon fontSize="large" className="ms-2 icon" />
          </a>
          <a
            href="https://wa.me/+917549692029"
            className="text-decoration-none text-white"
          >
            <WhatsAppIcon fontSize="large" className="ms-2 icon" />
          </a>
        </div>
        <Resume />
      </div>
      <div className="home_bottom">
        <div className="arrow-container">
          <Link to="/about">
            <KeyboardDoubleArrowDownOutlinedIcon
              fontSize="large"
              className="arrow "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
