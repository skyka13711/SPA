import React, { useState } from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom';

const HeaderMenu = (props) => {



    const [current, setCurrent] = useState(props.pathname)


    let handleClick = e => {
        setCurrent(
            e.key,
        );
    };


    return (

        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="/search">
                <NavLink to={'/search'}>Поиск</NavLink>
            </Menu.Item>
            <Menu.Item key="/favorites">
                <NavLink to={'/favorites'}>Избранное</NavLink>
            </Menu.Item>
        </Menu>

    );
}




export default HeaderMenu