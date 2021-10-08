import React from 'react'
import PropTypes from 'prop-types'
// import yts from './assets/images/yts.PNG';
import './navbar.css'
export default function Navbar(props) {
    const imgstyle = {
        height: '50px',
        width: '50px',
        padding: '0px !important',
        margin: '0px !important'
    }
    return (
        <>
            <header class="header-area overlay">
                <nav class={`navbar navbar-expand-md navbar-${props.mode} bg-${props.mode}`}>
                        <div class="container">
                            <a href="/" class="navbar-brand"><img style={imgstyle} src={props.title} alt="" /></a>

                            <button type="button" class="navbar-toggler collapsed" data-toggle="collapse" data-target="#main-nav">
                                <span class="menu-icon-bar"></span>
                                <span class="menu-icon-bar"></span>
                                <span class="menu-icon-bar"></span>
                            </button>

                            <div id="main-nav" class="collapse navbar-collapse">
                                <ul class="navbar-nav ml-auto">
                                    <li><a href="#" class="nav-item nav-link active">Home</a></li>
                                    <li><a href="#" class="nav-item nav-link">About Us</a></li>
                                    <li class="dropdown">
                                        <a href="#" class="nav-item nav-link" data-toggle="dropdown">Services</a>
                                        <div class="dropdown-menu">
                                            <a href="#" class="dropdown-item">Dropdown Item 1</a>
                                            <a href="#" class="dropdown-item">Dropdown Item 2</a>
                                            <a href="#" class="dropdown-item">Dropdown Item 3</a>
                                        </div>
                                    </li>
                                    <li class="dropdown">
                                        <a href="#" class="nav-item nav-link" data-toggle="dropdown">Help</a>
                                        <div class="dropdown-menu">
                                            <a href="#" class="dropdown-item">Dropdown Item 1</a>
                                            <a href="#" class="dropdown-item">Dropdown Item 2</a>
                                            <a href="#" class="dropdown-item">Dropdown Item 3</a>
                                            <a href="#" class="dropdown-item">Dropdown Item 4</a>
                                            <a href="#" class="dropdown-item">Dropdown Item 5</a>
                                        </div>
                                    </li>
                                    <li><a href="#" class="nav-item nav-link">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className={`form-check toggle-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>

                        </div>
                </nav >
            </header>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
};