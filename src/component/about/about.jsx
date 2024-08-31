import "./about.css";
import userImg from "../../assets/img4.jpg";
import { Resume } from "../resume/resume";
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function About() {
  // State to manage loading status
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  // useEffect to simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="about about-section container-fluid">
      <div className="section_title">
        <h2>About Me</h2>
      </div>
      <div className="about_container">
        <div className="Portfolio_Img animate__animated animate__backInLeft">
          {isLoading ? (
            <Skeleton
              variant="rectangular"
              sx={{ bgcolor: "grey.500" }}
              height={500}
              width="70%"
              className="skelton"
            />
          ) : (
            <img
              src={userImg}
              alt="Profile"
              className="userImg-avtar animate__animated animate__fadeIn"
            />
          )}
        </div>
        <div className="about_me-container">
          <div className="about_me animate__animated animate__fadeInUpBig">
            "I’m Md Faizan Ahmad, a passionate web developer skilled in
            React.js, HTML, CSS, JavaScript, Bootstrap, and Material-UI. With
            experience in Firebase, MongoDB, and API integration, I thrive in
            collaborative settings and enjoy building innovative web solutions.
            As a fresher, I bring a strong eagerness to learn and a commitment
            to creating impactful user experiences. I’m excited to grow my
            skills and contribute to dynamic projects."
          </div>
          <div className="resume_btn animate__animated animate__fadeInDownBig">
            <Resume />
          </div>
          <div className="PagenextBtn">
            <button
              className="btn btn-danger "
              onClick={() => navigate("/education")}
            >
              <span className="h4">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
