import React from 'react';

import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => (
    <header className="header">
        <section className="header-inner">
            <img src={logo} alt="Weedmaps" width="150px" />
        </section>
    </header>
);

export default Header;