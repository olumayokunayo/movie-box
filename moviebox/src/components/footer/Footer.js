import React from "react";
import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: "2rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "30%",
          margin: "auto",
        }}
      >
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
        <YouTubeIcon />
      </Box>
      <Box
        sx={{ flexGrow: 1, width: "60%", margin: "auto", paddingTop: "2rem" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={4}>
            <NavLink style={{ textDecoration: "none", color: "#222" }}>
              Conditions of Use
            </NavLink>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <NavLink style={{ textDecoration: "none", color: "#222" }}>
              Privacy & Policy
            </NavLink>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <NavLink style={{ textDecoration: "none", color: "#222" }}>
              Press Room
            </NavLink>
          </Grid>
        </Grid>
      </Box>
      <Typography sx={{ textAlign: "center", paddingTop: "1rem" }}>
        &copy;{year} Made with ❤️{" "}
      </Typography>
    </Container>
  );
};

export default Footer;
