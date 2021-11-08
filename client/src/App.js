import './App.css';
import { BrowserRouter as Router, Route }  from 'react-router-dom';
//import Landing from "./landing/Landing";
import AgencyForm from './registration/AgencyForm';
import Auth from './hoc/auth';
import Login from './login/Login';
import 'antd/dist/antd.css';
import { Switch } from 'antd';
import LandingPage from './LandingPage';
import Registration from './registration/Registration';
import Main from './homepage/Main';
// option
// null : 아무나 출입 가능한 페이지
// true : 로그인한 유저만 출입 가능한 페이지    /registration/agency /registration/individual
// flase : 로그인한 유저는 출입 불가능한 페이지
function App(){
  return(
    <Router>
      <div>
        <Registration/>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage,null)}/>
          <Route exact path="/login" component={Auth(Login,false)}/>
          <Route exact path="/registration" component={Auth(Registration,false)}/>
          <Route exact path="/homepage" component={Auth(Main,null)}/>

        </Switch>
      </div>
      </Router>
  )
}



export default App;
