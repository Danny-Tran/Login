import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./App.css";
import Routes from './Routes';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          
          <Navbar.Brand>
            <Link to="/">Nav bar Brand</Link>
          </Navbar.Brand>

          <Button className="pull-right" bsStyle="primary">
            <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
          </Button>

        </Navbar.Header>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
