import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            {/* navbar section  */}
            <header className="header-section">
                <nav className="nav-section">
                    <div className="logo">
                        <h2 className="logo-title">Knowledge Cafe</h2>
                    </div>
                    <div className="nav-menu">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Blogs</a>
                        <img src="https://www.clipartmax.com/png/full/136-1363971_author-image-logo-user-png.png" alt="" />
                    </div>
                </nav>
                <hr />
            </header>
        </div>
    );
};

export default Header;