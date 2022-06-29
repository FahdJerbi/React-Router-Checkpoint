import React, { useState, useEffect } from "react";
import "./App.css";
import MoviesList from "./components/movieslist/MoviesList";
import NavBar from "./components/navbar/NavBar";
import AddMovie from "./components/modal/AddMovie";
import data from "./data";
import { Link, Routes, Route } from "react-router-dom";
import Description from "./components/Description";

function App() {
  const [movies, setMovies] = useState(data);
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<MoviesList movies={movies} search={search} rate={rate} />}
        />
        <Route path="/:dataInfos" element={<Description />} />
      </Routes>
    </div>
  );
}

export default App;
