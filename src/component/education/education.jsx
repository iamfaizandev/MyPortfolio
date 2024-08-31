import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HTMLIMG from "../../assets/html.png";
import CSSIMG from "../../assets/css.png";
import JSIMG from "../../assets/js.png";
import BoostrapIMG from "../../assets/boostrap.png";
import ReactjsIMG from "../../assets/reactjs.png";
import ReactjsMui from "../../assets/mui.png";
import FireBaseIMG from "../../assets/firebase.png";
import DataBaseIMG from "../../assets/mongodb.png";
import APIIMG from "../../assets/api.png";
import GitIMG from "../../assets/github.png";

import "./education.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export function Education() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [educationList, setEducationList] = useState([
    { educationType: "", Year: "" },
  ]);
  const [kyplist, setkypList] = useState([{ educationType: "" }]);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    axios
      .get("education.json")
      .then((res) => {
        setEducationList(res.data);
      })
      .catch((reason) => {
        console.log(reason.message);
      })
      .finally();

    axios
      .get("kyp.json")
      .then((res) => {
        setkypList(res.data);
      })
      .catch((reason) => {
        console.log(reason.message);
      })
      .finally();
  }, []);
  return (
    <section className="education-section animate__animated animate__slideInUp">
      {/* <div className="section_title">Education</div> */}
      <div className="education">
        <div className="education_container">
          <Box className="education_box">
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
                className="bg-dark-transparent"
              >
                <Tab label="Education" {...a11yProps(0)} />
                <Tab label="Achievement" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} dir={theme.direction}>
              <div className="education_list">
                {educationList.map((list) => (
                  <ul className="education_list" key={list.Year}>
                    <li key={list.educationType}>
                      <span>[{list.Year}]</span> {list.educationType}
                    </li>
                  </ul>
                ))}
              </div>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <div className="kyp_list">
                {kyplist.map((kyp) => (
                  <ul key={kyp.educationType}>
                    <li key={kyp.educationType}>{kyp.educationType}</li>
                  </ul>
                ))}
              </div>
            </TabPanel>
          </Box>
        </div>
        <div className="skills_container">
          <div className="skill-box">
            <div className="skills_title">
              <h2 className="h4">Technologies</h2>
            </div>
            <div className="skills_content">
              <div className="first-row">
                <img
                  src={HTMLIMG}
                  alt="html"
                  className="animate__animated animate__backInUp"
                />
                <img
                  src={CSSIMG}
                  alt="css"
                  className="animate__animated animate__backInLeft"
                />
                <img
                  src={JSIMG}
                  alt="js"
                  className="animate__animated animate__backInDown"
                />
                <img
                  src={ReactjsIMG}
                  alt="reactjs"
                  className="animate__animated animate__backInRight"
                />
                <img
                  src={ReactjsMui}
                  alt="reactjsMui"
                  className="animate__animated animate__backInRight"
                />
              </div>
              <div className="middle-text">
                {/* <small className="textSmall">
                  Have Knowladge on BackEnd Technologies
                </small> */}
              </div>
              <div className="second-row">
                <img
                  src={BoostrapIMG}
                  alt="bootstrap"
                  className="animate__animated animate__zoomInLeft"
                />
                <img
                  src={GitIMG}
                  alt="git"
                  className="animate__animated animate__jackInTheBox"
                />
                <img
                  src={DataBaseIMG}
                  alt="database"
                  className="animate__animated animate__rollIn"
                />
                <img
                  src={APIIMG}
                  alt="database"
                  className="animate__animated animate__rollIn"
                />
                <img
                  src={FireBaseIMG}
                  alt="firebase"
                  className="animate__animated animate__zoomInRight"
                />
              </div>
            </div>
            <div className="PagenextBtn">
              <button
                className="btn btn-danger  "
                onClick={() => navigate("/contact")}
              >
                <span className="h4"> Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
