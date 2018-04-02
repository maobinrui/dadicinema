import{
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import App from "../App";
import Home from "../Components/Home";
import Playing from "../Components/Home/Playing";
import Willplay from "../Components/Home/Willplay";
import List from "../Components/List";
import HotPlay from "../Components/List/HotPlay";
import HotSell from "../Components/List/HotSell";
import Login from "../Components/Login";
import Register from "../Components/Register";
import React from "react";
// jsx语法将会被解析成react方法调用，react模块必须引用
const router =(
  <Router>
    <App>
      <Switch>
        <Route path="/home" render={()=>
            <Home>
              <Switch>
                <Route path="/home/playing" component={Playing}/>
                <Route path="/home/willplay" component={Willplay}/>
                <Redirect from="/" to="/home/playing"/>
              </Switch>
            </Home>
        }/>
        <Route path="/list" render={()=>
            <List>
              <Switch>
                <Route path="/list/hotplay" component={HotPlay}/>
                <Route path="/list/hotsell" component={HotSell}/>
                <Redirect from="/" to="/list/hotplay"/>
              </Switch>
            </List>
        }/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Redirect from="*" to="/home"/>
      </Switch>
    </App> 
  </Router>
)

export default router;