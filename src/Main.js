import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BookTicket from "./BookTicket";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = () => {
    axios
      .get("http://localhost:3001/movies")
      .then((res) => {
        console.log("Movies =>", res.data);
        if (res.data && res.data.length > 0) {
          setMovies(res.data);
        }
      })
      .catch((e) => {
        console.log("Error in movies =>", e);
      });
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="main">
      <div className="movieSection">
        {movies.length > 0 ? (
          movies.map((m, i) => (
            <div key={i} className="movie">
              <img src={m.image} alt={m.title} />
              <Link to={`/BookTickets/${m.title}/${m.id}`}>
                <button className="bookTicketsButton">Book Tickets</button>
              </Link>
            </div>
          ))
        ) : (
          <div className="nomovies">No Movies 🥺</div>
        )}
      </div>
    </div>
  );
};

export default Main;
