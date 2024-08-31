import "./contacts.css";
import { Box, Modal, Typography, Button } from "@mui/material";
import { useState } from "react";
import { DoneOutlineRounded, Send as SendIcon } from "@mui/icons-material";
import { useFormik } from "formik";
import emailjs from "emailjs-com";
import whatsappImg from "../../assets/whatsapp.png";
import emailImg from "../../assets/gmail.png";
import linkedinImg from "../../assets/linkedin.png";
import callImg from "../../assets/call.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Resume } from "../resume/resume";
import { useNavigate } from "react-router-dom";

export function Contact() {
  //// styles
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 150,
    color: "white",
    bgcolor: "green",
    border: "2px solid #19660d",
    boxShadow: 24,
    p: 2,
  };

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      FullName: "",
      Email: "",
      Message: "",
    },
    onSubmit: (formData, { resetForm }) => {
      // Sending email using EmailJS
      emailjs
        .send(
          "service_5mr6ulb", // Replace with your Service ID
          "template_4u62324", // Replace with your Template ID
          {
            name: formData.FullName,
            email: formData.Email,
            message: formData.Message,
          },
          "1m0-WMqEgnAlSz7BU" // Replace with your User ID
        )
        .then(
          (result) => {
            console.log(result.text);
            setOpen(true);
            resetForm();
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  });

  return (
    <div className="container-fluid contact">
      <section className="contact_section">
        <div className="contact_form">
          <div className="contact-heading_text text-center">
            <span className="h3">Message Me</span>
            <form onSubmit={formik.handleSubmit} className="form">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Your Full Name"
                  onChange={formik.handleChange}
                  name="FullName"
                  value={formik.values.FullName}
                  required
                />
                <label htmlFor="floatingInput">Your Full Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={formik.handleChange}
                  name="Email"
                  value={formik.values.Email}
                  required
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave your message here"
                  id="floatingTextarea"
                  style={{ height: "100px" }}
                  onChange={formik.handleChange}
                  name="Message"
                  value={formik.values.Message}
                  required
                />
                <label htmlFor="floatingTextarea">Leave your Message</label>
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                endIcon={<SendIcon />}
                className="mt-4"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
        <div className="lets_connect">
          <div className="connect-heading_text text-center">
            <span className="h3">Let's Contact</span>
            <div className="connect-option">
              <a
                href="https://wa.me/+917563092029"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={whatsappImg}
                  alt="whatsapp"
                  className="connect_icons whatsapp text-success"
                />
              </a>
              <a href="tel:+917563092029" target="_blank" rel="noreferrer">
                <img
                  src={callImg}
                  alt="call"
                  className="connect_icons whatsapp text-success"
                />
              </a>
              <a
                href="mailto:md.faizan.ahmad.web@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={emailImg}
                  alt="email"
                  className="connect_icons whatsapp text-success"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/mdfaizandahmad/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={linkedinImg}
                  alt="linkedin"
                  className="connect_icons whatsapp text-success"
                />
              </a>
              <a
                href="https://github.com/iamfaizandev"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon
                  fontSize="large"
                  className="connect_icons git text-white"
                />
              </a>
            </div>
            <div className="PagenextBtn">
              <button
                className="btn btn-danger w-25 "
                onClick={() => navigate("/")}
              >
                <span className="h4">Home</span>
              </button>
            </div>
          </div>
        </div>
        <div className="notiModal">
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                className="text-center"
                variant="h6"
                component="h2"
              >
                <span>
                  <DoneOutlineRounded />
                </span>
                Submitted
              </Typography>
            </Box>
          </Modal>
        </div>
      </section>
    </div>
  );
}
