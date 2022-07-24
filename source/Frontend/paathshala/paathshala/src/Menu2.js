import React from 'react';
import './menu2.css';
import { Link } from 'react-router-dom';
import './App.css'

const Menu2 = () => {
    return (
        <div id="Menu2_body">
            <div id="bg" className='page'>
                <div id="sub1" class="sub">
                    <Link to="/menu_hindi" id="sub_link">भौतिक विज्ञान</Link>
                </div>
                <div id="sub2" class="sub">
                    <Link to="/menu_hindi"id="sub_link">इतिहास</Link>
                </div>
                <div id="sub3" class="sub">
                    <Link to="/menu_hindi"id="sub_link">पर्यावरणीय अध्ययन</Link>
                </div>
                <div id="sub4" class="sub">
                    <Link to="/stories_hindi"id="sub_link">काहानिया</Link>
                </div>
                <div id="sub5" class="sub">
                    <Link to="/menu_hindi"id="sub_link">कविता</Link>
                </div>
                <div id="sub6" class="sub">
                    <Link to="/menu_hindi"id="sub_link">अर्थशास्त्र</Link>
                </div>
                <div id="sub7" class="sub">
                    <Link to="/menu_hindi"id="sub_link">वित्त</Link>
                </div>
                <div id="sub8" class="sub">
                    <Link to="/menu_hindi"id="sub_link">नैतिक कहानियाँ</Link>
                </div>
                <div id="sub9" class="sub">
                    <Link to="/menu_hindi"id="sub_link">भूगोल</Link>
                </div>
            </div>
        </div>
    )
}

export default Menu2