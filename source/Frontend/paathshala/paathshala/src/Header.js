import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div class="header">
        <nav>
            <ul>
                <li><Link to = '/'>Home</Link></li>
                <li><Link to = '/menu_eng'>Menu </Link></li>
                <li><Link to = '/menu_hindi'>Menu - Hindi</Link></li>
                <li><Link to = '/Facts'>Know Yourself</Link></li>
                <li><Link to = '/Scholars'>Women Achievers</Link></li>
                <li><Link to = '/Help'>Help</Link></li>
                <li><Link to = '/Contact'>Contact Us</Link></li>
            </ul>
        </nav>
    </div> 
  )
}

export default Header