import React from "react";
import "./index.css";
import axios from "axios";
class Pw extends React.Component{
    constructor(){
        super();
        this.state={

        }

    }
    render(){
            return <div>
            <div className="cd ">
                    <input type="text" className="iphone" name="iphone" placeholder="输入购票手机号"/>
                    <input type="text" className="codes" name="yanzhengma" placeholder="验证码"/>
                    <button className="pics">获取验证码</button>
                </div>
            </div>
        }
}
export default Pw;