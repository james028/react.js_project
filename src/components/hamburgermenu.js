import React from 'react';

import './hamburgermenu.css';

const HamburgerMenu = props => (
    <button className="toggle-button">
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
    </button>
);

export default HamburgerMenu;