import React from "react";
import {NavLink} from "react-router-dom";

export function NavBar() {
    return (<div>
        <nav>
            <ul>
                <li><NavLink to={"/preJunior"}>preJunior</NavLink></li>
                <li><NavLink to={"/Junior"}>Junior</NavLink></li>
                <li><NavLink to={"/JuniorPlus"}>Junior+</NavLink></li>
            </ul>
        </nav>
    </div>)
}
