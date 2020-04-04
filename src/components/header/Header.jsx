import React from 'react';
import style from './header.module.css'
import Logo from '../../assets/img/sibdev-logo.svg'
import Exit from './headerMenu/Exit';
import { NavLink } from 'react-router-dom';
import HeaderMenuContainer from './headerMenu/HeaderMenuContainer';

const Header = () => {

    return (

        <header className={style.header}>

            <NavLink to={'#'} className={style.logo}>
                <img src={Logo} alt="" />
            </NavLink>
            <HeaderMenuContainer />
            <Exit />


        </header>
    )

}

export default Header