import React from 'react';
import { Link } from 'react-router-dom';

import './Facts.css';

const Facts = () => {
  return (
    <div id='facts-page'>
        <div className='me'>
            <h2>Know Your Body:</h2>
            
            <div className='facts'>
            
              <ol class="dropdown">Female Body Growth Chart</ol>
              {/* <span class="dropdown-content" id="growth">The two primary parameters that impact your health – your height and weight are correlated using height and weight charts. Thus, certainly it sets the standards for you to determine if your height and weight are in harmony, mirroring the state of your health. </span> <a href="https://iapindia.org/pdf/IAP-Paediatrician-friendly-IAP-Growth-Charts-for-0-18-years-1-746x1024.jpg">Click here</a> */}
              <ol class="dropdown" >Development of Female Body</ol>
              <span class="dropdown-content"id="fem-dev"><a href= "https://www.google.com/search?q=development+of+girl+with+age&rlz=1C1ONGR_enIN951IN951&sxsrf=ALiCzsbzLdkE5d20qZjVqK5bECfYNpB4QQ:1658164697856&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjMua3u-IL5AhUyaGwGHXVgA-EQ_AUoAXoECAEQAw&biw=1536&bih=722&dpr=1.25#imgrc=RTuuU2shqUwoBM">Click here</a></span>
              <ol class="dropdown">Onset of Menstruation</ol>
              <span class="dropdown-content" id="menst-info">
              Why it happens: Menstruation cycle initiates the women’s reproductive age, Menstruation is the elimination of the thickened lining of the uterus (endometrium) from the body through the vagina. Menstrual fluid contains blood, cells from the lining of the uterus (endometrial cells) and mucus. The average length of a period is between three days and one week.
Symptoms: lower abdomen and lower back pain, cramps, etc.
When it happens: from the above image demonstration menstruation for young girls can start from 10-12 years.
Menstruation hygiene: Various hygiene products like sanitary napkins( 4-8 hrs), tampons(4-8hrs) and menstrual cups(8-12hrs) are available to be used to catch menstrual flow. And over the counter medicines for mild cramps relief are available at the nearest drugstore. 
              </span>
              <ol class="dropdown">Vaccination Schedule</ol>
              <span class="dropdown-content" id="vacc"><a href="http://www.nrhmhp.gov.in/content/immunisation">Click here</a></span>
            </div>
        
        </div>
        
        {/* <div className='se'>
        
            <h2>Sex Education:</h2>

            <div className='facts'>
              <ol class="dropdown">You can say no at any time</ol>
              <ol class="dropdown">In many cases, STI testing can be totally confidential.</ol>
              <ol>Fact 3</ol>
              <ol class="dropdown">Fact 4</ol>
            </div>
        </div> */}
    </div>
  )
}

export default Facts