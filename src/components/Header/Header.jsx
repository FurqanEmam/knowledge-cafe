import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            {/* navbar section  */}
            <header class="header-section">
                <nav class="nav-section">
                    <div class="logo">
                        <h2 class="logo-title">Knowledge Cafe</h2>
                    </div>
                    <div class="nav-menu">
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