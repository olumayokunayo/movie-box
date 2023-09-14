import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import FeaturedMovies from "../featuredMovies/FeaturedMovies";
import Footer from "../footer/Footer";

const Homepage = () => {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovieData = async (query) => {
    try {
      setIsLoading(true);
      const apiKey = process.env.REACT_APP_API;
      let apiUrl = "https://api.themoviedb.org/3/discover/movie";

      if (query) {
        apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
      }

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: process.env.REACT_APP_TMBD_API,
        },
      };

      const response = await fetch(apiUrl, options);
      console.log(`responsehome:`, response);
      if (response.ok) {
        const data = await response.json();
        setIsLoading(false);
        setResults(data.results);
      } else {
        setIsLoading(false);
        console.error("Something went wrong");
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovieData(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <Header onSearch={setSearchQuery} isLoading={isLoading} />
      <FeaturedMovies results={results} />
      <Footer />
    </>
  );
};

export default Homepage;
