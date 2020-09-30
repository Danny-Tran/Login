import React from 'react';
import './styles/Login.css';
import {Button, Form, FormControl, ControlLabel } from 'react-bootstrap';



const Login = () => {
    return (
        <div className="Login-Wrapper">
            <h1>LOGIN</h1>
            <div className="input">
            <Form>
                        <ControlLabel>User Code</ControlLabel>
                        <FormControl className='input-form' type="code" placeholder="User Code"/>


                        <ControlLabel>User Password</ControlLabel>
                        <FormControl type="password" placeholder="Password" />
            </Form>
            <Button className="center" bsStyle="primary">Login</Button>
          </div>
        </div>
      );
};

export default Login;