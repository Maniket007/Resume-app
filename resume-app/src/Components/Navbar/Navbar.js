import React from "react";
import "./Navbar.css";
var name = "<MK/>";
function Navbar(){
    return (
        <div className="navbar_container">
            <div className="navbar_left">{name}</div>
            <div className="navbar_right">
                <p>About</p>
                <p>Tools</p>
                <p>Experience</p>
                <p>Projects</p>
                <p>Resume</p>
            </div>
        </div>
    );
}
export default Navbar;