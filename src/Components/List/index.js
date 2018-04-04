import React from "react";
import  "./index.css";
import Headbar from "./Headbar";
import Navbar from "./Navbar";
import Cinema from "./Cinema";
class List extends React.Component{
  constructor(props) {
    super(props);
     this.Citychange = this.Citychange.bind(this);
     this.state={
      headbarisshow:false
     }
      }

  render(){
    return (

        <div id="list">

            <header className="changehead">
                <p onClick={this.Citychange}>请选择城市</p>
                <p>我的订单</p>
            </header>
            <section className="change">
                <p>请选择影城</p>
            <span></span>
            </section>
            <div>
                <p className="nonemove">暂无影片</p>
                <p className="iphonenum">客服电话：400-678-2828</p>
            </div>

      {this.props.children}
      {
        this.state.headbarisshow?<Headbar/>:''
      }<Navbar/>

      <Cinema/>
      </div>
      )

  }
  Citychange(){
    this.setState({
      headbarisshow:!this.state.headbarisshow
    })
  }
}
export default List;