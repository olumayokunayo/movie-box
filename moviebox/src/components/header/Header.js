import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import banner from "../../images/jwick.jpeg";
import imbdImage from "../../images/imdb.png";
import berryImage from "../../images/strawberry.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Loader from "../loader/Loader";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import DateRangeIcon from "@mui/icons-material/DateRange";

const Sidebar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    onSearch(search);
  };

  const handleSearchInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        marginTop: "3rem",
        alignItems: "left",
      }}
    >
      <NavLink
        to=""
        style={{
          display: "flex",
          textDecoration: "none",
          gap: "1rem",
          color: "#fff",
        }}
      >
        <HomeIcon sx={{ color: "red", fontSize: "1.8rem" }} />
        <Typography variant="h5">Home</Typography>
      </NavLink>
      <NavLink
        to=""
        style={{
          display: "flex",
          textDecoration: "none",
          gap: "1rem",
          color: "#fff",
        }}
      >
        <MovieIcon sx={{ color: "red", fontSize: "1.8rem" }} />
        <Typography variant="h5">Movies</Typography>
      </NavLink>
      <NavLink
        to=""
        style={{
          display: "flex",
          textDecoration: "none",
          gap: "1rem",
          color: "#fff",
        }}
      >
        <LiveTvIcon sx={{ color: "red", fontSize: "1.8rem" }} />
        <Typography variant="h5">TV Series</Typography>
      </NavLink>
      <NavLink
        to=""
        style={{
          display: "flex",
          textDecoration: "none",
          gap: "1rem",
          color: "#fff",
        }}
      >
        <DateRangeIcon sx={{ color: "red", fontSize: "1.8rem" }} />
        <Typography variant="h5">Upcoming</Typography>
      </NavLink>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          // "@media (max-width: 600px)": { display: "none" },
        }}
      >
        <input
          type="search"
          placeholder="What do you want to watch?"
          style={{
            backgroundColor: "transparent",
            padding: "0.8rem",
            width: "400px",
            paddingRight: "2rem",
            border: "2px solid red",
            borderRadius: "4px",
            color: "#fff",
            outline: "none",
            "::placeholder": {
              color: "#fff",
            },
          }}
          value={search}
          onChange={handleSearchInputChange}
          onKeyPress={handleSearchInputKeyPress}
        />

        <SearchIcon
          style={{
            position: "absolute",
            right: "10px",
            cursor: "pointer",
            color: "#fff",
          }}
          onClick={handleSearch}
        />
      </Box>
    </Box>
  );
};

const Header = ({ onSearch, isLoading }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    onSearch(search);
  };
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Container
      maxWidth="none"
      sx={{
        padding: "1rem 0 2rem 0",
        width: "100%",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "fit-content",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {window.innerWidth <= 600 && (
            <MenuIcon
              sx={{
                color: "#fff",
                fontSize: "2rem",
                cursor: "pointer",
              }}
              onClick={toggleSidebar}
            />
          )}
          <NavLink
            to={"/"}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              textDecoration: "none",
            }}
          >
            <Box
              style={{
                backgroundColor: "#c81640",
                height: "2.5rem",
                width: "2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",
              }}
            >
              <Box
                style={{
                  backgroundColor: "red",
                  height: "2rem",
                  width: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "20px",
                }}
              >
                <LiveTvIcon style={{ color: "#fff", fontSize: "1rem" }} />
              </Box>
            </Box>
            <Typography sx={{ color: "#fff" }}>MovieBox</Typography>
          </NavLink>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              "@media (max-width: 600px)": { display: "none" },
            }}
          >
            <input
              type="search"
              placeholder="What do you want to watch?"
              style={{
                backgroundColor: "transparent",
                padding: "0.4rem",
                width: "400px",
                paddingRight: "2rem",
                border: "1px solid #fff",
                borderRadius: "4px",
                color: "#fff",
                outline: "none",
                "::placeholder": {
                  color: "#fff",
                },
              }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <SearchIcon
              style={{
                position: "absolute",
                right: "10px",
                cursor: "pointer",
                color: "#fff",
              }}
              onClick={handleSearch}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Typography>
              <NavLink
                to=""
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Sign in
              </NavLink>
            </Typography>
          </Box>
        </Box>
        {showSidebar && <Sidebar onSearch={onSearch} />}
        <Box>
          <Typography
            sx={{
              color: "#fff",
              marginTop: "5rem",
              fontSize: "3rem",
              fontWeight: 500,
              width: "40%",
              "@media (max-width: 779px)": {
                fontSize: "2rem",
                width: "100%",
                marginTop: "2rem",
              },
            }}
          >
            John Wick 3 : Parabellum
          </Typography>
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <img src={imbdImage} alt="imdb" style={{ height: "2rem" }} />
              <Typography sx={{ color: "#fff" }} variant="body2">
                86.0 / 100
              </Typography>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <img src={berryImage} alt="rating" style={{ height: "1.5rem" }} />
              <Typography variant="body2" sx={{ color: "#fff" }}>
                97%
              </Typography>
            </div>
          </div>
          <Typography
            sx={{
              lineHeight: "1.3rem",
              width: "40%",
              color: "#fff",
              fontWeight: 500,
              marginTop: "1rem",
              "@media (max-width: 779px)": {
                marginTop: "none",
                width: "100%",
              },
            }}
          >
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </Typography>
          <Button
            sx={{
              bgcolor: "#be123c",
              display: "flex",
              gap: "0.5rem",
              marginTop: "1rem",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "50%",
                display: "flex",
              }}
            >
              <PlayArrowIcon sx={{ color: "#222" }} />
            </div>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              WATCH TRAILER
            </Typography>
          </Button>
        </Box>
        {isLoading ? <Loader /> : ""}
      </Container>
    </Container>
  );
};

export default Header;
