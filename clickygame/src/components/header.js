import React, { Component } from "react"
import './header.css'

class Header extends Component {
    render() {
    return (
        <div className="header">
        <h1> Clicky Game</h1>
        <h4>
            Click on a Character to earn points, but don't click them twice!
        </h4>
        
        </div>
    );
    }
}
export default Header;