import React, { useState }  from 'react';
import './Chatbot.css';
import { Link } from 'react-router-dom';
import './App.css'

const Chatbot = () => {

    const [lang, setLang] = useState("Eng");
    const [param, setParam] = useState("Eng");
    const setLanguage = () => {
        if({lang} === "Hindi")
            setParam("hindi");

        else 
            setParam("eng");
    }

    return (
        <div id = 'chatbot' className='page'>
            <div id="backdrop">
                <div id="welcomelogo">
                    --------||Paathshala||--------
                </div>
                <div id="box1">
                    <div id="box2">
                        <div id="form"></div>
                        <div id="menu">
                            <p>Select Language</p>
                            <div id="menu1">
                                <label for="Lang">
                                    <select name="pLang" id="Lang" value={lang} onChange={(e) => setLang(e.target.value)}>
                                        <option value="Eng">English</option>
                                        <option value="Hindi">हिंदी</option>
                                    </select>
                                </label>
                                {setLanguage}
                                <div id = 'submit-btn'>
                                    <Link to={`/menu_${lang}`}>Submit</Link>
                                </div>
                            </div>
                        </div>

                        <div id="button">
                            <Link to='/menu_eng' id="menu">Skip to main page</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Chatbot