import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardMedia } from "@mui/material";
import imbdImage from "../../images/imdb.png";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MovieCard = ({ movie, genres }) => {
  const genreIds = movie.genre_ids || [];

  const movieGenres = genres
    ? genreIds.map((genreId) => {
        const genre = genres.find((g) => g.id === genreId);
        return genre ? genre.name : "";
      })
    : [];

  const releaseDate = new Date(movie.release_date);

  const utcReleaseDate = releaseDate.toUTCString();

  return (
    <Link style={{ textDecoration: "none" }} to={`/movies/${movie.id}`}>
      <Card data-testid="movie-card" sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          alt={movie.title}
          height="300"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          title={movie.title}
          data-testid="movie-poster"
        />

        <CardContent>
          <div style={{ position: "absolute", top: "2%" }}>
            <FavoriteIcon sx={{ color: "#fff", "&:hover": { color: "red" } }} />
          </div>
          <Typography
            variant="body2"
            data-testid="movie-release-date"
            sx={{ color: "gray" }}
          >
            {movie.release_date}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 500 }}
            data-testid="movie-title"
          >
            {movie.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img
              style={{ height: "1.8rem" }}
              src={imbdImage}
              alt={movie.title}
            />
            <Typography variant="body2">{movie.vote_average}/10</Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{ fontSize: "0.8rem", color: "gray" }}
            data-testid="movie-release-date"
          >
            {movieGenres.join(", ")}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MovieCard;
