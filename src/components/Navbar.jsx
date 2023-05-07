import React from 'react';
import Global from '../images/global.png'

export default function Navbar() {
    return (
        <nav>
            <img src={Global} alt="logo" />
            <h3>my travel journal.</h3>
        </nav>
    )
}