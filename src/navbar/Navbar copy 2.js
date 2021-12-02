import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

import logo from './logo.svg';

function Navbar({ maxWidth }) {

    const varStyle = {
        paddingMenuItem: 17
    }
    const _Header = styled.header`
        background: #ffffff;
        height: 80px;
        > .navbar{
            color: #42424c;
            position: relative;
            height: 100%;
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            max-width: ${maxWidth};
        }
        > * >.navbar__left{
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            }
        > * >.navbar__right{
            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            }
    `;

    const _MenuItem = styled.div`
        padding: 0 ${varStyle.paddingMenuItem + 'px'};
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
        > .navbar_menuname{
            position:relative;
        }
        > .navbar_menuname::before{
            content: '';
            position: absolute;
            top: 1.5em;
            height: 2px;
            width:0;
            border-radius: 4px;
            pointer-events: none;
            transition: .4s ease-in-out;
            background: #31c77f;
            opacity:0;
        }
        &.active{
            width:100%;
            opacity:1;
        }
        > .navbar__subMenu{
            visibility: hidden;
            position: absolute;
            top: 80px;
            left: -15px;
            width: 200px;
            background: #ffffff;
            cursor: pointer;
            transition: .5s;
            opacity:0;
        }
        &:last-child{
            .navbar__subMenu{
                left: auto;
                right:0;
            }
        }
        &:hover{
            .navbar__subMenu{
                visibility: visible;
                opacity:1;
            }
            .navbar_menuname::before{
                width:100%;
                opacity:1;
            }
        }
        > ul{
            list-style-type: none;
            padding-inline-start: 0;
            margin-block-start: 0;
            margin-block-end: 0;
            > li{
                padding: 5px ${varStyle.paddingMenuItem + 15 + 'px'};
                display:flex;
                justify-content: space-between;
            }
        }
    `;


    return (
        <_Header>
            <div className="navbar">
                <div className="navbar__left">
                    <img className="logo__image" src={logo} height="50px" />
                </div>
                <div className="navbar__right">
                    <_MenuItem>
                        <div className="navbar_menuname">Home</div>
                    </_MenuItem>
                    <_MenuItem className="active">
                        <div className="navbar_menuname">Menu AAA</div>
                        <ul className="navbar__subMenu">
                            <li>
                                <div>AAA 111</div>
                                <div>&gt;</div>
                            </li>
                            <li>
                                <div>AAA 222</div>
                                <div>&gt;</div>
                            </li>
                            <li>
                                <div>AAA 333</div>
                                <div>&gt;</div>
                            </li>
                        </ul>
                    </_MenuItem>
                    <_MenuItem>
                        <div className="navbar_menuname">Menu BBB</div>
                        <ul className="navbar__subMenu">
                            <li>
                                <div>BBB 111</div>
                                <div>&gt;</div>
                            </li>
                            <li>
                                <div>BBB 222</div>
                                <div>&gt;</div>
                            </li>
                            <li>
                                <div>BBB 333</div>
                                <div>&gt;</div>
                            </li>
                        </ul>
                    </_MenuItem>
                </div>
            </div>
        </_Header>
    )
}

Navbar.propTypes = {
    maxWidth: PropTypes.string.isRequired
}

// function SubmenuDropLv1({}) {
//     return (
//         <div>
            
//         </div>
//     )
// }

// SubmenuDrop.propTypes = {

// }

export default Navbar

