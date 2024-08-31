// Navbar.js
import * as React from "react";
import "./navbar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import LogoFzn from "../../assets/logo-f.png";
import { Link, NavLink } from "react-router-dom";
import {
  Avatar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  function handleMenuClick() {
    setIsDrawerOpen(true);
  }
  function handleCloseClick() {
    setIsDrawerOpen(false);
  }
  function hideSideNav() {
    setIsDrawerOpen(false);
  }

  return (
    <AppBar position="static" className="appbar">
      <Container
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.96)" }}
        maxWidth="xl"
        className="appbar-container"
      >
        <Toolbar disableGutters className="d-flex justify-content-between">
          <div className="logo mt-2">
            <IconButton className="logoBtn">
              <Link to="/" className="">
                <Avatar alt="Fzn" src={LogoFzn} title="Md Faizan Ahmad" />
              </Link>
            </IconButton>
          </div>
          <div></div>
          <Hidden mdUp>
            <div className="burger mb-2">
              <MenuIcon fontSize="large" onClick={handleMenuClick} />
            </div>
            <Drawer
              className="phoneDrawer"
              anchor="right"
              open={isDrawerOpen}
              onClose={handleCloseClick}
            >
              <List className="phoneDrawer_List">
                <ListItem
                  className="navListItem"
                  onClick={hideSideNav}
                  component={NavLink}
                  to="/"
                >
                  <ListItemText className="navLink" primary="Home" />
                </ListItem>
                <ListItem
                  className="navListItem"
                  onClick={hideSideNav}
                  component={NavLink}
                  to="/about"
                >
                  <ListItemText className="navLink" primary="About" />
                </ListItem>
                <ListItem
                  className="navListItem"
                  onClick={hideSideNav}
                  component={NavLink}
                  to="/education"
                >
                  <ListItemText className="navLink" primary="Education" />
                </ListItem>
                <ListItem
                  className="navListItem"
                  onClick={hideSideNav}
                  component={NavLink}
                  to="/project"
                >
                  <ListItemText className="navLink" primary="Project" />
                </ListItem>
                <ListItem
                  className="navListItem"
                  onClick={hideSideNav}
                  component={NavLink}
                  to="/contact"
                >
                  <ListItemText className="navLink" primary="Contact" />
                </ListItem>
              </List>
              <CloseIcon
                className="closeIcon"
                fontSize="large"
                onClick={handleCloseClick}
              />
            </Drawer>
          </Hidden>
          <Hidden smDown>
            <div className="nav d-flex align-items-center">
              <Link
                className={`link nav_text text-decoration-none m-2 ${
                  pathname === "/" && "active"
                }`}
                to="/"
              >
                Home
              </Link>
              <Link
                className={`link nav_text text-decoration-none m-2 ${
                  pathname === "/about" && "active"
                }`}
                to="/about"
              >
                About
              </Link>
              <Link
                className={`link nav_text text-decoration-none m-2 ${
                  pathname === "/education" && "active"
                }`}
                to="/education"
              >
                Education
              </Link>
              <Link
                className={`link nav_text text-decoration-none m-2 ${
                  pathname === "/project" && "active"
                }`}
                to="/project"
              >
                Project
              </Link>
              <Link
                className={`link nav_text text-decoration-none m-2 ${
                  pathname === "/contact" && "active"
                }`}
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
