import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const BookTicket = () => {
  const params = useParams();
  const { title, id } = params;
  const [movieData, setMovieData] = useState([]);
  const [noOfTranx, setNoOfTrnx] = useState([]);

  const getMovieData = () => {
    axios
      .get(`http://localhost:3001/movies/${id}`)
      .then((res) => {
        console.log("RES => ", res.data);
        setMovieData(res.data);
        // console.log("MovieData => ", movieData);
      })
      .catch((e) => {
        console.log("Error =>", e);
      });
  };

  const getAllTrsnsaction = () => {
    axios
      .get("http://localhost:3001/transactions")
      .then((res) => {
        console.log("Res =>", res.data);
        if (res.data) {
          setNoOfTrnx(res.data);
        }
      })
      .catch((e) => {
        console.log("Error => ", e);
      });
  };

  function generateRandomString(length) {
    const alphanumeric =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * alphanumeric.length);
      randomString += alphanumeric.charAt(randomIndex);
    }

    return randomString;
  }
  const BookTicket = (e, price, title, currency) => {
    getAllTrsnsaction();
    const userId = generateRandomString(15);
    console.log("Inside BookTicket =>", price, title, currency);
    const ticket = {
      movieName: title,
      price: price,
      currency: currency,
      userId: userId,
    };
    console.log("Ticket details => ", ticket);
    axios
      .post("http://localhost:3001/transactions", { ticket })
      .then((res) => {
        console.log("BOokTicket res =>", res.data);
        if (res.data) {
          alert(`Your ticket booked successfully for ${title}`);
        }
      })
      .catch((e) => {
        console.log("Error => ", e);
      });
  };

  useEffect(() => {
    getMovieData();
  }, []);

  console.log("BookTickets ==> ", title);
  return (
    <>
      <Header />
      <div className="main">
        <div className="movieSectionn">
          <h2>Movie Details</h2>
          {movieData && (
            <div className="movieDetails">
              <div className="leftP">
                <img src={movieData.image} alt="movieImage" />
              </div>
              <div className="rightP">
                <p>
                  <b>Moive:</b> {movieData.title}
                </p>
                <p>
                  <b>Genre:</b> {movieData.genre}
                </p>
                <p>
                  <b>Director:</b> {movieData.director}
                </p>
                <p>
                  <b>Cast:</b> {movieData.stars}
                </p>
                <p>
                  <b>Description: </b>
                  {movieData.plot}
                </p>

                <p className="seats">
                  <b>Seats : </b>{" "}
                  {movieData.prices &&
                    Object.keys(movieData.prices).map((key) => (
                      <div key={key}>
                        <button
                          onClick={(e) =>
                            BookTicket(
                              e,
                              movieData.prices[key],
                              movieData.title,
                              movieData.currency
                            )
                          }
                          className="seatsButton"
                        >
                          {key}: {movieData.currency} {movieData.prices[key]}
                        </button>
                      </div>
                    ))}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BookTicket;
