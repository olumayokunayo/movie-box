import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Loader from "../loader/Loader";
import imbdImage from "../../images/imdb.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const MovieDetails = () => {
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: process.env.REACT_APP_TMBD_API,
          },
        };

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}`,
          options
        );

        if (response.ok) {
          const data = await response.json();
          setMovie(data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setError(
            <div>
              <h1>Something went wrong</h1>
            </div>
          );
        }
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "10vh",
        }}
      >
        <Typography>Oops! Something went wrong.</Typography>
        {error}
        <NavLink to={"/"}>
          <Button
            sx={{
              bgcolor: "red",
              color: "#fff",
              "&:hover": { bgcolor: "darkred" },
            }}
          >
            Back to Movies
          </Button>
        </NavLink>
      </div>
    );
  }

  if (movie) {
    const releaseDate = new Date(movie.release_date);
    const utcDate = releaseDate.toUTCString();

    return (
      <Container maxWidth="lg">
        <Grid
          container
          sx={{ bgcolor: "#fff", height: "fit-content", marginTop: "0.5rem" }}
          spacing={4}
        >
          <Grid item xs={12} sm={2} sx={{ bgcolor: "#fff", height: "100%" }}>
            <Box p={2}>
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
                <Typography sx={{ color: "#222", fontWeight: 600 }}>
                  MovieBox
                </Typography>
              </NavLink>
              <Container
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  marginTop: "3rem",
                }}
              >
                <NavLink
                  style={{
                    display: "flex",
                    textDecoration: "none",
                    gap: "1rem",
                  }}
                >
                  <HomeIcon sx={{ color: "#222" }} />
                  <Typography
                    sx={{
                      color: "#222",
                      "&:hover": {
                        color: "red",
                      },
                    }}
                  >
                    Home
                  </Typography>
                </NavLink>
                <NavLink
                  style={{
                    display: "flex",
                    textDecoration: "none",
                    gap: "1rem",
                  }}
                >
                  <MovieIcon sx={{ color: "#222" }} />
                  <Typography
                    sx={{
                      color: "#222",
                      "&:hover": {
                        color: "red",
                      },
                    }}
                  >
                    Movies
                  </Typography>
                </NavLink>
                <NavLink
                  style={{
                    display: "flex",
                    textDecoration: "none",
                    gap: "1rem",
                  }}
                >
                  <LiveTvIcon sx={{ color: "#222" }} />
                  <Typography
                    sx={{
                      color: "#222",
                      "&:hover": {
                        color: "red",
                      },
                    }}
                  >
                    TV Series
                  </Typography>
                </NavLink>
                <NavLink
                  style={{
                    display: "flex",
                    textDecoration: "none",
                    gap: "1rem",
                  }}
                >
                  <DateRangeIcon sx={{ color: "#222" }} />
                  <Typography
                    sx={{
                      color: "#222",
                      "&:hover": {
                        color: "red",
                      },
                    }}
                  >
                    Upcoming
                  </Typography>
                </NavLink>
              </Container>
            </Box>
          </Grid>

          <Grid item xs={12} sm={9}>
            <NavLink to={"/"}>
              <Button
                sx={{
                  bgcolor: "#222",
                  padding: "0.1rem 0rem",
                  color: "#fff",
                  "&:hover": { bgcolor: "darkred" },
                }}
              >
                <ArrowBackIcon />
              </Button>
            </NavLink>
            <Box p={2}>
              {isLoading ? (
                <Loader />
              ) : movie ? (
                <Card data-testid="detail-card">
                  <CardMedia
                    component="img"
                    alt={movie.title}
                    height="400"
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    sizes="100"
                  />
                  <CardContent data-testid="card-content">
                    <div
                      style={{
                        display: "flex",
                        gap: isSmallScreen ? "0.1rem" : "0.5rem",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ width: "fit-content", fontWeight: 600 }}
                        data-testid="movie-title"
                      >
                        {movie.title}
                      </Typography>
                      <span style={{ fontWeight: 600 }}>&bull;</span>
                      <Typography data-testid="movie-release-date">
                        {utcDate}
                      </Typography>
                      <span style={{ fontWeight: 600 }}>&bull;</span>
                      <Typography data-testid="movie-runtime">
                        {movie.runtime} (mins)
                      </Typography>
                      <span style={{ fontWeight: 600 }}>&bull;</span>
                      <div
                        style={{
                          display: isSmallScreen ? "block" : "flex",
                          gap: isSmallScreen ? "rem" : "0.5rem",
                        }}
                      >
                        {movie.genres.map((genre) => (
                          <Typography
                            sx={{
                              bgcolor: "pink",
                              borderRadius: "10px",
                              padding: "0.1rem 0.4rem",
                            }}
                            data-testid="movie-genre"
                            key={genre.id}
                          >
                            {genre.name}
                          </Typography>
                        ))}
                      </div>

                      <span style={{ fontWeight: 600 }}>&bull;</span>
                      <img
                        src={imbdImage}
                        alt="imdb"
                        style={{ height: "2rem" }}
                      />
                      <Typography>
                        {movie.vote_average.toFixed(0)}/10
                      </Typography>
                    </div>
                    <Typography
                      variant="body2"
                      sx={{ marginTop: "1rem", lineHeight: 1.6 }}
                      data-testid="movie-overview"
                    >
                      {movie.overview}
                    </Typography>
                  </CardContent>
                </Card>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "10vh",
                  }}
                >
                  <Typography>Oops! Something went wrong.</Typography>
                  {error}
                  <NavLink to={"/"}>
                    <Button
                      sx={{
                        bgcolor: "red",
                        color: "#fff",
                        "&:hover": { bgcolor: "darkred" },
                      }}
                    >
                      Back to Movies
                    </Button>
                  </NavLink>
                </div>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }

  return null;
};

export default MovieDetails;
