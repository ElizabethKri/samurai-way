import React from 'react';
import s from '../../styledComponents/Navbar/Navbar.module.css'
import {NavLink} from "react-router-dom";
export const NavBar = () => {
    return (

            <nav className={s.nav}>
                <div className={s.item} ><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></div>
                <div className={`${s.item} ${s.active}`}><NavLink to="/message" activeClassName={s.activeLink}>Message</NavLink></div>
                <div className={s.item}><NavLink to="/new" activeClassName={s.activeLink}>News</NavLink></div>
                <div className={s.item}><NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink></div>
                <div className={s.item}><NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink></div>
            </nav>

    );
};

