import React from "react";
import './Contact.css';

const Contact = () => {
    return(
        <>
        <div id="developers-pg">
            <h1 id="heading">Developed by</h1>
            <div id="Dev1" class="Developers">
                <div class="Name">Akanksha Kushwaha</div>
                <div class="URLid">Email Id:</div> <div class="URL">https:/xyx.com</div>
                <div class="Phid">Phone No:</div><div class="Phone_No">+91-0011223344</div>
            </div>         
            <div id="Dev2" class="Developers">
                <div class="Name">Jahanvi<br></br> Joshi</div>
                <div class="URLid">Email Id:</div> <div class="URL">https:/xyz.com</div>
                <div class="Phid">Phone No:</div><div class="Phone_No">+91-1122334455</div>
            </div>         
            <div id="Dev3" class="Developers">
                <div class="Name">Shruti<br></br> Gupta</div>
                <div class="URLid">Email Id:</div> <div class="URL">https:/zyx.com</div>
                <div class="Phid">Phone No:</div><div class="Phone_No">+91-2233445566</div>
            </div>         

        </div>
        </>
    )
}
export default Contact