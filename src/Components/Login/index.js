import React from "react";
import  "./index.css";
import {
  NavLink
} from "react-router-dom";

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state={

      }
    }

  render(){
    return (
        <div>

        <div id="login">
            <header>
                <span></span>
                <p>手机登录</p>
            </header>
            <section>

              <ul className="navbar">
                <li><NavLink to="/login/pw" activeClassName="color" >验证码登录</NavLink></li>
                <li> <NavLink to="/login/codes" activeClassName="color">密码登录</NavLink></li>

      </ul>
        {this.props.children} {/*路由容器 */}



                <button className="queren">确认</button>
            </section>
        </div>

        </div>
        )

  }
componentDidMount(){

}
}




export default Login;

