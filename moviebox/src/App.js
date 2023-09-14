import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Homepage from "./components/homepage/Homepage";
import MovieDetails from "./components/movieDetails/MovieDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
