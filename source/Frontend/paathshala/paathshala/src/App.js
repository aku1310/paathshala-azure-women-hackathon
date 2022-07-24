import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chatbot from './Chatbot';
import Header from './Header';
import Chatbot_EnglishS from './Chatbot_EnglishS';
import Chatbot_HindiS from './Chatbot_HindiS';
import Menu from './Menu';
import Menu2 from './Menu2';
import Scholars from './Scholars';
import Timeout from './Timeout';
import Contact from './Contact';
import Help from './Help';
import Facts from './Facts'

var timer=setTimeout(function(){
  window.location.href='./Timeout'
}, 50000);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path = "/">
            <Chatbot />
          </Route>
          <Route path = "/menu_eng">
            <Menu />
          </Route>
          <Route path = "/menu_hindi">
            <Menu2 />
          </Route>
          <Route path = "/stories_eng">
            <Chatbot_EnglishS />
          </Route>
          <Route path = "/stories_hindi">
            <Chatbot_HindiS />
          </Route>
          <Route path ="/Scholars">
            <Scholars />
          </Route>
          <Route path ="/Timeout">
            <Timeout />
          </Route>
          <Route path ="/Contact">
            <Contact />
          </Route>
          <Route path ="/Help">
            <Help />
          </Route>
          <Route path = "/Facts">
            <Facts />
          </Route>
          </Switch>
          
      </div>
    </Router>
  );
}

export default App;
