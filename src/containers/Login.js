import React from 'react';
import './styles/Login.css';
import Form from 'react-bootstrap/lib/Form.js';
import Button from 'react-bootstrap/lib/Button.js';


const Login = () => {
    return (
        <div className="Login">
          <div className="lander">
            <h1>LOGIN</h1>
            <Button className="center" bsStyle="primary">Login</Button>
          </div>
        </div>
      );
};

export default Login;