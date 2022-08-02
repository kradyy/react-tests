import React from 'react'
import Logo from '../images/airbnb-logo.svg'

export default function Navbar() {
    return (
        <>
            <nav>
                <img src={Logo} className="nav--logo" />
            </nav>
        </>
    )
}