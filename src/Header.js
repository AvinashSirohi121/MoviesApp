import React from "react";
import { Link } from "react-router-dom";
import BookTicket from "./BookTicket";

const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwByFFBOvDuBCN2YUSQot2GVgTN8zGxQNjVSh4ncA5OQ&s"
            alt="icon"
          ></img>
        </Link>

        <Link to="/ViewTickets">
          <button>View Tickets</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
