import React from 'react';
import './App.css';
import './Help.css';
import emailjs from 'emailjs-com';

const Help = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('azure-women-hackathon', 'azure-paathshala', e.target, 'T3sGg9EpCIowRMH3h').then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    e.target.reset();
  };

  return (
    <div className='page1'>
        <div className='container'>
            <h2>If you have any questions, contact us:</h2>
            <div id="form-section">
                <form onSubmit={sendEmail}>
                {/* <form> */}
                  <label for="email">Enter your name:</label><br/>
                  <input type="text" id="email" name="name"/><br/>

                  <label for="feedback">Your Message:</label><br/>
                  <input type="text" id="feedback" name="message"></input><br/>

                  <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Help