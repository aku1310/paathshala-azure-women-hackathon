import React from 'react';
import './menu.css';
import './App.css'
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div id="Menu_body">
            <div id="bg" className='page'>
                <div id="sub1" class="sub">
                    <a href="Chatbot_Pscience.html">Physics</a>
                </div>
                <div id="sub2" class="sub">
                    <a href="Chatbot_history.html">History</a>
                </div>
                <div id="sub3" class="sub">
                    <a href="Chatbot_environment.html">Environmental Studies</a>
                </div>
                <div id="sub4" class="sub">
                    <Link to="/stories_eng">Stories</Link>
                </div>
                <div id="sub5" class="sub">
                    <a href="Chatbot_englishP.html">Poetry</a>
                </div>
                <div id="sub6" class="sub">
                    <a href="Chatbot_economics.html">Economics</a>
                </div>
                <div id="sub7" class="sub">
                    <a href="Chatbot_finance.html">Finance</a>
                </div>
                <div id="sub8" class="sub">
                    <a href="Chatbot_moral.html">Moral Stories</a>
                </div>
                <div id="sub9" class="sub">
                    <a href="Chatbot_geo.html">Geography</a>
                </div>
            </div>
        </div>
    )
}

export default Menu