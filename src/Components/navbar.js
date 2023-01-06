import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    // const [logo, setLogo] = ('light');
    // const toggleLogo = () => {
    //     if(logo === 'light'){
    //         setLogo.color("#3d2527");
    //     }
    //     else{
    //         setLogo.colro('light');
    //     }
    // }

    //logo={logo} toggleLogo={toggleLogo}

    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className={`navbar-brand color-${props.mode}`}  style={{fontSize:'1.8rem'}} href="/">Words&You</a>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="=navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> */}
            {/* <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
                </a>
                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
            </li> */}
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
            {/* <form className="d-flex mx-2" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-success" type="submit">Search</button>
            </form> */}
            <div className='form-check form-switch'>
                <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
                <label style={{WebkitUserSelect:'none'}} className={`form-check-label text-${props.mode === 'light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>

            </div>
        </div>
        </nav>
    )
}

// Navbar.propTypes = 
// {
//     title: PropTypes.string.isRequired,
//     aboutText: PropTypes.string.isRequired
// }