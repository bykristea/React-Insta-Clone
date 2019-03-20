import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            username: '',
            password: ''
        };
    }

    render() {
        return (
            <form className="login">
                <h3>InstaClone</h3>
                <p>Please Login</p>
                <div className="login-user">
                    <input
                        text="text"
                        placeholder="Username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="login-password">
                    <input 
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        text="text"
                    />
                    <br />

                    <button onClick={this.handleLogin}>
                        Log In
                    </button>
                </div>
            </form>
        );
    }
}


export default Login;