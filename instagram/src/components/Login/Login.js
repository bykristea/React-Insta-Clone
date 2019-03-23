import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import logo from './../../img/Instagram_logo.png';
import './Login.css';
import styled from 'styled-components';


class Login extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    handleLogin = event => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    render() {
        return (
            <form className="login">
                <img src={logo} width="100px"/>
                <p>Please Login</p>
                
                    <FormGroup>
                    <Input
                        text="text"
                        placeholder="Username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    </FormGroup>
                
                <FormGroup>
               
                    <Input 
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        text="text"
                    />
                    <br />

                    <Button color="primary" size="lg" block onClick={this.handleLogin}>
                        Log In
                    </Button>
                    </FormGroup>
                
            </form>
        );
    }
}


export default Login;