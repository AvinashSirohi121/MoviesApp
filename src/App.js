import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import { Routes, Route } from "react-router-dom";
import BookTicket from "./BookTicket";
import ViewTickets from "./ViewTickets";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
            </>
          }
        ></Route>
        <Route path="ViewTickets" element={<ViewTickets />}></Route>
        <Route path="BookTickets/:title/:id" element={<BookTicket />}></Route>
      </Routes>
    </div>
  );
}

export default App;
