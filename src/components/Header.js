import React from "react"
import trollFaceImg from "../images/troll-face.png"

function Header() {
    return (
        <header className="header">
            <img className="header--image" src={trollFaceImg}></img>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}

export default Header