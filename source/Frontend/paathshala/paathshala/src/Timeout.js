import React from "react";
import './Timeout.css';

const Timeout = () => {
    return (
        <>
            <div id="PopUp">
                <div id="img">
                    <img src="https://images.unsplash.com/photo-1604798756392-b78585747a3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=251&q=80" alt="Relax"/>
                </div>
                <div id="info">
                    <div id="break-text">
                        <h1 id="break">TAKE A BREAK WITH US!</h1>
                        You've been studying since an hour.
                    </div>
                    <div id="buttons">
                        <a id="cont_button" href="./Scholars"><button >Continue</button></a>
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default Timeout