import React from "react";
import { NavLink } from "react-router-dom";
import './nav.css';


function Nav(){
    return(
        <>
        
        <div className="menu_main">
        {/* <NavLink exact activeClassName="active" to={"/"}>Home</NavLink> */}
        <NavLink exact  to={"/Clock"} >Digital Clock</NavLink>
        <NavLink exact  to={"/Prog1"} >Prog1</NavLink>
        </div>

        </>
    );
}

export default Nav;