import React from "react"
import logo from "../images/earth-africa-solid.svg"

export default function Navbar() {
    return (
        <nav>
            <img className="nav--logo" src={logo}/>
            <h1 className="nav--logo-title">my travel journal.</h1>
        </nav>
    )
}