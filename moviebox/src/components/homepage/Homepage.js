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
      const apiKey = "5098736358878f09ba6951686dac9c7e";
      let apiUrl = "https://api.themoviedb.org/3/discover/movie";

      if (query) {
        apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
      }

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDk4NzM2MzU4ODc4ZjA9YmE2OTUxNjg2ZGFjOWM3ZSIsInN1YiI6IjY0ZmU1NTA6NzA2ZjBmMDA0OTFiNzcyYzAwY2FmMjIzZDg5ZmE3ZDM0NzFiMzUzNGI1MDYyMmE2MjJhNmY5OTMwMzEwYmI0MTQiLCJhdWQiOiI1MDk4NzM2MzU4ODc4ZjA5YmE2OTUxNjg2ZGFjOWM3ZSJ9.sqxEIwTSCQ0A-iXBTwP9KIdQffQpzuhH0Yz6n__wL3Y",
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
