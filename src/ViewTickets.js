import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

const ViewTickets = () => {
  const [ticket, setTicket] = useState([]);

  const viewAllTickets = () => {
    axios
      .get("http://localhost:3001/transactions")
      .then((res) => {
        console.log("Trans -> ", res.data);
        console.log(res.data[0].ticket);
        if (res.data && res.data.length > 0) {
          setTicket(res.data);
        }
      })
      .catch((e) => {
        console.log("Error in ViewTickets =>", e);
      });
  };

  useEffect(() => {
    viewAllTickets();
  }, []);

  return (
    <>
      <Header />
      <div className="viewTickets">
        <h3> All Tickets</h3>
        <div className="innerViewTicket">
          {ticket &&
            ticket.length > 0 &&
            ticket.map((t, i) => {
              return (
                <div className="ticket" key={i}>
                  <div className="left">
                    <p>Movie : {t.ticket.movieName}</p>
                    <p>
                      UserId : <p1>{t.ticket.userId}</p1>
                    </p>
                  </div>
                  <div className="right">
                    {t.ticket.currency}
                    {t.ticket.price}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ViewTickets;
