import React from 'react';
import "../../css/Header/Header.css"

function  header (){

    return (
        <header>
            <nav className="navbar">
                <div className="brandtitle">SDK BATIMENT</div>
                <a href="#" class="togglebutton">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>
                <div className="navbarlinks">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav >




        </header>
        
    )

}
export default header