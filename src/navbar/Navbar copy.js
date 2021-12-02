import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components';

import logo from './logo.svg';

function Navbar({ }) {

    const [menus, setMenus] = useState([
        { text: 'Home' },
        { text: 'Button' },
        { text: 'Card' },
    ].map((v) => {
        v.show = false;
        return v;
    }))

    // const _Logo=styled.div`
    //   background: #eff;
    //   > img {
    //     height:40px;
    //   },
    // `;

    const _Logo = styled.div`
        z-index: 99;
        img:hover {
            height:40px;
        }
    `;

    function onMouseEnter(event) {
        console.log('onMouseEnter')
    }

    function onMouseLeave(event) {
        console.log('onMouseLeave')
    }

    return (
        <header className="navbar">
            <_Logo className="logo">
                <img className="logo__image" src={logo} height="50px" />
            </_Logo>
            <div className="cell">
                {menus.map((menu, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                {menu.text}
                                <div className={'submenu ' + (menu.show ? 'show' : '')}>
                                    Sub Menu
                                </div>
                            </div>

                        </React.Fragment>
                    )
                })}
            </div>
        </header>
    )
}

Navbar.propTypes = {

}

export default Navbar

