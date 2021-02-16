import React, { Component } from 'react';
import "./Header.sass"
import logo from "../img/logo-3.png"

class Header extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <img className="logo" src={logo} alt="logo"/>
                    <nav className="navbar">
                        <h3>All posts</h3>
                        <h3>Code</h3>
                        <h3>Day to Day</h3>
                        <h3>Thoughts</h3>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;