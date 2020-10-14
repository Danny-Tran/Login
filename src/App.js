import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./App.css";
import Routes from './Routes';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App container">
      {/* NAV bar  */}
      <Navbar>

        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Nav bar's Brand</Link>
          </Navbar.Brand>
        </Navbar.Header>

        <Button className="pull-right" bsStyle="primary" href="/logins">Login</Button>

      </Navbar>

      {/* Pages contents */}
      <Routes />
    </div>
  );
}

export default App;
