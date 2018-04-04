import React from "react";
import "./index.css";
import axios from "axios";

class Codes extends React.Component{
    constructor(){
        super();
        this.state={

        }

    }
    render(){
            return <div>
            <div className="cd ">
                    <input  className="iphone" type="text" name="iphone" placeholder="输入购票手机号"/>
                    <input className="pw" type="password" name="password" placeholder="密码"/>
                    <input className="codes" type="text" name="yanzhengma"placeholder="输入验证码"/>
                    <img className="pic" src="/img/get.jpg"/>
                </div>
            </div>
        }
}

export default Codes;