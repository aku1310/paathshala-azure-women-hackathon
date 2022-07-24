import React from 'react';
import { Link } from 'react-router-dom';
import './Chatbot_englishS.css';
import axios from 'axios';

const Chatbot_EnglishS = () => {

  const heading = "Story: The Lion and the Mouse";
  const story = "A lion was once sleeping in the jungle when a mouse started running up and down his body just for fun. This disturbed the lion&#8217;s sleep, and he woke up quite angry. He was about to eat the mouse when the mouse desperately requested the lion to set him free. `I promise you, I will be of great help to you someday if you save me.` The lion laughed at the mouse&#8217;s confidence and let him go. One day, a few hunters came into the forest and took the lion with them. They tied him up against a tree. The lion was struggling to get out and started to whimper. Soon, the mouse walked past and noticed the lion in trouble. Quickly, he ran and gnawed on the ropes to set the lion free. Both of them sped off into the jungle.";

  const translate = () => {
    axios({
      method: "POST",
      url: `https://api.cognitive.microsofttranslator.com/`,
      data: {
        text: `${heading}`
      },

      params: {
        'api-version': '3.0',
        'to': 'hi'
      },

      headers: {
        'Ocp-Apim-Subscription-Key': "key",
        'Ocp-Apim-Subscription-Region': "southeastasia",
        'Content-type': 'application/json',
        'Access-Control-Allow-Credentials': 'true'
      }
    
    }).then((res) => {
      
    }).catch((err) => {
      alert("Error occurred!");
    })
  }

  const speechtotext = () => {
    axios({
      method: "POST",
      url: `https://southeastasia.tts.speech.microsoft.com/cognitiveservices/v1`,
      data: {
        text: `${story}`
      },

      speak: {
        // 'api-version': '3.0',
        // 'to': 'hi'
        'version': '1.0',
        'lang': 'en-US',
        
      },

      voice: {
        'lang': 'en-US',
        'gender': 'Female',
        'name': 'en-US-JennyNeural'
      },


      headers: {
        'Ocp-Apim-Subscription-Key': "key",
        // 'Ocp-Apim-Subscription-Region': "southeastasia",
        'Content-type': 'application/json',
        // 'Access-Control-Allow-Credentials': 'true'
      }
    
    }).then((res) => {
      
    }).catch((err) => {
      alert("Error occurred!");
    })
  }
  return (
    <div className='page'>
       <h1>{heading}</h1>
    <div>
        <textarea id="text" name="enterText" rows={30} cols={150} >
                {story}</textarea>
    </div>
    <div id="identify">
        Given text is in:
    </div>
    <div >
    <button id="translate" class="button" onClick={translate()}>Translate</button>
        <button id="read" class="button" onClick={speechtotext()}>Read</button>
    </div>
    <div id ="Scholars_link">
      {/* <Link to="/Scholars">Women Achievers</Link> */}
    </div> 
    </div>

  )
}

export default Chatbot_EnglishS