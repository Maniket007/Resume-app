import React from "react";
import './TechStack.css';
import c from '../../Images/c.png';
import js from '../../Images/js.png';
import firebase from '../../Images/firebase.png'
import TechStackIconContainer from "./TechStackIconContainer/TechStackIconContainer";
function TechStack (){
    const techstackData = [
            {
                iconName: 'C',
                iconImages: c,
                iconAltProperty: "reactImages",
            },
            {
                iconName: 'JavaScript',
                iconImages: js,
                iconAltProperty: "jsImages",
            },
            {
                iconName: 'Firebase',
                iconImages: firebase,
                iconAltProperty: "FirebaseImages",
            },
        ]
    return (
        <div className="techstack_container">
            <p className="techstack_title">Tech Stack</p>
            <div className="techstack_icon_container">
                {techstackData.map((item, index) => {
                    return <TechStackIconContainer
                        image={item.iconImages}
                        altProperty={item.iconAltProperty}
                        name={item.iconName}
                    />;
                })}
            </div>
            <div className="techstack_icon_container">
                {techstackData.map((item, index) => {
                    return <TechStackIconContainer
                        image={item.iconImages}
                        altProperty={item.iconAltProperty}
                        name={item.iconName}
                    />;
                })}
            </div>
        </div>
    );
}
export default TechStack;