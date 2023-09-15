import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MovieCard from "../card/MovieCard";
import Grid from "@mui/material/Grid";
import Loader from "../loader/Loader";

const FeaturedMovies = ({ results }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMovieData = async () => {
    try {
      setIsLoading(true);

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: process.env.REACT_APP_TMBD_API,
        },
      };

      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie",
        options
      );
      console.log(`response:`, response);

      if (response.ok) {
        const data = await response.json();
        setMovies(data.results);
        console.log(movies);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setError(
          <div>
            <Typography sx={{ color: "red", textAlign: "center" }}>
              Something went wrong
            </Typography>
          </div>
        );
      }
    } catch (error) {
      setIsLoading(false);
      setError(
        <div>
          <Typography sx={{ color: "red", textAlign: "center" }}>
            Something went wrong
          </Typography>
        </div>
      );
      console.error(error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    if (results.length === 0) {
      fetchMovieData();
    } else {
      setMovies(results);
      setIsLoading(false);
    }
  }, [results]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const apiKey = "5098736358878f09ba6951686dac9c7e";
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
        );
        if (response.ok) {
          const data = await response.json();
          setGenres(data.genres);
        } else {
          setError(<Typography>Difficulty fetching some images</Typography>);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchGenres();
  }, []);

  return (
    <Container maxWidth="xl">
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#fff", height: "fit-content" }}>
          <Box
            sx={{
              paddingTop: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                fontSize: "2rem",
                "@media (max-width: 600px)": { fontSize: "1.4rem" },
              }}
            >
              Featured Movies
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "#be123c",
                }}
              >
                See more{" "}
              </NavLink>
              <NavigateNextIcon sx={{ color: "#be123c" }} />
            </div>
          </Box>
          <Box sx={{ paddingTop: "2rem" }}>
            {isLoading ? (
              <Loader />
            ) : (
              <Grid container spacing={2}>
                {movies &&
                  movies.slice(0, 12).map((movie) => (
                    <Grid item xs={12} sm={6} md={3} key={movie.id}>
                      <MovieCard movie={movie} genres={genres} />
                    </Grid>
                  ))}
              </Grid>
            )}
            {error && <div>{error}</div>}
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default FeaturedMovies;
