import React from "react";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";

const Navigation = () => {
    const id1 = v4()
    const id2 = v4()
    const id3 = v4()
    return (
        <ul>
            <li key={id1}>
                <NavLink to={'/'}>
                    home
                </NavLink>
            </li>
            <li key={id2}>
                <NavLink to={'/contacts'}>
                    contacts
                </NavLink>
            </li>
            <li key={id3}>
                <NavLink to={'/about'}>
                    about
                </NavLink>
            </li>
        </ul>
    )
}

export default Navigation;