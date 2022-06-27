import React from "react";
import "./Homepage.css";
import github from "../../Images/Github.png";
import linkedin from "../../Images/linkedin.png";

function HomePage(){
    return (
        <div className="Homepage_container">
            <div className="Homepage_left">
                <p className="Homepage_left_h1">
                    <span className="red_color">Hi, </span>My name is
                </p>
                <p className="Homepage_left_h2">Maniket Kumar</p>
                <p className="Homepage_left_h3">I am a Software developer at <span className="red_color">Cognizant.</span>{" "}
                </p>
                <p className="Homepage_left_description">I love to develop website.{" "}</p>
                <p className="Homepage_left_description">Have a look at my <span className="red_color">Portfolio.</span>{" "}</p>
                <p className="Homepage_left_description">I am also a <span className="red_color">Competetitive coder.</span>{" "}
                </p>
                <div>
                    <a href="https://github.com/Maniket007" target="_blank">
                        <img src={github} alt="githubImage" className="homepage_logo"/>
                    </a>
                    <a href="https://www.linkedin.com/in/maniket-kumar-55360216b/" target="_blank">
                        <img src={linkedin} alt="linkedinImage"className="homepage_logo"/>
                    </a>
                </div>
                <a href="sonuanand644@gmail.com">
                    <button className="homepage_left_button">Get in Touch</button>
                </a>
            </div>
        </div>
    );
}
export default HomePage;