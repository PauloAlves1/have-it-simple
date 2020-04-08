import React from 'react';

import { FaHome, FaRedditAlien, FaRocket, FaSpaceShuttle, FaAngleDoubleRight } from 'react-icons/fa';

import './styles.css';

const Sidebar = () => (
    <div className="sidebar-container">
        <nav className="navbar">
            <ul className="navbar-nav">
                <li class="logo">
                    <a href="/#" className="nav-link">
                        <span className="link-text logo-text">Portfolio</span>
                        <div className="icon">
                            <FaAngleDoubleRight size={32} className="fa" />
                        </div>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/#" className="nav-link">
                        <div className="icon">
                            <FaHome size={32} className="fa" />
                        </div>
                        <span className="link-text">Cats</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a href="/#" className="nav-link">
                        <div className="icon">
                            <FaRedditAlien size={32} className="fa" />
                        </div>
                        <span className="link-text">Aliens</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a href="/#" className="nav-link">
                        <div className="icon">
                            <FaRocket size={32} className="fa" />
                        </div>
                        <span className="link-text">Rocket</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a href="/#" className="nav-link">
                        <div className="icon">
                            <FaSpaceShuttle size={32} className="fa" />
                        </div>
                        <span className="link-text">Space</span>
                    </a>
                </li>
            </ul>
        </nav>

    </div>
);

export default Sidebar;