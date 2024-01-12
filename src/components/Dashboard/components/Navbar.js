import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useScrollYPosition } from "react-use-scroll-position";
import "../Styles/navbar.css";
import { Switch, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Navbar({ links, props }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isValue, setIsValue] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setIsValue(event.target.value);
  };

  const onMbPlan = () => {
    navigate("/e-sales/mobileplan");
  };

  const onIntPlan = () => {
    navigate("/e-sales/internetplan");
  };

  const scrollY = useScrollYPosition();

  const stickeyTrigger = window.innerHeight / 2.75;
  return (
    <React.Fragment>
      <Container>
        <div
          style={{ backgroundColor: "orangered" }}
          className={`nav${scrollY > stickeyTrigger ? " nav-stickey" : ""}${
            menuOpen ? " nav-open" : ""
          }`}
        >
          <div className="nav-content">
            <a className="nav-logo" style={{textDecoration:'none'}} href="/">Sunset Sales Report</a>
            <nav className="nav-links__container">
              <div>
                {links &&
                  links.map((link, i) => (
                    <a className="nav-link" href={link.href} key={i}>
                      <div className="nav-link__text">{link.title}</div>
                      <div className="nav-link__background" />
                    </a>
                  ))}

                <div class="dropdown nav-link">
                  <button className="dropbtn nav-link__text">
                   Our Plans
                    <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">

                      <a
                        style={{ color: "orangered" }}
                        onClick={() => onMbPlan()}
                      >
                        Mobile Plans
                      </a>
                      <a
                        style={{ color: "orangered" }}
                        onClick={() => onIntPlan()}
                      >
                        Internet Plans
                      </a>
                  </div>
                  <div className="nav-link__background" />
                </div>
                <Box
                  sx={{
                    borderColor: "orangered",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    "& > *": {
                      m: 1,
                    },
                  }}
                >
                  <ButtonGroup
                    variant="text"
                    aria-label="text button group"
                    color="inherit"
                  >
                    <Button
                      style={{ color: "orangered" }}
                      onClick={() => onMbPlan()}
                    >
                      Mobile Plans
                    </Button>
                    <Button
                      style={{ color: "orangered" }}
                      onClick={() => onIntPlan()}
                    >
                      Internet Plans
                    </Button>
                  </ButtonGroup>
                </Box>
              </div>
            </nav>

            <div
              className="nav-menu__icon"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div />
              <div />
            </div>
          </div>
        </div>
      </Container>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab
          size="small"
          aria-label="scroll back to top"
          style={{ backgroundColor: "orangered", color: "white" }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

Navbar.defaultProps = {
  links: [
    { title: "Home", href: "#home" },
    { title: "Features", href: "#features" },
    { title: "Services", href: "#services" },
    { title: "Pricing", href: "#pricing" },
    { title: "Contact", href: "#contact" },
  ],
};
